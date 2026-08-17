import {
ActivityIcon,
ArrowRightIcon,
CheckCircle2Icon,
TargetIcon,
} from "lucide-react";

import { Section } from "../../ui/section";

interface MethodologyStep {
number: string;
title: string;
description: string;
icon: React.ReactNode;
}

interface MethodologyProps {
title?: string;
description?: string;
steps?: MethodologyStep[];
className?: string;
}

const DEFAULT_STEPS: MethodologyStep[] = [
{
number: "01",
title: "Discover",
description:
"Understand your industrial environment, assets, architecture, communications and operational context.",
icon: <ActivityIcon className="size-5" />,
},
{
number: "02",
title: "Assess",
description:
"Evaluate vulnerabilities, security controls, exposure and the current OT cybersecurity posture.",
icon: <CheckCircle2Icon className="size-5" />,
},
{
number: "03",
title: "Prioritise",
description:
"Translate technical findings into operational risk and establish clear, business-focused priorities.",
icon: <TargetIcon className="size-5" />,
},
{
number: "04",
title: "Improve",
description:
"Define a practical roadmap to strengthen resilience, improve security maturity and support IEC 62443 alignment.",
icon: <ArrowRightIcon className="size-5" />,
},
];

export default function Methodology({
title = "A structured approach to OT cybersecurity.",
description = "Our methodology combines technical assessment with operational context, turning complex industrial security findings into clear decisions and practical improvements.",
steps = DEFAULT_STEPS,
className,
}: MethodologyProps) {
return (
<Section id="methodology" className={className}>
<div className="mx-auto max-w-container">
<div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
<div className="max-w-xl">
<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
<span className="size-1.5 rounded-full bg-brand" />
Methodology
</div>

        <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">
          {title}
        </h2>

        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>

        <div className="mt-8 hidden h-px w-full bg-linear-to-r from-brand/40 via-border to-transparent lg:block" />
      </div>

      <div className="relative">
        <div className="absolute bottom-8 left-5 top-8 hidden w-px bg-linear-to-b from-brand/50 via-brand/20 to-transparent sm:block" />

        <div className="grid gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:bg-brand/[0.03] sm:p-6"
            >
              <div className="flex gap-5">
                <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand">
                  {step.icon}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold tracking-[0.2em] text-brand">
                      {step.number}
                    </span>

                    <h3 className="text-lg font-semibold sm:text-xl">
                      {step.title}
                    </h3>
                  </div>

                  <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="absolute -right-16 -top-16 size-32 rounded-full bg-brand/5 blur-3xl transition-opacity duration-300 group-hover:bg-brand/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</Section>

);
}