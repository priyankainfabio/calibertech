import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ChangingImageCard({ item }: any) {
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let interval: any;

    if (isHovering) {
      interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % item.images.length);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isHovering, item.images.length]);

  return (
    <div
      className="group overflow-hidden rounded-[28px] border border-white/10 bg-zinc-900 transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setIndex(0);
      }}
    >
      <div className="relative h-[340px] overflow-hidden bg-white">
        <img
          src={item.images[index]}
          alt={item.title}
          className="h-full w-full object-cover transition-all duration-700"
        />

<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/5 pointer-events-none" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">
          {item.title}
        </h3>

        <p className="mt-2 text-zinc-400">
          Hover to preview multiple model snapshots.
        </p>
      </div>
    </div>
  );
}

export default function ProjectsShowcase() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [showTekla, setShowTekla] = useState(false);
  const [showMoreGallery, setShowMoreGallery] = useState(false);

  const filters = [
    "All Projects",
    "Jobs at Site",
    "Isometric View",
    "3D Models View",
  ];

  const projects = [
    {
      category: "Jobs at Site",
      image: "/jobs/jobs1.webp",
      title: "Industrial Refinery Structure",
      desc: "Completed refinery steel structure detailing and fabrication support project.",
      tags: ["Steel Detailing", "Industrial", "Fabrication"],
      link: "/projects",
    },

    {
      category: "Jobs at Site",
      image: "/jobs/jobs2.webp",
      title: "Commercial Building Site Work",
      desc: "Commercial steel building detailing and on-site execution support.",
      tags: ["Commercial", "Shop Drawings", "Site Work"],
      link: "/projects",
    },

    {
      category: "Jobs at Site",
      image: "/jobs/jobs3.webp",
      title: "Infrastructure Steel Project",
      desc: "Heavy structural steel support systems and infrastructure execution project.",
      tags: ["Infrastructure", "Structural Steel", "Execution"],
      link: "/projects",
    },
    {
      category: "Jobs at Site",
      image: "/jobs/jobs4.webp",
      title: "Commercial Steel Framing",
      desc: "On-site structural steel framing execution for commercial building development.",
      tags: ["Commercial", "Steel Framing", "Site Work"],
      link: "/projects/commercial",
    },

    {
      category: "Jobs at Site",
      image:"/50208.webp",
      title: "Industrial Plant Structure",
      desc: "Heavy industrial structural steel installation with access systems and platforms.",
      tags: ["Industrial", "Plant", "Steel"],
      link: "/projects/infrastructure",
    },

    {
      category: "Jobs at Site",
      image: "/Charles-De.webp",
      title: "Refinery Construction",
      desc: "Refinery steel detailing and erection support for large-scale industrial operations.",
      tags: ["Refinery", "Oil & Gas", "Industrial"],
      link: "/projects/industrial",
    },

    {
      category: "Jobs at Site",
      image: "/Equipment.webp",
      title: "Structural Beam Installation",
      desc: "Precision beam installation and framing support executed on-site.",
      tags: ["Structural", "Beam", "Steel"],
      link: "/projects/infrastructure",
    },

    {
      category: "Jobs at Site",
      image: "/GVSMainStreet-768x415.webp",
      title: "Multi-Level Commercial Structure",
      desc: "Commercial project steel framework construction with advanced detailing.",
      tags: ["Commercial", "Structure", "Steel"],
      link: "/projects/commercial",
    },
      

    {
      category: "Jobs at Site",
      image: "/process.webp",
      title: "Industrial Steel Framework",
      desc: "Fabrication-ready industrial framework installed for process facility.",
      tags: ["Industrial", "Fabrication", "Framework"],
      link: "/projects/industrial",
    },

    {
      category: "Jobs at Site",
      image: "/stair-big.webp",
      title: "Interior Structural Steel",
      desc: "Interior structural steel and roofing support system installation.",
      tags: ["Interior", "Roofing", "Steel"],
      link: "/projects/industrial",
    },

    {
      category: "Jobs at Site",
      image: "/stairs.webp",
      title: "Process Equipment Installation",
      desc: "Steel support systems for industrial process equipment and vessels.",
      tags: ["Equipment", "Industrial", "Support"],
      link: "/projects/infrastructure",
    },

    {
      category: "Jobs at Site",
      image: "/steel.webp",
      title: "Exterior Steel Staircase",
      desc: "Exterior staircase fabrication and installation for commercial property.",
      tags: ["Staircase", "Commercial", "Steel"],
      link: "/projects/industrial",
    },

    {
      category: "Jobs at Site",
      image: "/steelf.webp",
      title: "Roof Access Steel System",
      desc: "Roof access and safety steel system installation at project site.",
      tags: ["Roof Access", "Safety", "Steel"],
      link: "/projects/infrastructure",
    },

    {
      category: "Jobs at Site",
      image: "/support.webp",
      title: "Industrial Tower Erection",
      desc: "Heavy-duty industrial tower erection with structural steel coordination.",
      tags: ["Tower", "Industrial", "Erection"],
      link: "/projects/industrial",
    },



    {
      category: "Isometric View",
      image: "/isometric.webp",
      title: "Industrial Isometric View",
      desc: "Detailed isometric structural model prepared for fabrication coordination.",
      tags: ["Isometric", "Engineering", "Coordination"],
      link: "/steel-detailing-portfolio"
    },

    {
      category: "Isometric View",
      image: "/images/isometric/11.jpg",
      title: "Steel Pipe Rack Isometric",
      desc: "Pipe rack and industrial structure isometric detailing view.",
      tags: ["Pipe Rack", "Steel Detailing", "Isometric"],
      link: "/steel-detailing-portfolio"
    },
    {
  category: "Isometric View",
  image: "/isometric/iso1.webp",
  title: "Silo Structure Isometric View",
  desc: "Isometric drawing for silo support and industrial equipment structure.",
  tags: ["Silo", "Industrial", "Isometric"],
  link: "/steel-detailing-portfolio"
},
{
  category: "Isometric View",
  image: "/images/isometric/13.jpg",
  title: "Utility Tower Isometric View",
  desc: "Tall steel utility tower isometric view for structural coordination.",
  tags: ["Tower", "Steel Structure", "Isometric"],
  link: "/steel-detailing-portfolio"
},
{
  category: "Isometric View",
  image: "/images/isometric/14.jpg",
  title: "Conveyor Support Isometric View",
  desc: "Conveyor and access support steel structure isometric view.",
  tags: ["Conveyor", "Support Steel", "Isometric"],
  link: "/steel-detailing-portfolio"
},

{
  category: "Isometric View",
  image: "/isometric/iso5.webp",
  title: "Industrial Tower Structure",
  desc: "Advanced steel tower isometric detailing developed for heavy industrial applications.",
  tags: ["Isometric", "Industrial", "Steel Detailing"],
  link: "/steel-detailing-portfolio"
},

{
  category: "Isometric View",
  image: "/isometric/iso2.webp",
  title: "Access Platform & Staircase",
  desc: "Isometric platform model with staircase and safety railing detailing.",
  tags: ["Access Platform", "3D View"],
  link: "/steel-detailing-portfolio",
},

{
  category: "Isometric View",
  image: "/isometric/iso3.webp",
  title: "Airport Entry Canopy",
  desc: "Curved steel canopy detailing developed for airport infrastructure project.",
  tags: ["Canopy", "Infrastructure", "Steel"],
  link: "/steel-detailing-portfolio"
},

{
  category: "Isometric View",
  image: "/isometric/iso4.webp",
  title: "Industrial Plant Framework",
  desc: "Large-scale industrial steel framing and connection detailing project.",
  tags: ["Industrial Plant", "Steel Structure", "BIM"],
  link: "/steel-detailing-portfolio"
},

{
  category: "Isometric View",
  image: "/isometric/iso5.webp",
  title: "Pipe Rack Steel Model",
  desc: "Pipe rack support system designed with precise structural coordination.",
  tags: ["Pipe Rack", "Industrial", "Steel"],
  link: "/steel-detailing-portfolio"
},

{
  category: "Isometric View",
  image: "/isometric/iso6.webp",
  title: "Commercial Building 3D View",
  desc: "Commercial structural framing with detailed 3D visualization and modeling.",
  tags: ["Commercial", "3D View"],
  link: "/steel-detailing-portfolio"
},

{
  category: "Isometric View",
  image: "/isometric/iso7.webp",
  title: "Structural Roof Framing",
  desc: "Roof framing system developed for fabrication-ready steel execution.",
  tags: ["Roof Framing", "Steel", "Structural"],
  link: "/steel-detailing-portfolio"
},

{
  category: "Isometric View",
  image: "/isometric/iso8.webp",
  title: "Complex Industrial Layout",
  desc: "Detailed industrial framework with multi-level steel coordination.",
  tags: ["Industrial", "Complex Structure"],
  link: "/steel-detailing-portfolio"
},

{
  category: "Isometric View",
  image: "/isometric/iso9.webp",
  title: "Warehouse Structural Model",
  desc: "Warehouse steel detailing model optimized for fabrication workflows.",
  tags: ["Warehouse", "Steel Detailing", "3D"],
  link: "/steel-detailing-portfolio"
},

{
  category: "Isometric View",
  image: "/isometric/iso10.webp",
  title: "Steel Roof System",
  desc: "Advanced roof steel system designed with connection-level precision.",
  tags: ["Roof System", "Steel", "Fabrication"],
  link: "/steel-detailing-portfolio"
},

{
  category: "Isometric View",
  image: "/isometric/iso11.webp",
  title: "Commercial Structural Layout",
  desc: "Large commercial steel framework modeled for BIM coordination and detailing.",
  tags: ["Commercial", "BIM", "Isometric"],
  link: "/steel-detailing-portfolio"
},
{
      category: "3D Models View",
      image: "/tekla/t1.webp",
      title: "3D Models View",
      desc: "Fabrication-ready 3D model for structural steel detailing.",
      tags: ["Modeling", "BIM"],
      isCollection: true,
      link:"/portfolio/tekla3D.tsx"
    },
    {
      category: "3D Models View",
      image: "/tekla/t2.webp",
      title: "3D Models View",
      desc: "Fabrication-ready 3D model for structural steel detailing.",
      tags: ["Modeling", "BIM"],
      isCollection: true,
    },

    {
      category: "3D Models View",
      image: "/tekla/t3.webp",
      title: "3D Models View",
      desc: "Fabrication-ready 3D model for structural steel detailing.",
      tags: ["Modeling", "BIM"],
      isCollection: true,
    },
  ];
  const teklaImages = [
  {
    image: "/tekla/t2.webp",
    title: "Roof Access Steel Model",
    desc: "Steel model for rooftop access and support framework.",
  },
  {
    image: "/tekla/t3.webp",
    title: "Industrial Refinery Structure",
    desc: "3D model for refinery and heavy industrial steel systems.",
  },
  {
    image: "/tekla/t4.webp",
    title: "Commercial Steel Structure",
    desc: "Commercial steel model prepared for fabrication and erection.",
  },
  {
    image: "/tekla/t5.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "/tekla/t6.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "/tekla/t7.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "/tekla/t8.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "/tekla/t9.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "/tekla/t10.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "/tekla/t11.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "/tekla/t12.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "/tekla/t13.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "/tekla/t14.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "/tekla/t15.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "/tekla/t16.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "/tekla/t17.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "/tekla/t18.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "/tekla/t19.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "/tekla/t20.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
];
const moreGallery = [
  {
    title: "Moody Elementary",
    images: [
      "/moody elements school/moody elementary.jpg",
      "/moody elements school/snap_001.webp",
      "/moody elements school/snap_002.webp",
      "/moody elements school/snap_003.webp",
      "/moody elements school/snap_004.webp",
      
    ],
  },
  {
    title: "Mohawk Harbor Event Center",
    images: [
      "/Mohawk Harbor/MH.jpg",
      "/Mohawk Harbor/snap_001.webp",
      "/Mohawk Harbor/snap_002.webp",
      "/Mohawk Harbor/snap_003.webp",
      "/Mohawk Harbor/snap_004.webp",
      
    ],
  },
  {
    title: "160 Water Street",
    images: [
      "/water street/ws.jpg",
      "/water street/snap_001.webp",
      "/water street/snap_002.webp",
      "/water street/snap_003.webp",
      "/water street/snap_004.webp",
      
    ],
  },
  {
    title: "Rolex Jumbo Steel",
    images: [
      "/Rolex Jumbo/RJ.jpg",
      "/Rolex Jumbo/snap_0011.webp",
      "/Rolex Jumbo/snap_0021.webp",
      "/Rolex Jumbo/snap_0031.webp",
      "/Rolex Jumbo/snap_0041.webp",
      
    ],
  },
  {
    title: "332 W 11th Street",
    images: [
      "/w 11/11.jpg",
      "/w 11/snap_001.webp",
      "/w 11/snap_002.webp",
      "/w 11/snap_003.webp",
      "/w 11/snap_004.webp",
      
    ],
  },
  {
    title: "76 11th Ave Secondary Steel Facade Support",
    images: [
      "/Steel support/SS.jpg",
      "/Steel support/snap_001.webp",
      "/Steel support/snap_002.webp",
      "/Steel support/snap_003.webp",
      "/Steel support/snap_004.webp",
      "/Steel support/snap_005.webp",
      "/Steel support/snap_006.webp",
      
    ],
  },
  {
    title: "Children's Museum",
    images: [
      "/cmom/CM.jpg",
      "/cmom/snap_001.jpg",
      "/cmom/snap_002.jpg",
      "/cmom/snap_003.webp",
      
    ],
  },

];

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section className="relative overflow-hidden bg-black py-24 text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,0,0,0.12),transparent_35%)]" />
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 xl:px-16">
        
        {/* TOP HEADING */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            OUR PROJECT PORTFOLIO
          </p>

          <h2 className="text-5xl font-black uppercase leading-none tracking-tight md:text-6xl">
            Projects <span className="text-red-500">Showcase</span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Explore our completed structural steel detailing, fabrication,
            3D modeling, and engineering projects delivered globally.
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="mb-16 flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-xl border px-7 py-4 text-lg font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "border-red-500 bg-red-600 text-white shadow-[0_0_30px_rgba(255,0,0,0.35)]"
                  : "border-white/10 bg-white/5 text-white/70 hover:border-red-500 hover:bg-red-600/10 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
          <button
  onClick={() => setShowMoreGallery(true)}
  className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-lg font-semibold text-white/70 transition-all duration-300 hover:border-red-500 hover:bg-red-600 hover:text-white"
>
  View More
</button>

        </div>

        {/* PROJECT GRID */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#111111] transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40"
            >
              
              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-[28px] bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
                />

<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/5 pointer-events-none" />
                
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <h3 className="text-3xl font-bold leading-tight transition-colors duration-300 group-hover:text-red-500">
                  {project.title}
                </h3>

                <p className="mt-5 text-base leading-relaxed text-white/70">
                  {project.desc}
                </p>

                {/* TAGS */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.isCollection ? (
  <button
    onClick={() => setShowTekla(true)}
    className="mt-7 inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
  >
    View Project
    <ArrowUpRight size={16} />
  </button>
) : (
  <Link
    to={project.link}
    className="mt-7 inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
  >
    View Project
    <ArrowUpRight size={16} />
  </Link>
)}
                  
              </div>
            </div>
          ))}
        </div>
      </div>
      {showTekla && (
  <div className="fixed inset-0 z-[9999] overflow-y-auto bg-black/90 p-6 backdrop-blur-md">
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 flex items-start justify-between gap-6">
        <div>
          
          <h2 className="text-5xl font-black text-white">
            3D Models View
          </h2>
          <p className="mt-4 max-w-3xl text-zinc-400">
            Explore fabrication-ready 3D models and BIM coordination visuals.
          </p>
        </div>

        <div className="flex items-center gap-4">
  <Link
    to="/contact"
    className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-red-500 hover:bg-red-600"
  >
    Contact Us
  </Link>

  <button
    onClick={() => setShowTekla(false)}
    className="rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
  >
    Close
  </button>
</div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {teklaImages.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-[260px] w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-zinc-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)}
{showMoreGallery && (
  <div className="fixed inset-0 z-[9999] overflow-y-auto bg-black/90 p-6 backdrop-blur-md">
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 flex items-start justify-between gap-6">
        <div>
          <h2 className="text-5xl font-black text-white">
            Full Model Snap Gallery
          </h2>
          <p className="mt-4 max-w-3xl text-zinc-400">
            Explore more BIM coordination, 3D modeling, and structural project snapshots.
          </p>
        </div>

        <div className="flex items-center gap-4">
  <Link
    to="/contact"
    className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-red-500 hover:bg-red-600"
  >
    Contact Us
  </Link>

  <button
    onClick={() => setShowMoreGallery(false)}
    className="rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
  >
    Close
  </button>
</div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {moreGallery.map((item, index) => (
  <ChangingImageCard key={index} item={item} />
))}
      </div>
    </div>
  </div>
)}

{/* CTA SECTION */}
<div className="relative z-10 mx-auto mt-24 max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-red-600/20 via-black to-black px-8 py-16 text-center backdrop-blur-xl">
  
  <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]" />

  <div className="relative z-10">
    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
      Let's Build Something Great
    </p>

    <h2 className="text-4xl font-black leading-tight text-white md:text-6xl">
      Have a Project?
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
      Connect with Caliber Tech Solutions for fabrication-ready detailing,
      BIM coordination, 3D modeling, and engineering support.
    </p>

    <a
      href="/contact"
      className="mt-10 inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-red-700"
    >
      Contact Us
      <ArrowUpRight size={20} />
    </a>
  </div>
</div>

</section>
  );
}