export default function Infrastructure() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white pt-32 px-6">
      <section className="mx-auto max-w-6xl">
        <p className="text-red-500 font-bold uppercase tracking-[4px]">
          Company Overview
        </p>

        <h1 className="mt-4 text-5xl md:text-7xl font-black">
          Our <span className="text-red-500">Infrastructure</span>
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-400">
          Caliber is equipped with experienced detailing teams, advanced
          engineering software, quality review systems and global delivery
          capability to support steel detailing, fabrication drawings and
          structural engineering requirements.
        </p>

        
        <div className="mt-20">
  <p className="max-w-5xl text-lg leading-8 text-zinc-400">
    Most importantly, we use licensed software only. In addition, we use
    high-end computer hardware required to run the latest versions of the
    software.
  </p>

  <p className="mt-6 max-w-5xl text-lg leading-8 text-zinc-400">
    Further, for design and detailing, we use AutoCAD, Tekla Structures
    and other engineering software.
  </p>

  <div className="mt-12 overflow-hidden rounded-3xl  p-6 md:p-10">
    <img
      src="/software.webp"
      alt="Softwares we use"
      className="mx-auto w-full max-w-4xl rounded-2xl object-contain"
    />
  </div>
</div>
      </section>
    </main>
  );
}