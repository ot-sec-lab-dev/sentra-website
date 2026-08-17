"use client";

import {
ArrowLeftIcon,
ArrowRightIcon,
CalendarIcon,
ShieldCheckIcon,
} from "lucide-react";
import { useState } from "react";

import { Button } from "../../components/ui/button";
import { Section } from "../../components/ui/section";

const CAL_COM_URL =
"https://cal.com/juan-jose-calado-carrillo-qlsaya/30min";

const CONTACT_EMAIL = "juanjocc.otsec@gmail.com";

export default function BookAssessmentPage() {
const [formStatus, setFormStatus] = useState("");

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
event.preventDefault();

const formData = new FormData(event.currentTarget);

const name = String(formData.get("name") ?? "").trim();
const company = String(formData.get("company") ?? "").trim();
const email = String(formData.get("email") ?? "").trim();
const phone = String(formData.get("phone") ?? "").trim();
const environment = String(formData.get("environment") ?? "").trim();

if (!name || !company || !email || !environment) {
  setFormStatus("Please complete the required fields before continuing.");
  return;
}

const subject = `New Sentra OT Assessment Request - ${company}`;

const body = [
  "New Sentra OT Assessment Request",
  "",
  `Name: ${name}`,
  `Company: ${company}`,
  `Business email: ${email}`,
  `Phone: ${phone || "Not provided"}`,
  "",
  "OT environment:",
  environment,
  "",
  "---",
  "Sent from sentraot.com",
].join("\n");

const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  subject,
)}&body=${encodeURIComponent(body)}`;

window.location.href = mailtoUrl;

}

return (
<main className="min-h-screen bg-background text-foreground">
<Section className="min-h-screen py-12 sm:py-16 lg:py-20">
<div className="mx-auto max-w-4xl">
<div className="mb-10">
<a href="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-brand" >
<ArrowLeftIcon className="size-4" />
Back to Sentra OT
</a>
</div>

      <div className="mb-12 max-w-3xl">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">
          <ShieldCheckIcon className="size-4" />
          OT Cybersecurity Assessment
        </div>

        <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">
          Start a conversation about your OT environment.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          Tell us a little about your industrial environment, your current
          cybersecurity challenges and what you would like to achieve.
          We&apos;ll use this information to understand your needs and
          define the right assessment scope.
        </p>

        <a
          href="/services/iec62443-assessment"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand/80"
        >
          Explore our IEC 62443 Assessment
          <ArrowRightIcon className="size-4" />
        </a>
      </div>

      <div className="mb-10 rounded-2xl border border-brand/30 bg-brand/5 p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2 text-brand">
              <CalendarIcon className="size-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.15em]">
                Discovery Call
              </span>
            </div>

            <h2 className="text-2xl font-semibold sm:text-3xl">
              Prefer to book a time directly?
            </h2>

            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
              Book a free 30-minute conversation to discuss your OT
              environment, cybersecurity challenges and potential next
              steps.
            </p>
          </div>

          <Button asChild size="lg" className="h-12 shrink-0">
            <a
              href={CAL_COM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Time Slot
              <ArrowRightIcon className="ml-2 size-4" />
            </a>
          </Button>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="flex h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="text-sm font-medium"
                >
                  Company
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your organisation"
                  required
                  className="flex h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium"
                >
                  Business email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  className="flex h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium"
                >
                  Phone
                  <span className="ml-2 text-xs text-muted-foreground">
                    Optional
                  </span>
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+34 ..."
                  className="flex h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="environment"
                className="text-sm font-medium"
              >
                Tell us about your OT environment
              </label>

              <textarea
                id="environment"
                name="environment"
                rows={6}
                placeholder="For example: industrial sector, number of sites, approximate OT environment size, current security challenges, assessment objectives..."
                required
                className="w-full resize-y rounded-lg border border-border bg-background px-3 py-3 text-sm leading-6 outline-none transition-colors placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>

            {formStatus && (
              <p
                role="alert"
                className="text-sm text-muted-foreground"
              >
                {formStatus}
              </p>
            )}

            <Button
              type="submit"
              size="lg"
              className="h-12 w-full sm:w-auto"
            >
              Request an Assessment
              <ArrowRightIcon className="ml-2 size-4" />
            </Button>
          </form>
        </div>

        <aside className="h-fit rounded-2xl border border-brand/30 bg-brand/5 p-6 sm:p-8">
          <div className="mb-5 flex size-11 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand">
            <ShieldCheckIcon className="size-5" />
          </div>

          <h2 className="text-xl font-semibold">
            What happens next?
          </h2>

          <div className="mt-6 space-y-5">
            <div>
              <p className="font-medium">
                1. Initial conversation
              </p>

              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                We understand your environment, objectives and current
                challenges.
              </p>
            </div>

            <div>
              <p className="font-medium">
                2. Assessment scope
              </p>

              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                We define the appropriate scope based on your operational
                and cybersecurity requirements.
              </p>
            </div>

            <div>
              <p className="font-medium">
                3. Clear next steps
              </p>

              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                You receive a clear understanding of the proposed approach
                and the next steps.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </Section>
</main>

);
}