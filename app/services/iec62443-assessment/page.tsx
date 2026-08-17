import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, ShieldCheckIcon } from "lucide-react";

import { Button } from "../../../components/ui/button";
import { Section } from "../../../components/ui/section";

const deliverables = [
{
title: "Executive Summary",
description:
"Clear management overview of the current OT cybersecurity posture and the most relevant findings.",
},
{
title: "IEC 62443 Maturity",
description:
"A practical view of current cybersecurity maturity and the areas requiring improvement.",
},
{
title: "Gap Analysis",
description:
"Identification of relevant deviations and weaknesses against IEC 62443-oriented security expectations.",
},
{
title: "Risk Heatmap",
description:
"Prioritised visualization of cybersecurity risks based on operational and business impact.",
},
{
title: "Remediation Roadmap",
description:
"A practical improvement plan ordered by priority, risk and operational relevance.",
},
{
title: "Quick Wins",
description:
"Immediate improvements that can deliver meaningful security value without unnecessary disruption.",
},
];

const idealFor = [
{
title: "Industrial organisations",
description:
"Companies operating OT, ICS or industrial control environments.",
},
{
title: "Critical infrastructure",
description:
"Operators that need to understand and reduce cybersecurity exposure.",
},
{
title: "IEC 62443 initiatives",
description:
"Organisations preparing for or strengthening IEC 62443 alignment.",
},
{
title: "Security teams",
description:
"Teams looking for an independent assessment of their OT security posture.",
},
];

const assessmentHighlights = [
"Vendor-neutral and independent",
"Designed for real OT environments",
"Focused on operational continuity",
"Practical risk-based recommendations",
];

export default function IEC62443AssessmentPage() {
return ( <main className="min-h-screen bg-background text-foreground"> <Section className="border-b border-border py-12 sm:py-20 lg:py-24"> <div className="mx-auto max-w-container"> <div className="mb-10"> <a
           href="/"
           className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-brand"
         > <ArrowLeftIcon className="size-4" />
Back to Sentra OT </a> </div>


      <div className="max-w-4xl">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">
          <ShieldCheckIcon className="size-4" />
          IEC 62443 Assessment
        </div>

        <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">
          Understand your OT cybersecurity posture.
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
          An independent IEC 62443-oriented assessment designed to identify
          cybersecurity gaps, prioritise operational risks and establish a
          practical roadmap for improving your industrial environment.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="h-12">
            <a href="/book-assessment">
              Book a Discovery Call
              <ArrowRightIcon className="ml-2 size-4" />
            </a>
          </Button>

          <div className="flex h-12 items-center rounded-lg border border-border bg-card px-5 text-sm font-medium text-muted-foreground">
            Sample report available on request
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {assessmentHighlights.map((highlight) => (
          <div
            key={highlight}
            className="bg-background p-6 text-center"
          >
            <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-brand/10 text-brand">
              <CheckIcon className="size-4" />
            </div>

            <p className="mt-4 text-sm font-semibold">
              {highlight}
            </p>
          </div>
        ))}
      </div>
    </div>
  </Section>

  <Section>
    <div className="mx-auto grid max-w-container gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          The Challenge
        </p>

        <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">
          Most industrial environments have unknown cyber risks.
        </h2>
      </div>

      <div className="space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
        <p>
          Legacy assets, flat networks, undocumented changes and unmanaged
          remote access can increase operational exposure.
        </p>

        <p>
          Many organisations know they need to strengthen their OT
          cybersecurity posture and align with IEC 62443, but lack a clear
          picture of their current state.
        </p>

        <p>
          The assessment transforms that uncertainty into a prioritised,
          actionable improvement plan focused on the risks that matter
          most.
        </p>
      </div>
    </div>
  </Section>

  <Section id="who-its-for" className="bg-muted/20">
    <div className="mx-auto flex max-w-container flex-col gap-10">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          Is This For You?
        </p>

        <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">
          Built for organisations that need clarity on OT cyber risk.
        </h2>

        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
          Designed for organisations that need an independent view of
          their OT cybersecurity posture and a clear path towards
          improvement.
        </p>
      </div>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {idealFor.map((item) => (
          <div
            key={item.title}
            className="group h-full bg-background p-6 transition-colors duration-300 hover:bg-muted/40 sm:p-8"
          >
            <div className="mb-6 h-1 w-12 rounded-full bg-brand transition-all duration-300 group-hover:w-20" />

            <h3 className="text-xl font-semibold">
              {item.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 border-t border-border pt-8 text-center text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground md:grid-cols-3">
        <div>No production disruption</div>
        <div>No vendor lock-in</div>
        <div>Practical recommendations</div>
      </div>
    </div>
  </Section>

  <Section>
    <div className="mx-auto flex max-w-container flex-col gap-10">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          Deliverables
        </p>

        <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">
          What you receive
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          A clear assessment package designed to turn technical findings
          into decisions and practical security improvements.
        </p>
      </div>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {deliverables.map((item) => (
          <div
            key={item.title}
            className="group h-full bg-background p-6 transition-colors duration-300 hover:bg-muted/40 sm:p-8"
          >
            <div className="mb-6 flex size-10 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand">
              <CheckIcon className="size-4" />
            </div>

            <h3 className="text-xl font-semibold">
              {item.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </Section>

  <Section className="border-t border-border">
    <div className="mx-auto max-w-container">
      <div className="rounded-2xl border border-brand/30 bg-brand/5 p-6 sm:p-10 lg:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Next Step
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Ready to understand your OT security posture?
            </h2>

            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              Schedule a discovery conversation to discuss your environment,
              current challenges and the appropriate assessment scope.
            </p>
          </div>

          <Button asChild size="lg" className="h-12 shrink-0">
            <a href="/book-assessment">
              Request an Assessment
              <ArrowRightIcon className="ml-2 size-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  </Section>
</main>


);
}
