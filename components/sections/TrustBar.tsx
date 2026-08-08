import Container from "../ui/Container";

const items = [
  "IEC 62443",
  "NIS2",
  "Industrial Networks",
  "Critical Infrastructure",
  "Vendor Neutral",
  "Incident Response",
];

export default function TrustBar() {
  return (
    <div className="border-y border-slate-200 bg-slate-50">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-10 py-8 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          {items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </Container>
    </div>
  );
}