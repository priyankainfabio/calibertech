import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsShowcase() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [showTekla, setShowTekla] = useState(false);

  const filters = [
    "All Projects",
    "Jobs at Site",
    "Isometric View",
    "Tekla Models View",
  ];

  const projects = [
    {
      category: "Jobs at Site",
      image: "/jobs/jobs1.webp",
      title: "Industrial Refinery Structure",
      desc: "Completed refinery steel structure detailing and fabrication support project.",
      tags: ["Steel Detailing", "Industrial", "Fabrication"],
    },

    {
      category: "Jobs at Site",
      image: "/jobs/jobs2.webp",
      title: "Commercial Building Site Work",
      desc: "Commercial steel building detailing and on-site execution support.",
      tags: ["Commercial", "Shop Drawings", "Site Work"],
    },

    {
      category: "Jobs at Site",
      image: "/jobs/jobs3.webp",
      title: "Infrastructure Steel Project",
      desc: "Heavy structural steel support systems and infrastructure execution project.",
      tags: ["Infrastructure", "Structural Steel", "Execution"],
    },
    {
      category: "Jobs at Site",
      image: "/jobs/jobs4.webp",
      title: "Commercial Steel Framing",
      desc: "On-site structural steel framing execution for commercial building development.",
      tags: ["Commercial", "Steel Framing", "Site Work"],
    },

    {
      category: "Jobs at Site",
      image:"/50208.webp",
      title: "Industrial Plant Structure",
      desc: "Heavy industrial structural steel installation with access systems and platforms.",
      tags: ["Industrial", "Plant", "Steel"],
    },

    {
      category: "Jobs at Site",
      image: "/Charles-De.webp",
      title: "Refinery Construction",
      desc: "Refinery steel detailing and erection support for large-scale industrial operations.",
      tags: ["Refinery", "Oil & Gas", "Industrial"],
    },

    {
      category: "Jobs at Site",
      image: "/Equipment.webp",
      title: "Structural Beam Installation",
      desc: "Precision beam installation and framing support executed on-site.",
      tags: ["Structural", "Beam", "Steel"],
    },

    {
      category: "Jobs at Site",
      image: "/GVSMainStreet-768x415.webp",
      title: "Multi-Level Commercial Structure",
      desc: "Commercial project steel framework construction with advanced detailing.",
      tags: ["Commercial", "Structure", "Steel"],
    },
      

    {
      category: "Jobs at Site",
      image: "/process.webp",
      title: "Industrial Steel Framework",
      desc: "Fabrication-ready industrial framework installed for process facility.",
      tags: ["Industrial", "Fabrication", "Framework"],
    },

    {
      category: "Jobs at Site",
      image: "/stair-big.webp",
      title: "Interior Structural Steel",
      desc: "Interior structural steel and roofing support system installation.",
      tags: ["Interior", "Roofing", "Steel"],
    },

    {
      category: "Jobs at Site",
      image: "/stairs.webp",
      title: "Process Equipment Installation",
      desc: "Steel support systems for industrial process equipment and vessels.",
      tags: ["Equipment", "Industrial", "Support"],
    },

    {
      category: "Jobs at Site",
      image: "/steel.webp",
      title: "Exterior Steel Staircase",
      desc: "Exterior staircase fabrication and installation for commercial property.",
      tags: ["Staircase", "Commercial", "Steel"],
    },

    {
      category: "Jobs at Site",
      image: "/steelf.webp",
      title: "Roof Access Steel System",
      desc: "Roof access and safety steel system installation at project site.",
      tags: ["Roof Access", "Safety", "Steel"],
    },

    {
      category: "Jobs at Site",
      image: "/support.webp",
      title: "Industrial Tower Erection",
      desc: "Heavy-duty industrial tower erection with structural steel coordination.",
      tags: ["Tower", "Industrial", "Erection"],
    },



    {
      category: "Isometric View",
      image: "/isometric.webp",
      title: "Industrial Isometric View",
      desc: "Detailed isometric structural model prepared for fabrication coordination.",
      tags: ["Isometric", "Engineering", "Coordination"],
    },

    {
      category: "Isometric View",
      image: "/images/isometric/11.jpg",
      title: "Steel Pipe Rack Isometric",
      desc: "Pipe rack and industrial structure isometric detailing view.",
      tags: ["Pipe Rack", "Steel Detailing", "Isometric"],
    },
    {
  category: "Isometric View",
  image: "/isometric/iso1.webp",
  title: "Silo Structure Isometric View",
  desc: "Isometric drawing for silo support and industrial equipment structure.",
  tags: ["Silo", "Industrial", "Isometric"],
},
{
  category: "Isometric View",
  image: "/images/isometric/13.jpg",
  title: "Utility Tower Isometric View",
  desc: "Tall steel utility tower isometric view for structural coordination.",
  tags: ["Tower", "Steel Structure", "Isometric"],
},
{
  category: "Isometric View",
  image: "/images/isometric/14.jpg",
  title: "Conveyor Support Isometric View",
  desc: "Conveyor and access support steel structure isometric view.",
  tags: ["Conveyor", "Support Steel", "Isometric"],
},
{
  category: "Isometric View",
  image: "/images/isometric/15.jpg",
  title: "Conveyor Support Isometric View",
  desc: "Conveyor and access support steel structure isometric view.",
  tags: ["Conveyor", "Support Steel", "Isometric"],
},
{
  category: "Isometric View",
  image: "/isometric/iso1.webp",
  title: "Industrial Tower Structure",
  desc: "Advanced steel tower isometric detailing developed for heavy industrial applications.",
  tags: ["Isometric", "Industrial", "Steel Detailing"],
},

{
  category: "Isometric View",
  image: "/isometric/iso2.webp",
  title: "Access Platform & Staircase",
  desc: "Tekla isometric platform model with staircase and safety railing detailing.",
  tags: ["Access Platform", "Tekla", "3D View"],
},

{
  category: "Isometric View",
  image: "/isometric/iso3.webp",
  title: "Airport Entry Canopy",
  desc: "Curved steel canopy detailing developed for airport infrastructure project.",
  tags: ["Canopy", "Infrastructure", "Steel"],
},

{
  category: "Isometric View",
  image: "/isometric/iso4.webp",
  title: "Industrial Plant Framework",
  desc: "Large-scale industrial steel framing and connection detailing project.",
  tags: ["Industrial Plant", "Steel Structure", "BIM"],
},

{
  category: "Isometric View",
  image: "/isometric/iso5.webp",
  title: "Pipe Rack Steel Model",
  desc: "Pipe rack support system designed with precise structural coordination.",
  tags: ["Pipe Rack", "Industrial", "Steel"],
},

{
  category: "Isometric View",
  image: "/isometric/iso6.webp",
  title: "Commercial Building 3D View",
  desc: "Commercial structural framing with detailed 3D visualization and modeling.",
  tags: ["Commercial", "3D View", "Tekla"],
},

{
  category: "Isometric View",
  image: "/isometric/iso7.webp",
  title: "Structural Roof Framing",
  desc: "Roof framing system developed for fabrication-ready steel execution.",
  tags: ["Roof Framing", "Steel", "Structural"],
},

{
  category: "Isometric View",
  image: "/isometric/iso8.webp",
  title: "Complex Industrial Layout",
  desc: "Detailed industrial framework with multi-level steel coordination.",
  tags: ["Industrial", "Complex Structure", "Tekla"],
},

{
  category: "Isometric View",
  image: "/isometric/iso9.webp",
  title: "Warehouse Structural Model",
  desc: "Warehouse steel detailing model optimized for fabrication workflows.",
  tags: ["Warehouse", "Steel Detailing", "3D"],
},

{
  category: "Isometric View",
  image: "/isometric/iso10.webp",
  title: "Steel Roof System",
  desc: "Advanced roof steel system designed with connection-level precision.",
  tags: ["Roof System", "Steel", "Fabrication"],
},

{
  category: "Isometric View",
  image: "/isometric/iso11.webp",
  title: "Commercial Structural Layout",
  desc: "Large commercial steel framework modeled for BIM coordination and detailing.",
  tags: ["Commercial", "BIM", "Isometric"],
},
{
      category: "Tekla Models View",
      image: "/tekla/t1.webp",
      title: "Tekla Models View",
      desc: "Fabrication-ready Tekla model for structural steel detailing.",
      tags: ["Tekla", "Modeling", "BIM"],
      isCollection: true,
    },
    {
      category: "Tekla Models View",
      image: "/tekla/t2.webp",
      title: "Tekla Models View",
      desc: "Fabrication-ready Tekla model for structural steel detailing.",
      tags: ["Tekla", "Modeling", "BIM"],
      isCollection: true,
    },

    {
      category: "Tekla Models View",
      image: "public/tekla/t3.webp",
      title: "Tekla Models View",
      desc: "Fabrication-ready Tekla model for structural steel detailing.",
      tags: ["Tekla", "Modeling", "BIM"],
      isCollection: true,
    },
  ];
  const teklaImages = [
  {
    image: "public/tekla/t2.webp",
    title: "Roof Access Steel Model",
    desc: "Tekla steel model for rooftop access and support framework.",
  },
  {
    image: "public/tekla/t3.webp",
    title: "Industrial Refinery Structure",
    desc: "Tekla model for refinery and heavy industrial steel systems.",
  },
  {
    image: "public/tekla/t4.webp",
    title: "Commercial Steel Structure",
    desc: "Commercial steel model prepared for fabrication and erection.",
  },
  {
    image: "public/tekla/t5.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "public/tekla/t6.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "public/tekla/t7.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "public/tekla/t8.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "public/tekla/t9.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "public/tekla/t10.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "public/tekla/t11.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "public/tekla/t12.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "public/tekla/t13.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "public/tekla/t14.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "public/tekla/t15.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "public/tekla/t16.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "public/tekla/t17.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "public/tekla/t18.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "public/tekla/t19.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
  },
  {
    image: "public/tekla/t20.webp",
    title: "Heavy Industrial Framework",
    desc: "Complex industrial steel detailing and BIM coordination.",
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
            Tekla modeling, and engineering projects delivered globally.
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
        </div>

        {/* PROJECT GRID */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#111111] transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40"
            >
              
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
                  <ArrowUpRight size={26} />
                </div>
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
                <button
  type="button"
  onClick={() => {
    if (project.isCollection) {
      setShowTekla(true);
    }
  }}
  className="mt-7 inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
>
  {project.isCollection ? "View More" : "View Project"}
  <ArrowUpRight size={16} />
</button>
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
            Tekla Models View
          </h2>
          <p className="mt-4 max-w-3xl text-zinc-400">
            Explore fabrication-ready Tekla models and BIM coordination visuals.
          </p>
        </div>

        <button
          onClick={() => setShowTekla(false)}
          className="rounded-full bg-red-600 px-5 py-3 font-bold text-white"
        >
          Close
        </button>
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
    </section>
  );
}