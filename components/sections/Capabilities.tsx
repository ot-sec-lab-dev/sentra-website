import Container from "../ui/Container";
import Section from "../ui/Section";

const capabilities = [
  {
    title: "Reduce Cyber Risk",
    description:
      "Identify and prioritize the vulnerabilities that have the greatest impact on your industrial operations.",
  },
  {
    title: "Achieve Compliance",
    description:
      "Accelerate your alignment with IEC 62443, NIS2 and other cybersecurity frameworks through practical guidance.",
  },
  {
    title: "Protect Critical Infrastructure",
    description:
      "Strengthen the resilience of OT environments without disrupting production or operational continuity.",
  },
  {
    title: "Validate Your Defenses",
    description:
      "Assess the effectiveness of your security controls through OT-focused penetration testing and technical reviews.",
  },
  {
    title: "Improve OT Visibility",
    description:
      "Gain a clear understanding of assets, communications and exposure across your industrial networks.",
  },
  {
    title: "Build Long-Term Resilience",
    description:
      "Develop a cybersecurity roadmap that supports business objectives and continuous operational improvement.",
  },
];

export default function Capabilities() {
  return (
    <Section>
      <Container>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          WHERE WE CREATE VALUE
        </p>

        <h2 className="mb-6 text-5xl font-black tracking-tight text-slate-900">
          Business outcomes driven by OT cybersecurity.
        </h2>

        <p className="mb-14 max-w-3xl text-xl leading-9 text-slate-600">
          Every engagement is focused on reducing operational risk,
          strengthening resilience and helping industrial organizations
          make better cybersecurity decisions.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {capabilities.map((item) => (

            <div
              key={item.title}
              className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >

              <div className="mb-6 h-1 w-16 rounded bg-blue-600 transition-all duration-300 group-hover:w-24"></div>

              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="leading-8 text-slate-600">
                {item.description}
              </p>

              <button className="mt-8 font-semibold text-blue-600 transition hover:text-blue-700">
                Learn more →
              </button>

            </div>

          ))}

        </div>

      </Container>
    </Section>
  );
}