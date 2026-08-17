import {
ActivityIcon,
AlertTriangleIcon,
NetworkIcon,
ShieldCheckIcon,
} from "lucide-react";

import { Section } from "../../ui/section";

interface StatItem {
value: string;
label: string;
description: string;
icon: React.ReactNode;
}

interface StatsProps {
title?: string;
description?: string;
items?: StatItem[] | false;
className?: string;
}

const DEFAULT_STATS: StatItem[] = [
{
value: "360°",
label: "OT visibility",
description:
"A structured view of assets, communications, vulnerabilities and security posture.",
icon: <NetworkIcon className="size-5" />,
},
{
value: "IEC 62443",
label: "Security alignment",
description:
"A practical framework for evaluating and improving industrial cybersecurity maturity.",
icon: <ShieldCheckIcon className="size-5" />,
},
{
value: "Risk-based",
label: "Prioritisation",
description:
"Security findings translated into clear priorities based on operational risk.",
icon: <AlertTriangleIcon className="size-5" />,
},
{
value: "OT-first",
label: "Approach",
description:
"Cybersecurity recommendations designed around the realities of industrial environments.",
icon: <ActivityIcon className="size-5" />,
},
];

export default function Stats({
title = "From visibility to actionable security.",
description = "Sentra OT helps organisations understand their industrial cybersecurity posture and turn technical findings into practical decisions.",
items = DEFAULT_STATS,
className,
}: StatsProps) {
return (
<Section id="why-sentra-ot" className={className}>
<div className="mx-auto max-w-container">
<div className="mb-10 max-w-3xl sm:mb-14">
<p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
Why Sentra OT
</p>

      <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">
        {title}
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
        {description}
      </p>
    </div>

    {items !== false && items.length > 0 && (
      <div className="grid overflow-hidden rounded-2xl border border-border sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="border-b border-border p-6 transition-colors duration-300 hover:bg-muted/40 sm:p-8 lg:border-b-0 lg:border-r lg:last:border-r-0"
          >
            <div className="mb-6 flex size-10 items-center justify-center rounded-lg border border-brand/30 bg-brand/10 text-brand">
              {item.icon}
            </div>

            <div className="text-2xl font-semibold text-brand sm:text-3xl">
              {item.value}
            </div>

            <div className="mt-2 text-base font-semibold text-foreground">
              {item.label}
            </div>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    )}
  </div>
</Section>

);
}