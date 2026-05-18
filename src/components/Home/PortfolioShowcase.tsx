import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

const industries = [
  {
    title: "Oil & Gas",
    description:
      "Refineries, process plants, pipe rack structures and heavy industrial facilities.",

    cover: "/Refinery1.webp",

    projects: [
      {
        image: "/refinery1.jpg",
        title: "Refinery Expansion Project",
        desc: "Heavy steel detailing and fabrication support for refinery structures.",
      },

      {
        image: "/refinery2.jpg",
        title: "Pipe Rack Structures",
        desc: "Complex pipe rack detailing with fabrication-ready drawings.",
      },

      {
        image: "/industrial-plant.jpg",
        title: "Industrial Process Plant",
        desc: "Steel assemblies and engineering solutions for industrial plants.",
      },
    ],
  },

  {
    title: "Manufacturing",

    description:
      "Industrial facilities, fabrication units and heavy steel frameworks.",

    cover: "/jobs/jobs4.webp",

    projects: [
      {
        image: "/manufacturing.jpg",
        title: "Steel Manufacturing Facility",
        desc: "Large-scale industrial steel framework detailing project.",
      },

      {
        image: "/factory-structure.jpg",
        title: "Factory Structural System",
        desc: "Structural steel engineering for production facilities.",
      },

      {
        image: "/support.jpg",
        title: "Industrial Support Structures",
        desc: "Fabrication-ready support and platform structures.",
      },
    ],
  },

  {
    title: "Commercial Buildings",

    description:
      "Multi-story steel structures and commercial developments.",

    cover: "/jobs/jobs2.webp",

    projects: [
      {
        image: "/commercial.jpg",
        title: "Commercial Office Complex",
        desc: "High-rise commercial steel detailing and design.",
      },

      {
        image: "/mall.jpg",
        title: "Shopping Mall Structure",
        desc: "Large commercial mall steel framework project.",
      },

      {
        image: "/office.jpg",
        title: "Modern Office Building",
        desc: "Advanced structural detailing for office infrastructure.",
      },
    ],
  },

  {
    title: "Warehousing & Logistics",

    description:
      "PEB structures, logistics hubs and distribution centers.",

    cover: "/jobs/jobs3.webp",

    projects: [
      {
        image: "/warehouse.jpg",
        title: "Logistics Warehouse",
        desc: "PEB warehouse detailing and fabrication drawings.",
      },

      {
        image: "/storage.jpg",
        title: "Storage Distribution Center",
        desc: "Heavy warehouse and logistics infrastructure project.",
      },

      {
        image: "/peb.jpg",
        title: "PEB Industrial Facility",
        desc: "Pre-engineered building detailing solutions.",
      },
    ],
  },

  {
    title: "Infrastructure",

    description:
      "Steel support systems, stair towers and utility structures.",

    cover: "/stairs.webp",

    projects: [
      {
        image: "/stair.jpg",
        title: "Stair Tower Structure",
        desc: "Structural steel stair and railing detailing.",
      },

      {
        image: "/tower.jpg",
        title: "Utility Tower",
        desc: "Steel support tower detailing and fabrication drawings.",
      },

      {
        image: "/roof.jpg",
        title: "Roof Steel Support",
        desc: "Infrastructure support and roof framing solutions.",
      },
    ],
  },

  {
    title: "Industrial Plants",

    description:
      "Process structures, equipment platforms and heavy steel assemblies.",

    cover: "/steelf.webp",

    projects: [
      {
        image: "/industrial-plant.jpg",
        title: "Industrial Processing Unit",
        desc: "Heavy process steel detailing and engineering.",
      },

      {
        image: "/plant2.jpg",
        title: "Equipment Platform System",
        desc: "Structural platform detailing and fabrication.",
      },

      {
        image: "/steel-assembly.jpg",
        title: "Steel Assembly Structure",
        desc: "Large industrial steel assembly support systems.",
      },
    ],
  },
];

export default function PortfolioShowcase() {
  const [selectedIndustry, setSelectedIndustry] = useState<any>(null);

  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 text-white xl:px-[120px]">
      {/* BG GLOW */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* HEADING */}
        <div className="mx-auto max-w-[850px] text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
            Portfolio Showcase
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            Industries <span className="text-red-500">We Serve</span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Explore our structural steel portfolio across industrial,
            commercial and infrastructure sectors worldwide.
          </p>
        </div>

        {/* INDUSTRY CARDS */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndustry(industry)}
              className="group cursor-pointer overflow-hidden rounded-[28px] border border-white/10 bg-zinc-950 transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40"
            >
              {/* IMAGE */}
              <div className="relative h-[260px] overflow-hidden">
                <img
                  src={industry.cover}
                  alt={industry.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <h3 className="text-3xl font-bold">{industry.title}</h3>

                <p className="mt-4 text-base leading-relaxed text-zinc-400">
                  {industry.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                  View Projects
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP MODAL */}
      {selectedIndustry && (
        <div className="fixed inset-0 z-[999] overflow-y-auto bg-black/95 p-6 backdrop-blur-md">
          <div className="mx-auto max-w-7xl">
            {/* TOP */}
            <div className="mb-12 flex items-start justify-between gap-6">
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.35em] text-red-500">
                  Industry Projects
                </p>

                <h2 className="text-5xl font-black">
                  {selectedIndustry.title}
                </h2>

                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-400">
                  {selectedIndustry.description}
                </p>
              </div>

              <button
                onClick={() => setSelectedIndustry(null)}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-red-600"
              >
                <X />
              </button>
            </div>

            {/* PROJECT GRID */}
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {selectedIndustry.projects.map((project: any, i: number) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-[28px] border border-white/10 bg-zinc-950"
                >
                  {/* IMAGE */}
                  <div className="h-[260px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 hover:scale-110"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold">
                      {project.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-zinc-400">
                      {project.desc}
                    </p>

                    <button className="mt-6 rounded-full border border-red-500/30 bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-red-700">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}