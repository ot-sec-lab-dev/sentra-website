import { ArrowRightIcon, CheckIcon } from "lucide-react";

import { LinkButton } from "../../ui/link-button";
import { Section } from "../../ui/section";

interface ServicePackage {
name: string;
description: string;
features: string[];
highlighted?: boolean;
}

interface PricingProps {
title?: string;
description?: string;
packages?: ServicePackage[] | false;
className?: string;
}

const DEFAULT_PACKAGES: ServicePackage[] = [
{
name: "OT Security Assessment",
description:
"A focused assessment to understand your current industrial cybersecurity posture and identify the most relevant risks.",
features: [
"OT asset and network visibility",
"Security posture assessment",
"Risk identification and prioritisation",
"IEC 62443-oriented review",
"Executive findings report",
"Practical remediation roadmap",
],
},
{
name: "OT Security Program",
description:
"A structured security improvement programme for organisations that need to strengthen their OT cybersecurity capabilities.",
highlighted: true,
features: [
"Everything in OT Security Assessment",
"Industrial network architecture review",
"Security controls assessment",
"Vulnerability and exposure analysis",
"Security improvement roadmap",
"Prioritised remediation planning",
],
},
{
name: "Sentra OT Advisory",
description:
"Ongoing expert support for organisations building, improving or maintaining their OT cybersecurity strategy.",
features: [
"Strategic OT cybersecurity guidance",
"Security architecture support",
"IEC 62443 advisory",
"Risk and remediation reviews",
"Technical decision support",
"Continuous security improvement",
],
},
];

export default function Pricing({
title = "Choose the right level of OT cybersecurity support.",
description = "Start with a focused assessment or build a longer-term security programme around the needs of your industrial environment.",
packages = DEFAULT_PACKAGES,
className,
}: PricingProps) {
return ( <Section id="services" className={className}> <div className="mx-auto flex max-w-container flex-col gap-12"> <div className="max-w-3xl"> <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
Services </p>


      <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">
        {title}
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
        {description}
      </p>
    </div>

    {packages !== false && packages.length > 0 && (
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {packages.map((service) => (
          <div
            key={service.name}
            className={[
              "relative flex h-full flex-col rounded-2xl border p-6 sm:p-8",
              service.highlighted
                ? "border-brand/50 bg-brand/5 shadow-xl shadow-brand/10"
                : "border-border bg-background",
            ].join(" ")}
          >
            {service.highlighted && (
              <div className="absolute right-6 top-6 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                Recommended
              </div>
            )}

            <div className="pr-24">
              <h3 className="text-xl font-semibold">{service.name}</h3>

              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {service.description}
              </p>
            </div>

            <div className="my-8 h-px bg-border" />

            <ul className="flex flex-1 flex-col gap-4">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm"
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <CheckIcon className="size-3" />
                  </span>

                  <span className="leading-6 text-muted-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3">
              <LinkButton
                href="/book-assessment"
                variant={service.highlighted ? "default" : "outline"}
                size="lg"
                iconRight={<ArrowRightIcon className="size-4" />}
              >
                Discuss your environment
              </LinkButton>

              {service.name === "OT Security Assessment" && (
                <LinkButton
                  href="/services/iec62443-assessment"
                  variant="ghost"
                  size="lg"
                  iconRight={<ArrowRightIcon className="size-4" />}
                >
                  Explore IEC 62443 Assessment
                </LinkButton>
              )}
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
</Section>


);
}
