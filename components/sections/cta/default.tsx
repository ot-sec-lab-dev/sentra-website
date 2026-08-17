import { ArrowRightIcon, ShieldCheckIcon } from "lucide-react";

import { LinkButton } from "../../ui/link-button";
import { Section } from "../../ui/section";

interface CTAProps {
title?: string;
description?: string;
className?: string;
}

export default function CTA({
title = "Understand your OT security posture.",
description = "Start with a focused conversation about your industrial environment, security objectives and current challenges. We will help define the right assessment scope for your organisation.",
className,
}: CTAProps) {
return (
<Section id="contact" className={className}>
<div className="mx-auto max-w-container">
<div className="relative overflow-hidden rounded-3xl border border-brand/30 bg-brand/5 px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
<div className="absolute -right-24 -top-24 size-64 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative z-10 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            <ShieldCheckIcon className="size-4" />
            OT Cybersecurity
          </div>

          <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">
            {title}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {description}
          </p>
        </div>

        <div className="shrink-0">
          <LinkButton
            href="/book-assessment"
            variant="default"
            size="lg"
            iconRight={<ArrowRightIcon className="size-4" />}
          >
            Book an Assessment
          </LinkButton>
        </div>
      </div>
    </div>
  </div>
</Section>

);
}