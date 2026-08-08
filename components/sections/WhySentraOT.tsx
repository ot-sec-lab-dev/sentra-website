import Container from "../ui/Container";
import Section from "../ui/Section";

const reasons = [
  {
    title: "Independent Expertise",
    text: "We are completely vendor-neutral. Every recommendation is based on what is best for your operational environment."
  },
  {
    title: "OT-First Approach",
    text: "Industrial operations have different priorities than IT. Availability and safety always come first."
  },
  {
    title: "Practical Security",
    text: "We deliver realistic solutions that improve cybersecurity without disrupting production."
  },
  {
    title: "European Standards",
    text: "Our methodology is aligned with IEC 62443, NIS2 and international OT cybersecurity best practices."
  }
];

export default function WhySentraOT() {
  return (
    <Section>
      <Container>

        <div className="grid gap-20 lg:grid-cols-2">

          <div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              WHY SENTRA OT
            </p>

            <h2 className="mb-8 text-5xl font-black tracking-tight text-slate-900">
              Trusted engineering.
              <br />
              Practical cybersecurity.
            </h2>

            <p className="text-xl leading-9 text-slate-600">
              We combine industrial engineering knowledge,
              cybersecurity expertise and international standards
              to help organizations strengthen resilience without
              compromising operational continuity.
            </p>

          </div>

          <div className="space-y-8">

            {reasons.map((reason) => (

              <div
                key={reason.title}
                className="rounded-2xl border border-slate-200 p-8 transition hover:border-blue-300 hover:shadow-lg"
              >

                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  {reason.title}
                </h3>

                <p className="leading-8 text-slate-600">
                  {reason.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </Container>
    </Section>
  );
}