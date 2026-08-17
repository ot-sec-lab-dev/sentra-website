import {
ActivityIcon,
ClipboardCheckIcon,
NetworkIcon,
ShieldCheckIcon,
TargetIcon,
WrenchIcon,
} from "lucide-react";

import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface CapabilityItem {
title: string;
description: string;
icon: React.ReactNode;
}

interface ItemsProps {
title?: string;
items?: CapabilityItem[] | false;
className?: string;
}

const DEFAULT_ITEMS: CapabilityItem[] = [
{
title: "OT Security Assessments",
description:
"Independent assessment of your industrial environment, identifying security gaps, operational risks and priority actions.",
icon: <ClipboardCheckIcon className="size-5 stroke-1" />,
},
{
title: "Asset & Network Visibility",
description:
"Understand your OT assets, communications, zones and conduits without disrupting industrial operations.",
icon: <NetworkIcon className="size-5 stroke-1" />,
},
{
title: "IEC 62443 Alignment",
description:
"Evaluate your security posture against IEC 62443 and establish a practical roadmap towards stronger industrial security.",
icon: <ShieldCheckIcon className="size-5 stroke-1" />,
},
{
title: "Risk-Based Prioritisation",
description:
"Transform technical findings into a clear risk picture and prioritised actions based on business and operational impact.",
icon: <TargetIcon className="size-5 stroke-1" />,
},
{
title: "OT Security Monitoring",
description:
"Strengthen visibility and detection capabilities across industrial environments with security-focused monitoring approaches.",
icon: <ActivityIcon className="size-5 stroke-1" />,
},
{
title: "Remediation Guidance",
description:
"Receive practical recommendations designed for real industrial environments, balancing cybersecurity, availability and operational constraints.",
icon: <WrenchIcon className="size-5 stroke-1" />,
},
];

export default function Items({
title = "Capabilities built for industrial environments.",
items = DEFAULT_ITEMS,
className,
}: ItemsProps) {
return (
<Section id="capabilities" className={className}>
<div className="mx-auto flex max-w-container flex-col items-center gap-10 sm:gap-16">
<div className="max-w-3xl text-center">
<p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
Capabilities
</p>

      <h2 className="text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
        {title}
      </h2>


      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
        Practical OT cybersecurity capabilities focused on reducing
        operational risk and strengthening industrial resilience.
      </p>
    </div>


    {items !== false && items.length > 0 && (
      <div className="grid w-full grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Item
            key={item.title}
            className="h-full border-0 bg-background p-6 transition-colors duration-300 hover:bg-muted/40 sm:p-8"
          >
            <ItemTitle className="flex items-center gap-3">
              <ItemIcon>{item.icon}</ItemIcon>
              {item.title}
            </ItemTitle>


            <ItemDescription className="mt-3 leading-7">
              {item.description}
            </ItemDescription>
          </Item>
        ))}
      </div>
    )}
  </div>
</Section>

);
}