import Container from "../ui/Container";
import Section from "../ui/Section";

export default function Hero() {
  return (
    <Section>
      <Container>
        <div className="flex min-h-[80vh] items-center">
          <div className="max-w-4xl">

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
              EUROPEAN OT CYBERSECURITY
            </p>

            <h1 className="mb-8 text-6xl font-black leading-tight tracking-tight text-slate-900">
              Independent OT Cybersecurity Expertise.
              <br />
              Enterprise-Level Results.
            </h1>

            <p className="mb-10 max-w-3xl text-xl leading-9 text-slate-600">
              IEC 62443 assessments, industrial pentesting,
              secure architectures, firewall hardening,
              OT monitoring and incident response
              for critical infrastructure across Europe.
            </p>

            <div className="flex gap-5">

              <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700 transition">
                Book Assessment
              </button>

              <button className="rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-700 hover:bg-slate-50 transition">
                Explore Services
              </button>

            </div>

          </div>
        </div>
      </Container>
    </Section>
  );
}