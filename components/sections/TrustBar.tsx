export default function TrustBar() {
  const items = [
    "IEC 62443",
    "NIS2",
    "MITRE ATT&CK ICS",
    "Industrial Pentesting",
    "Critical Infrastructure",
    "Healthcare (IoMT)",
    "Rail",
    "Europe",
  ];

  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-8 py-8">

        {items.map((item) => (
          <span
            key={item}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600"
          >
            {item}
          </span>
        ))}

      </div>
    </section>
  );
}