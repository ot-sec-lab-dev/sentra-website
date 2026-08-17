import { ShieldCheckIcon } from "lucide-react";

import { Section } from "../../ui/section";

interface Framework {
name: string;
description: string;
}

interface LogosProps {
title?: string;
frameworks?: Framework[] | false;
className?: string;
}

const DEFAULT_FRAMEWORKS: Framework[] = [
{
name: "IEC 62443",
description: "Industrial automation and control systems security",
},
{
name: "NIST CSF",
description: "Cybersecurity risk management framework",
},
{
name: "MITRE ATT&CK for ICS",
description: "Industrial control system threat intelligence",
},
{
name: "Purdue Model",
description: "Industrial network segmentation and architecture",
},
{
name: "OT / ICS Security",
description: "Operational technology security principles",
},
{
name: "Risk-Based Assessment",
description: "Prioritised security improvement planning",
},
];

export default function Logos({
title = "Built around recognised OT cybersecurity practices.",
frameworks = DEFAULT_FRAMEWORKS,
className,
}: LogosProps) {
return (
<Section className={className}>
<div className="mx-auto flex max-w-container flex-col items-center gap-10">
<div className="flex max-w-3xl flex-col items-center text-center">
<div className="mb-4 flex size-10 items-center justify-center rounded-full border border-brand/30 bg-brand/10 text-brand">
<ShieldCheckIcon className="size-5" />
</div>

      <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
        {title}
      </h2>


      <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
        Our assessments combine recognised cybersecurity frameworks,
        industrial security principles and practical OT experience.
      </p>
    </div>


    {frameworks !== false && frameworks.length > 0 && (
      <div className="grid w-full grid-cols-1 overflow-hidden rounded-2xl border border-border sm:grid-cols-2 lg:grid-cols-3">
        {frameworks.map((framework) => (
          <div
            key={framework.name}
            className="border-b border-border p-6 transition-colors duration-300 hover:bg-muted/40 sm:p-7 lg:nth-[3n]:border-r-0"
          >
            <div className="text-sm font-semibold text-foreground">
              {framework.name}
            </div>


            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {framework.description}
            </p>
          </div>
        ))}
      </div>
    )}
  </div>
</Section>

);
}