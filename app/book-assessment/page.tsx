export default function BookAssessmentPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}

      <section className="border-b border-slate-200">

        <div className="mx-auto max-w-6xl px-8 py-24">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            DISCOVERY SESSION
          </p>

          <h1 className="max-w-4xl text-6xl font-black leading-tight tracking-tight text-slate-900">
            Book your
            <br />
            OT Cybersecurity
            <br />
            Discovery Call
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            A free 30-minute session to understand your industrial
            cybersecurity challenges and determine whether Sentra OT
            can help your organisation.
          </p>

        </div>

      </section>

      {/* WHAT TO EXPECT */}

      <section className="mx-auto max-w-6xl px-8 py-20">

        <h2 className="mb-12 text-4xl font-black text-slate-900">
          What we'll discuss
        </h2>

        <div className="grid gap-8 md:grid-cols-2">

          <div className="rounded-2xl border border-slate-200 p-8">
            <h3 className="mb-4 text-2xl font-bold">
              Your OT Environment
            </h3>

            <p className="leading-8 text-slate-600">
              We will understand your industrial infrastructure,
              operational challenges and cybersecurity maturity.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-8">
            <h3 className="mb-4 text-2xl font-bold">
              Current Risks
            </h3>

            <p className="leading-8 text-slate-600">
              Identify the main cybersecurity concerns affecting your
              production environment.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-8">
            <h3 className="mb-4 text-2xl font-bold">
              Possible Solutions
            </h3>

            <p className="leading-8 text-slate-600">
              Explore practical approaches aligned with your business
              objectives and operational constraints.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-8">
            <h3 className="mb-4 text-2xl font-bold">
              Next Steps
            </h3>

            <p className="leading-8 text-slate-600">
              Receive recommendations about the most appropriate
              assessment or consulting engagement.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-slate-900">

        <div className="mx-auto max-w-5xl px-8 py-24 text-center text-white">

          <h2 className="text-5xl font-black">
            Ready to get started?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            Online booking will be available shortly.
            In the meantime, contact us directly to arrange
            your discovery session.
          </p>

          <a
            href="mailto:contact@sentraot.com"
            className="mt-12 inline-block rounded-xl bg-blue-600 px-10 py-5 text-lg font-semibold transition hover:bg-blue-700"
          >
            Contact Sentra OT
          </a>

        </div>

      </section>

    </main>
  );
}