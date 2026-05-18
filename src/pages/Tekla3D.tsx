const teklaImages = [
  { image: "/tekla/t1.webp", title: "Industrial Pipe Rack 3D Model" },
  { image: "/tekla/t2.webp", title: "Commercial Steel BIM Structure" },
  { image: "/tekla/t3.webp", title: "Ras Laffan Olefin Plant Model" },
  { image: "/tekla/t4.webp", title: "Water Treatment Steel Framework" },
  { image: "/tekla/t5.webp", title: "Steel Conveyor Support System" },
  { image: "/tekla/t6.webp", title: "Multi-Level Access Platform" },
  { image: "/tekla/t7.webp", title: "Airport Entry Canopy BIM Model" },
  { image: "/tekla/t8.webp", title: "Industrial Building Steel Detailing" },
  { image: "/tekla/t9.webp", title: "Pipe Support Isometric View" },
  { image: "/tekla/t10.webp", title: "Structural Steel Framing Model" },
  { image: "/tekla/t11.webp", title: "Warehouse Roof Framing System" },
  { image: "/tekla/t12.webp", title: "Industrial Roof Truss Detailing" },
  { image: "/tekla/t13.webp", title: "Large Scale Steel BIM Coordination" },
  { image: "/tekla/t14.webp", title: "Complex Industrial Isometric View" },
  { image: "/tekla/t15.webp", title: "Architectural Steel Roof Structure" },
  { image: "/tekla/t16.webp", title: "Heavy Industrial Support Framework" },
  { image: "/tekla/t17.webp", title: "Steel Tower Support Structure" },
  { image: "/tekla/t18.webp", title: "Industrial Platform & Stair System" },
  { image: "/tekla/t19.webp", title: "Advanced Conveyor Steel Model" },
  { image: "/tekla/t20.webp", title: "Tekla BIM Coordination Structure" },];

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
          Tekla modeling, steel detailing, BIM coordination and fabrication-ready structural models.
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