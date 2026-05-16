const teklaImages = [
  { image: "/tekla/tekla1.webp", title: "Industrial Structure in Qatar" },
  { image: "/tekla/tekla2.webp", title: "Mainstreet Storage building in LA, USA" },
  { image: "/tekla/tekla3.webp", title: "Ras Laffan Olefin Project" },
  { image: "/tekla/tekla4.webp", title: "Water Treatment plant in US" },
];

export default function Tekla3D() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="px-6 pt-32 pb-16 text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-red-500">
          Portfolio
        </p>

        <h1 className="text-5xl md:text-7xl font-black">
          Tekla <span className="text-red-500">3D</span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
          Tekla 3D modeling, steel detailing, BIM coordination and fabrication-ready structural models.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pb-24 md:grid-cols-2 lg:grid-cols-3">
        {teklaImages.map((item, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-2xl border border-red-500/20 bg-zinc-950 shadow-xl"
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