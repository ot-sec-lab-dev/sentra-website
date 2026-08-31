"use client";

import Link from "next/link";
import FadeIn from "../FadeIn";
import HeroPanel from "./HeroPanel";
import HeroMetrics from "./HeroMetrics";

export default function Hero() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-8 pt-24 pb-20">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <FadeIn>
            <div>
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
                INDEPENDENT OT CYBERSECURITY CONSULTING
              </p>

              <h1 className="text-7xl font-black leading-[0.95] tracking-tight text-slate-900">
                Secure your
                <br />
                industrial
                <br />
                operations.
                <br />
                Without
                <br />
                disrupting
                <br />
                production.
              </h1>

              <p className="mt-10 max-w-2xl text-xl leading-9 text-slate-600">
                Independent OT cybersecurity consulting for critical
                infrastructure, helping organizations reduce cyber risk,
                achieve compliance and strengthen operational resilience.
              </p>

              <div className="mt-12 flex flex-wrap gap-5">
                <Link
                  href="/book-assessment"
                  className="rounded-xl bg-slate-900 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-600"
                >
                  Book a Discovery Call
                </Link>

                <Link
                  href="/services/iec62443-assessment"
                  className="rounded-xl border border-slate-300 px-8 py-4 text-lg font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  IEC 62443 Assessment
                </Link>

                <a
                  href="https://ot-sec-lab-dev.github.io/sentra-ot/demo/SENTRA_OT_Coria_50_Demo.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-slate-900 bg-white px-8 py-4 text-lg font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  Ver Demo Real: Coria 50% (PDF 82KB)
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex justify-center">
              <HeroPanel />
            </div>
          </FadeIn>
        </div>

        <div className="mt-24">
          <FadeIn delay={0.35}>
            <HeroMetrics />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
