import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  "Refineries",
  "Pipe Racks",
  "Crusher Buildings",
  "Bio-diesel Units",
  "Silo structures",
  "Airports",
  "Multi storied Buildings",
  "Hospitals",
  "Schools",
  "Churches",
  "Banks",
  "Army Facilities",
  "Shopping Malls",
  "Towers",
  "Pre-Engineered Buildings",
];

const categoryImages: Record<string, string[]> = {
  Refineries: ["/Refinery1.webp"],
  Schools: ["/jobs/jobs2.webp"],
  "Shopping Malls": ["/jobs/jobs3.webp"],
  "Multi storied Buildings": ["/jobs/jobs4.webp"],
  Hospitals: ["/jobs/jobs1.webp"],
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

          <div className="grid gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="bg-zinc-100 px-4 py-3 text-left text-lg transition hover:bg-red-600 hover:text-white"
              >
                {cat}
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