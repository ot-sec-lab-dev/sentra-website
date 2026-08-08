export default function HeroPanel() {
  return (
    <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            SENTRA OT
          </p>

          <h3 className="mt-2 text-2xl font-black text-slate-900">
            OT Security Overview
          </h3>
        </div>

        <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
          LIVE
        </div>

      </div>

      {/* Divider */}

      <div className="my-8 h-px bg-slate-200" />

      {/* Risk */}

      <div className="flex items-center justify-between">

        <span className="text-slate-500">
          Overall Risk
        </span>

        <span className="text-4xl font-black text-red-600">
          HIGH
        </span>

      </div>

      <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">

        <div className="h-full w-[72%] rounded-full bg-red-500" />

      </div>

      {/* Metrics */}

      <div className="mt-10 grid grid-cols-2 gap-5">

        <div className="rounded-2xl bg-slate-50 p-5">

          <p className="text-sm text-slate-500">
            Assets
          </p>

          <p className="mt-2 text-3xl font-black">
            1,247
          </p>

        </div>

        <div className="rounded-2xl bg-slate-50 p-5">

          <p className="text-sm text-slate-500">
            Vulnerabilities
          </p>

          <p className="mt-2 text-3xl font-black text-red-600">
            84
          </p>

        </div>

        <div className="rounded-2xl bg-slate-50 p-5">

          <p className="text-sm text-slate-500">
            IEC 62443
          </p>

          <p className="mt-2 text-3xl font-black text-blue-600">
            68%
          </p>

        </div>

        <div className="rounded-2xl bg-slate-50 p-5">

          <p className="text-sm text-slate-500">
            Network Segmentation
          </p>

          <p className="mt-2 text-3xl font-black text-amber-500">
            Partial
          </p>

        </div>

      </div>

      {/* Purdue */}

      <div className="mt-10">

        <p className="mb-5 text-sm font-bold uppercase tracking-widest text-slate-500">
          Purdue Model Coverage
        </p>

        {[
          "Level 5",
          "Level 4",
          "Level 3",
          "Level 2",
          "Level 1",
          "Level 0",
        ].map((level) => (

          <div
            key={level}
            className="mb-3 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
          >

            <span className="font-medium">
              {level}
            </span>

            <div className="h-2 w-40 rounded-full bg-slate-200">

              <div className="h-full w-4/5 rounded-full bg-blue-600" />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}