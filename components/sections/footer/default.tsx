import { ShieldCheckIcon } from "lucide-react";

import { Section } from "../../ui/section";

interface FooterProps {
className?: string;
}

export default function Footer({ className }: FooterProps) {
return (
<footer className={className}>
<Section className="border-t border-border py-10">
<div className="mx-auto flex max-w-container flex-col gap-8">
<div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-3">
<div className="flex size-10 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand">
<ShieldCheckIcon className="size-5" />
</div>

          <div>
            <p className="font-semibold tracking-tight">
              Sentra OT
            </p>


            <p className="text-sm text-muted-foreground">
              OT Cybersecurity
            </p>
          </div>
        </div>


        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
          <a
            href="#services"
            className="transition-colors hover:text-brand"
          >
            Services
          </a>


          <a
            href="#faq"
            className="transition-colors hover:text-brand"
          >
            FAQ
          </a>


          <a
            href="/book-assessment"
            className="transition-colors hover:text-brand"
          >
            Contact
          </a>
        </nav>
      </div>


      <div className="flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Sentra OT. All rights reserved.
        </p>


        <p>
          Independent OT cybersecurity assessments and advisory.
        </p>
      </div>
    </div>
  </Section>
</footer>

);
}