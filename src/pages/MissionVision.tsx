export default function MissionVision() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white pt-32 px-6">
      <section className="mx-auto max-w-6xl">
        <p className="text-red-500 font-bold uppercase tracking-[4px]">
          Company Overview
        </p>

        <h1 className="mt-4 text-5xl md:text-7xl font-black">
          Mission & <span className="text-red-500">Vision</span>
        </h1>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-bold text-red-500">Mission</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-400">
              To deliver accurate, reliable and fabrication-ready steel
              detailing solutions that help clients complete complex structural
              projects with precision, speed and confidence.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-bold text-red-500">Vision</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-400">
              To become a trusted global partner for structural steel detailing,
              engineering coordination and BIM-based construction support across
              industrial and commercial sectors.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}