const jobsImages = [
  { image: "/jobs/jobs1.webp", title: "IT building in New York" },
  { image: "/jobs/jobs2.webp", title: "Central High School in New York" },
  { image: "/jobs/jobs3.webp", title: "Kitchen and Bar house in BC" },
  { image: "/jobs/jobs4.webp", title: "Commercial Retail building, BC" },
  { image: "/Charles-De.webp", title: "Commercial Steel Building" },
  { image: "/Equipment.webp", title: "Heavy Equipment Support Structure" },
  { image: "/GVSMainStreet-768x415.webp", title: "Urban Commercial Development" },
  { image: "/process.webp", title: "Process Plant Installation" },
  { image: "/stair-big.webp", title: "Exterior Steel Staircase" },
  { image: "/stairs.webp", title: "Industrial Access Tower" },
  { image: "/steel.webp", title: "Structural Steel Construction" },
  { image: "/steelf.webp", title: "Steel Framing System" },
  { image: "/support.webp", title: "Roof Access Support Frame" },
];


export default function JobsAtSite() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <section className="px-6 pt-32 pb-16 text-center">
        <img
    src="/cmom/CM.jpg"
    alt="Project Portfolio"
    className="absolute inset-0 h-[65%] w-full object-cover opacity-15"
  />
        <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-red-500">
          Portfolio
        </p>

        <h1 className="text-5xl md:text-7xl font-black">
          Jobs at <span className="text-red-500">Site</span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
          View some of the different size and type of jobs completed at site.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pb-24 md:grid-cols-2 lg:grid-cols-3">
        {jobsImages.map((item, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900"
          >
            <div className="h-[280px] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold">{item.title}</h3>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}