export default function HeroMetrics() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-4xl font-black text-slate-900">IEC</p>
        <p className="mt-2 text-sm uppercase tracking-widest text-blue-600">
          62443
        </p>
        <p className="mt-4 text-sm text-slate-500">
          Assessments aligned with the international OT cybersecurity standard.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-4xl font-black text-slate-900">OT</p>
        <p className="mt-2 text-sm uppercase tracking-widest text-blue-600">
          FIRST
        </p>
        <p className="mt-4 text-sm text-slate-500">
          Security designed around operational continuity, not IT assumptions.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-4xl font-black text-slate-900">100%</p>
        <p className="mt-2 text-sm uppercase tracking-widest text-blue-600">
          Vendor Neutral
        </p>
        <p className="mt-4 text-sm text-slate-500">
          Independent recommendations focused only on reducing cyber risk.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-4xl font-black text-slate-900">EU</p>
        <p className="mt-2 text-sm uppercase tracking-widest text-blue-600">
          Critical Infrastructure
        </p>
        <p className="mt-4 text-sm text-slate-500">
          Experience across industrial environments and essential services.
        </p>
      </div>

    </div>
  );
}