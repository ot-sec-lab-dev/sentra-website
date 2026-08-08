export default function IEC62443AssessmentPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* HERO */}

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-8 py-24">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            IEC 62443 ASSESSMENT
          </p>

          <h1 className="max-w-5xl text-6xl font-black leading-tight tracking-tight">
            Understand your OT cyber risk
            <br />
            before an attacker does.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            An independent IEC 62443 assessment that identifies your industrial
            cybersecurity gaps, prioritizes remediation and delivers a practical
            roadmap without disrupting production.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <button className="rounded-xl bg-slate-900 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-600">
              Book Discovery Call
            </button>

            <button className="rounded-xl border border-slate-300 px-8 py-4 text-lg font-semibold transition hover:bg-slate-100">
              Download Sample Report
            </button>

          </div>

          {/* TRUST STRIP */}

          <div className="mt-14 grid gap-6 md:grid-cols-4">

            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="text-lg font-bold text-slate-900">
                IEC 62443
              </p>
              <p className="mt-2 text-slate-500">
                Aligned
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="text-lg font-bold text-slate-900">
                Vendor Neutral
              </p>
              <p className="mt-2 text-slate-500">
                Independent advice
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="text-lg font-bold text-slate-900">
                Critical Infrastructure
              </p>
              <p className="mt-2 text-slate-500">
                OT environments
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="text-lg font-bold text-slate-900">
                OT First
              </p>
              <p className="mt-2 text-slate-500">
                Operational continuity
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* THE CHALLENGE */}

      <section className="mx-auto max-w-7xl px-8 py-24">

        <div className="grid gap-16 lg:grid-cols-2">

          <div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              THE CHALLENGE
            </p>

            <h2 className="text-4xl font-black">
              Most industrial environments have unknown cyber risks.
            </h2>

          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">

            <p>
              Legacy assets, flat networks, undocumented changes and unmanaged
              remote access increase operational exposure.
            </p>

            <p>
              Many organizations know they must comply with IEC 62443 but lack
              visibility into their real cybersecurity posture.
            </p>

            <p>
              Our assessment transforms uncertainty into a prioritized,
              actionable improvement plan.
            </p>

          </div>

        </div>

      </section>

      {/* WHAT YOU RECEIVE */}

      <section className="bg-slate-50">

        <div className="mx-auto max-w-7xl px-8 py-24">

          <h2 className="mb-14 text-center text-5xl font-black">
            What you receive
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                title: "Executive Summary",
                desc: "Clear management overview of the assessment findings."
              },
              {
                title: "IEC 62443 Maturity",
                desc: "Current cybersecurity maturity benchmark."
              },
              {
                title: "Gap Analysis",
                desc: "Identification of deviations against IEC 62443."
              },
              {
                title: "Risk Heatmap",
                desc: "Prioritized visualization of operational risks."
              },
              {
                title: "Roadmap",
                desc: "Practical remediation plan ordered by business impact."
              },
              {
                title: "Quick Wins",
                desc: "Immediate improvements with high security value."
              }
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="mb-4 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-slate-900 py-24">

        <div className="mx-auto max-w-5xl text-center text-white">

          <h2 className="text-5xl font-black">
            Ready to improve your OT security posture?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            Schedule a discovery session and receive an independent
            cybersecurity assessment aligned with IEC 62443.
          </p>

          <button className="mt-12 rounded-xl bg-blue-600 px-10 py-5 text-lg font-semibold transition hover:bg-blue-700">
            Book Discovery Call
          </button>

        </div>

      </section>

    </main>
  );
}