import Container from "../ui/Container";
import Section from "../ui/Section";

const steps = [
  {
    number: "01",
    title: "Assess",
    text: "Understand your industrial environment, assets and cybersecurity risks."
  },
  {
    number: "02",
    title: "Prioritize",
    text: "Focus on the vulnerabilities and weaknesses that matter most."
  },
  {
    number: "03",
    title: "Secure",
    text: "Implement practical improvements without disrupting operations."
  },
  {
    number: "04",
    title: "Improve",
    text: "Continuously strengthen resilience through monitoring and governance."
  }
];

export default function Methodology() {
  return (
    <Section>
      <Container>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          OUR METHODOLOGY
        </p>

        <h2 className="mb-12 text-5xl font-black text-slate-900">
          A practical approach to OT cybersecurity.
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => (

            <div key={step.number}>

              <div className="mb-6 text-5xl font-black text-blue-600">
                {step.number}
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                {step.title}
              </h3>

              <p className="leading-8 text-slate-600">
                {step.text}
              </p>

            </div>

          ))}

        </div>

      </Container>
    </Section>
  );
}