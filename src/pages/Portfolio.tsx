import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Refineries",
    image: "/Refinery1.webp",
    desc: "Industrial refinery and process plant steel structures.",
  },
  {
    title: "Crusher Buildings",
    image: "/jobs/jobs4.webp",
    desc: "Heavy industrial crusher building steel structures.",
  },
  {
    title: "Silo Structures",
    image: "/jobs/jobs3.webp",
    desc: "Silo, support frame and industrial access steel work.",
  },
  {
    title: "Commercial Buildings",
    image: "/jobs/jobs2.webp",
    desc: "Commercial buildings, retail structures and façade steel work.",
  },
  {
    title: "Schools",
    image: "/jobs/jobs1.webp",
    desc: "Institutional and school building steel detailing projects.",
  },
  {
    title: "Tekla 3D Models",
    image: "/tekla/tekla1.webp",
    desc: "Tekla structure modeling and fabrication-ready 3D detailing.",
  },
];

const categoryImages: Record<string, string[]> = {
  Refineries: ["/Refinery1.webp"],
  "Crusher Buildings": ["/jobs/jobs4.webp"],
  "Silo Structures": ["/jobs/jobs3.webp"],
  "Commercial Buildings": ["/jobs/jobs2.webp"],
  Schools: ["/jobs/jobs1.webp"],
  "Tekla 3D Models": [
    "/tekla/tekla1.webp",
    "/tekla/tekla2.webp",
    "/tekla/tekla3.webp",
    "/tekla/tekla4.webp",
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
            Our priority business segments include:
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