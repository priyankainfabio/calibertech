import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Oil & Gas",
    image: "/Refinery1.webp",
    desc: "Refineries, process plants and pipe rack structures.",
  },
  {
    title: "Manufacturing",
    image: "/jobs/jobs4.webp",
    desc: "Industrial facilities and heavy steel frameworks.",
  },
  {
    title: "Commercial Buildings",
    image: "/jobs/jobs2.webp",
    desc: "Multi-story steel structures and commercial spaces.",
  },
  {
    title: "Warehousing & Logistics",
    image: "/jobs/jobs3.webp",
    desc: "PEB structures, distribution centers and storage facilities.",
  },
  {
    title: "Infrastructure",
    image: "/jobs/jobs1.webp",
    desc: "Steel support systems and utility structures.",
  },
  {
    title: "Industrial Plants",
    image: "/tekla/tekla1.webp",
    desc: "Process structures, equipment platforms and heavy steel assemblies.",
  },
  {
    title: "Staircases & Railings",
    image: "/stair-big.webp",
    desc: "Steel staircases, railings and access structure fabrication.",
  },
  {
    title: "Tekla 3D Models",
    image: "/tekla/tekla4.webp",
    desc: "Tekla structure modeling and fabrication-ready 3D detailing.",
  },
  {
  title: "Pipe Rack Structures",
  image: "pipeline.webp",
  desc: "Steel pipe rack support structures for industrial and process plants.",
},
{
  title: "Equipment Platforms",
  image: "Equipment.webp",
  desc: "Access platforms, equipment supports and industrial steel assemblies.",
},
{
  title: "Steel Staircases",
  image: "steel.webp",
  desc: "Steel staircases, railings and access structure detailing.",
},
{
  title: "Process Plants",
  image: "process.webp",
  desc: "Process plant steel structures, refinery units and heavy frameworks.",
},
{
  title: "Retail & Storefronts",
  image: "steelf.webp",
  desc: "Retail frontage, commercial canopy and ornamental steel work.",
},
{
  title: "Utility Structures",
  image: "support.webp",
  desc: "Support steel structures for institutional and utility projects.",
},
{
  title: "Isometric Views",
  image: "isometric.webp",
  desc: "Detailed piping and fabrication isometric drawings for industrial projects.",
},
{
  title: "Tekla 3D Models Views",
  image: "/tekla/tekla4.webp",
  desc: "Fabrication-ready Tekla structure models and BIM coordination.",
},
];

const categoryImages: Record<string, string[]> = {
  "Oil & Gas": [
    "/Refinery1.webp",
    "/portfolio/Refinery1.webp",
  ],

  Manufacturing: [
    "/jobs/jobs4.webp",
    "/portfolio/Charles-De.webp",
  ],

  "Commercial Buildings": [
    "/jobs/jobs2.webp",
    "/portfolio/GVSMainStreet-768x415.webp",
  ],

  "Warehousing & Logistics": [
    "/jobs/jobs3.webp",
    "/portfolio/50208.webp",
  ],

  Infrastructure: [
    "/jobs/jobs1.webp",
    "/portfolio/stairs.webp",
  ],

  "Industrial Plants": [
    "/tekla/tekla1.webp",
    "/tekla/tekla2.webp",
    "/tekla/tekla3.webp",
  ],

  "Staircases & Railings": [
    "/portfolio/stair-big.webp",
    "/portfolio/stairs.webp",
  ],

  "Tekla 3D Models": [
    "/tekla/tekla1.webp",
    "/tekla/tekla2.webp",
    "/tekla/tekla3.webp",
    "/tekla/tekla4.webp",
  ],
  "Pipe Rack Structures": ["/portfolio/50208.webp"],

"Equipment Platforms": [
  "/portfolio/stairs.webp",
  "/portfolio/Charles-De.webp",
],

"Steel Staircases": [
  "/portfolio/stair-big.webp",
  "/portfolio/stairs.webp",
],

"Process Plants": [
  "/portfolio/Refinery1.webp",
  "/Refinery1.webp",
],

"Retail & Storefronts": [
  "/portfolio/GVSMainStreet-768x415.webp",
  "/jobs/jobs2.webp",
],

"Utility Structures": [
  "/jobs/jobs1.webp",
],
"Isometric Views": [
  "/portfolio/isometric.webp",
  "/portfolio/Refinery1.webp",
],
"Tekla 3D Models Views": [
  "/portfolio/isometric.webp",
  "/portfolio/Refinery1.webp",
],
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const images = activeCategory ? categoryImages[activeCategory] || [] : [];

  return (
    <main className="min-h-screen bg-[#eeeeee] text-[#222]">
      <section
        className="h-[260px] bg-cover bg-center"
        style={{ backgroundImage: "url('/portfolio.webp')" }}
      />

      

      <section className="mx-auto max-w-6xl px-4 py-5">
        <div className="rounded-xl bg-white p-8 shadow">
          <h2 className="mb-5 text-3xl font-bold">
            Business segment focus of Caliber in Steel Structures
          </h2>

          <p className="mb-6 text-lg leading-8 text-zinc-700">
            Caliber provides detailed engineering and fabrication drawings for
            structural steel and ornamental ironwork across commercial and
            industrial projects.
          </p>

          <h3 className="mb-4 text-xl font-bold">
            Industries We Serve:
          </h3>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((cat) => (
  <button
    key={cat.title}
    onClick={() => setActiveCategory(cat.title)}
    className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-2xl"
  >
    <div className="relative h-[190px] overflow-hidden bg-zinc-200">
      <img
        src={cat.image}
        alt={cat.title}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white">
        ↗
      </div>
    </div>

    <div className="p-5">
      <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-red-600">
        {cat.title}
      </h3>

      <p className="mt-3 text-base leading-7 text-zinc-600">
        {cat.desc}
      </p>

      <div className="mt-5 font-semibold text-red-600">
        View visuals →
      </div>
    </div>
  </button>
))}
          </div>

          <div className="mt-10 border-t pt-7">
            <h3 className="mb-5 text-3xl">
              Click here to view some of the steel structures successfully
              delivered by Caliber:
            </h3>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/steel-detailing-portfolio/projects-completed-2"
                className="bg-red-600 px-8 py-4 text-lg text-white"
              >
                Jobs at site
              </Link>

              <Link
                to="/steel-detailing-portfolio/tekla-3d"
                className="border border-red-600 px-8 py-4 text-lg text-red-600"
              >
                3D Tekla model view
              </Link>
            </div>
          </div>
        </div>
      </section>

      {activeCategory && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-6">
          <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-xl bg-white p-6">
            <button
              onClick={() => setActiveCategory(null)}
              className="absolute right-4 top-4 rounded-full bg-red-600 p-2 text-white"
            >
              <X />
            </button>

            <h2 className="mb-6 text-3xl font-bold text-red-600">
              {activeCategory}
            </h2>

            {images.length > 0 ? (
              <div className="grid gap-5 md:grid-cols-2">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={activeCategory}
                    className="h-[320px] w-full rounded-lg object-cover"
                  />
                ))}
              </div>
            ) : (
              <p className="text-lg text-zinc-600">
                Add images for this category in the code.
              </p>
            )}
          </div>
        </div>
      )}
    </main>
  );
}