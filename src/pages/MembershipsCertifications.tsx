export default function MembershipsCertifications() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white pt-32 px-6">
      <section className="mx-auto max-w-6xl">
        <p className="text-red-500 font-bold uppercase tracking-[4px]">
          Company Overview
        </p>

        <h1 className="mt-4 text-5xl md:text-7xl font-black">
          Memberships & <span className="text-red-500">Certifications</span>
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-400">
          Our work follows industry-focused quality processes and international
          detailing standards to support clients across global markets.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            "Quality Review Process",
            "International Steel Standards",
            "Fabrication Drawing Accuracy",
            "Engineering Documentation",
            "Client Approval Workflow",
            "Project Delivery Compliance",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-red-500/20 bg-zinc-950 p-6"
            >
              <h3 className="text-xl font-bold">{item}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}