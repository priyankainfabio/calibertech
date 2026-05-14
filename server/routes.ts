import { Router, type Request, type Response } from "express";
import { storage } from "./storage";
import { insertProjectSchema } from "./schema";
import { z } from "zod";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadsDir = path.join(__dirname, "..", "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const imageStorage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (_req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, uniqueSuffix + ext);
  },
});

const upload = multer({
  storage: imageStorage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowed = /jpeg|jpg|png|gif|webp|svg/;
    const extname = allowed.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowed.test(file.mimetype);
    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"));
    }
  },
});

export const router = Router();

const SITE_URL = 'https://calibertechsolutions.com';

router.get("/sitemap.xml", (_req: Request, res: Response) => {
  const pages = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/about', priority: '0.8', changefreq: 'monthly' },
    { loc: '/services', priority: '0.9', changefreq: 'monthly' },
    { loc: '/services/structural-steel-detailing', priority: '0.9', changefreq: 'monthly' },
    { loc: '/services/steel-design', priority: '0.9', changefreq: 'monthly' },
    { loc: '/services/connection-design', priority: '0.9', changefreq: 'monthly' },
    { loc: '/services/steel-fabrication', priority: '0.8', changefreq: 'monthly' },
    { loc: '/services/pe-stamp', priority: '0.8', changefreq: 'monthly' },
    { loc: '/projects', priority: '0.8', changefreq: 'weekly' },
    { loc: '/projects/commercial', priority: '0.7', changefreq: 'weekly' },
    { loc: '/projects/industrial', priority: '0.7', changefreq: 'weekly' },
    { loc: '/projects/infrastructure', priority: '0.7', changefreq: 'weekly' },
    { loc: '/projects/residential', priority: '0.7', changefreq: 'weekly' },
    { loc: '/blog', priority: '0.7', changefreq: 'weekly' },
    { loc: '/blog/outsourcing-design-detailing-infographic', priority: '0.6', changefreq: 'monthly' },
    { loc: '/blog/why-steel-shop-drawings-detailing-critical', priority: '0.6', changefreq: 'monthly' },
    { loc: '/blog/outsourcing-design-detailing-global-phenomenon', priority: '0.6', changefreq: 'monthly' },
    { loc: '/steel-detailing-portfolio/models', priority: '0.8', changefreq: 'monthly' },
    { loc: '/steel-detailing-portfolio/isometric-views', priority: '0.8', changefreq: 'monthly' },
    { loc: '/contact', priority: '0.8', changefreq: 'monthly' },
  ];

  const today = new Date().toISOString().split('T')[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${SITE_URL}${p.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  res.header('Content-Type', 'application/xml');
  res.send(xml);
});

router.get("/robots.txt", (_req: Request, res: Response) => {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /admin/login

Sitemap: ${SITE_URL}/sitemap.xml
`;
  res.header('Content-Type', 'text/plain');
  res.send(robotsTxt);
});

router.post("/api/upload", (req: Request, res: Response) => {
  upload.single("image")(req, res, (err: any) => {
    if (err) {
      if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
          return res.status(400).json({ error: "File too large. Maximum size is 10MB." });
        }
        return res.status(400).json({ error: err.message });
      }
      return res.status(400).json({ error: err.message || "Upload failed" });
    }
    if (!req.file) {
      return res.status(400).json({ error: "No image file provided" });
    }
    const imageUrl = `/api/uploads/${req.file.filename}`;
    res.json({ url: imageUrl });
  });
});

router.post("/api/contact", async (req: Request, res: Response) => {
  try {
    const { fullName, email, phone, company, country, city, requirements, projectDetails } = req.body;
    if (!fullName || !email || !phone) {
      return res.status(400).json({ error: "Full name, email, and phone are required" });
    }
    console.log("Contact form submission:", { fullName, email, phone, company, country, city, requirements, projectDetails });
    res.json({ success: true, message: "Message received successfully" });
  } catch (error) {
    console.error("Error processing contact form:", error);
    res.status(500).json({ error: "Failed to process contact form" });
  }
});

router.get("/api/projects", async (_req: Request, res: Response) => {
  try {
    const projects = await storage.getProjects();
    res.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

router.get("/api/projects/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid project ID" });
    }
    const project = await storage.getProject(id);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.json(project);
  } catch (error) {
    console.error("Error fetching project:", error);
    res.status(500).json({ error: "Failed to fetch project" });
  }
});

router.post("/api/projects", async (req: Request, res: Response) => {
  try {
    const dataWithImages = {
      ...req.body,
      images: req.body.images || []
    };
    const parsed = insertProjectSchema.safeParse(dataWithImages);
    if (!parsed.success) {
      return res.status(400).json({ error: "Invalid project data", details: parsed.error.issues });
    }
    const project = await storage.createProject(parsed.data);
    res.status(201).json(project);
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ error: "Failed to create project" });
  }
});

router.put("/api/projects/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid project ID" });
    }
    const dataWithImages = {
      ...req.body,
      images: req.body.images !== undefined ? req.body.images : []
    };
    const parsed = insertProjectSchema.partial().safeParse(dataWithImages);
    if (!parsed.success) {
      return res.status(400).json({ error: "Invalid project data", details: parsed.error.issues });
    }
    const project = await storage.updateProject(id, parsed.data);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.json(project);
  } catch (error) {
    console.error("Error updating project:", error);
    res.status(500).json({ error: "Failed to update project" });
  }
});

router.delete("/api/projects/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid project ID" });
    }
    const success = await storage.deleteProject(id);
    if (!success) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting project:", error);
    res.status(500).json({ error: "Failed to delete project" });
  }
});

router.post("/api/projects/seed", async (_req: Request, res: Response) => {
  try {
    const defaultProjects = [
      {
        title: 'Modern Office Complex',
        category: 'commercial',
        location: 'New York, USA',
        year: '2023',
        description: 'A state-of-the-art 25-story office complex with advanced structural steel framework.',
        image: 'https://img.freepik.com/premium-photo/modern-business-office-building_1127-20327.jpg',
        images: [],
        services: ['Structural Steel Design', 'Steel Detailing', 'Connection Design', '3D Modeling'],
        stats: { area: '500,000 sq ft', steel: '8,500 tons', duration: '18 months' },
        highlights: ['LEED Gold Certified', 'Seismic-resistant design', 'Advanced BIM modeling', 'On-time delivery'],
      },
      {
        title: 'Manufacturing Plant',
        category: 'industrial',
        location: 'Texas, USA',
        year: '2023',
        description: 'Large-scale manufacturing facility with heavy-duty steel structures.',
        image: 'https://tbm-corp.com/wp-content/uploads/2020/04/manufacturing-plant.jpg',
        images: [],
        services: ['Steel Detailing', 'Fabrication Support', 'MTO Estimation', 'Shop Drawings'],
        stats: { area: '750,000 sq ft', steel: '12,000 tons', duration: '24 months' },
        highlights: ['Heavy-duty structures', 'Fabrication-ready drawings', 'Cost optimization', 'Quality assurance'],
      },
      {
        title: 'Highway Bridge Project',
        category: 'infrastructure',
        location: 'California, USA',
        year: '2022',
        description: 'Major highway bridge with complex steel truss system.',
        image: 'https://creativedesignresolutions.com/wp-content/uploads/2016/04/CDR-1395-540x360.jpg',
        images: [],
        services: ['Structural Design', 'Connection Design', 'Steel Detailing', 'BIM Services'],
        stats: { span: '450 meters', steel: '6,200 tons', duration: '20 months' },
        highlights: ['Complex truss system', 'Code-compliant design', 'Detailed documentation', 'Successful completion'],
      },
      {
        title: 'Luxury Residential Tower',
        category: 'residential',
        location: 'Miami, USA',
        year: '2024',
        description: 'Premium residential high-rise with innovative steel frame design.',
        image: 'https://images.squarespace-cdn.com/content/v1/6321a8468450453e98507255/1664460548187-FK10P88WOGNX157QYZ5D/v3---Private-Luxury-Residential-Tower%2C-Kolkata.jpg',
        images: [],
        services: ['Steel Frame Design', '3D Modeling', 'Steel Detailing', 'Estimation'],
        stats: { floors: '35 stories', steel: '4,800 tons', duration: '16 months' },
        highlights: ['Innovative design', 'Premium quality', 'BIM integration', 'Client satisfaction'],
      },
      {
        title: 'Shopping Mall Complex',
        category: 'commercial',
        location: 'Chicago, USA',
        year: '2023',
        description: 'Large shopping mall with expansive steel structures.',
        image: 'https://cdnb.artstation.com/p/assets/images/images/023/283/189/large/deepak-satokiya-shoppingview-a.jpg?1578687346',
        images: [],
        services: ['Structural Design', 'Steel Detailing', 'Shop Drawings', 'MTO'],
        stats: { area: '600,000 sq ft', steel: '9,500 tons', duration: '22 months' },
        highlights: ['Large span structures', 'Efficient design', 'Timely delivery', 'Quality excellence'],
      },
      {
        title: 'Warehouse Facility',
        category: 'industrial',
        location: 'Atlanta, USA',
        year: '2024',
        description: 'Massive warehouse facility with pre-engineered building systems.',
        image: 'https://bauerpainting.com/wp-content/uploads/2024/02/b99acd00thumbnail.jpeg',
        images: [],
        services: ['PEB Design', 'Steel Detailing', 'Fabrication Support', 'Estimation'],
        stats: { area: '1,200,000 sq ft', steel: '15,000 tons', duration: '28 months' },
        highlights: ['PEB systems', 'Cost-effective solution', 'Rapid construction', 'Quality deliverables'],
      },
      {
        title: 'Sports Stadium',
        category: 'infrastructure',
        location: 'Dallas, USA',
        year: '2022',
        description: 'Iconic sports stadium with complex steel roof structure.',
        image: 'https://tse3.mm.bing.net/th/id/OIP.-etEbllW6uYvdEOaJzE-xwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
        images: [],
        services: ['Structural Design', 'Connection Design', '3D Modeling', 'Steel Detailing'],
        stats: { capacity: '80,000 seats', steel: '18,000 tons', duration: '30 months' },
        highlights: ['Complex roof structure', 'Advanced engineering', 'BIM implementation', 'Iconic design'],
      },
      {
        title: 'Mixed-Use Development',
        category: 'commercial',
        location: 'Seattle, USA',
        year: '2024',
        description: 'Modern mixed-use development combining residential and commercial spaces.',
        image: 'https://th.bing.com/th/id/R.9e9c8eb23752798270f74c617826bb01?rik=aOauzgBTnUCNtQ&riu=http%3a%2f%2fwww.ppcc.com.kh%2fppcc_prime%2fwp-content%2fuploads%2ftheedge-ppcc-05.jpg&ehk=bj2fktWVuNMLKs3dm66oFN0JVL1PDscP66fMB%2b3Nbdg%3d&risl=&pid=ImgRaw&r=0',
        images: [],
        services: ['Steel Frame Design', 'Steel Detailing', 'BIM Services', 'Estimation'],
        stats: { area: '850,000 sq ft', steel: '11,500 tons', duration: '26 months' },
        highlights: ['Mixed-use design', 'Sustainable solutions', 'Comprehensive services', 'Project success'],
      },
    ];

    for (const project of defaultProjects) {
      await storage.createProject(project);
    }

    res.json({ message: "Database seeded with default projects" });
  } catch (error) {
    console.error("Error seeding database:", error);
    res.status(500).json({ error: "Failed to seed database" });
  }
});
