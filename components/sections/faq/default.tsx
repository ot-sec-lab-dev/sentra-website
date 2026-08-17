import { Section } from "../../ui/section";

interface FAQItem {
question: string;
answer: string;
}

interface FAQProps {
title?: string;
description?: string;
items?: FAQItem[] | false;
className?: string;
}

const DEFAULT_ITEMS: FAQItem[] = [
{
question: "What is an OT cybersecurity assessment?",
answer:
"An OT cybersecurity assessment evaluates the security posture of industrial environments, including assets, network architecture, communications, vulnerabilities, security controls and operational risks.",
},
{
question: "Why is OT cybersecurity different from IT cybersecurity?",
answer:
"Industrial environments have different operational constraints. Availability, safety, legacy systems, specialised protocols and process continuity must be considered alongside traditional cybersecurity requirements.",
},
{
question: "What does an assessment include?",
answer:
"The scope can include asset visibility, network architecture, segmentation, vulnerability exposure, security controls, remote access, industrial protocols and alignment with recognised OT cybersecurity practices.",
},
{
question: "Can Sentra OT work with IEC 62443?",
answer:
"Yes. IEC 62443 can be used as a reference framework to assess industrial cybersecurity controls and identify practical opportunities for improving the security posture of OT environments.",
},
{
question: "Will the assessment affect production?",
answer:
"The approach is designed around the operational constraints of industrial environments. Assessment activities are planned to minimise disruption and avoid unnecessary impact on critical production systems.",
},
{
question: "What do we receive after the assessment?",
answer:
"The outcome is designed to provide a clear picture of the current security posture, the most relevant risks and a prioritised roadmap of recommended improvements.",
},
{
question: "Can Sentra OT support remediation?",
answer:
"Yes. Beyond the initial assessment, Sentra OT can provide advisory support to help organisations prioritise remediation activities, improve security architecture and strengthen their OT cybersecurity programme.",
},
{
question: "How do we start?",
answer:
"The first step is a short conversation about your industrial environment, objectives and current security challenges. From there, we can define an appropriate assessment scope.",
},
];

export default function FAQ({
title = "Questions about OT cybersecurity?",
description = "Here are some of the questions organisations commonly ask before starting an OT security assessment.",
items = DEFAULT_ITEMS,
className,
}: FAQProps) {
return (
<Section className={className}>
<div className="mx-auto max-w-container">
<div className="mx-auto max-w-3xl text-center">
<p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
FAQ
</p>

      <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">
        {title}
      </h2>


      <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
        {description}
      </p>
    </div>


    {items !== false && items.length > 0 && (
      <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-border">
        {items.map((item, index) => (
          <details
            key={item.question}
            className="group border-b border-border last:border-b-0"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 text-left font-semibold transition-colors hover:bg-muted/40 sm:p-7">
              <span>{item.question}</span>


              <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-brand/10 text-brand transition-transform duration-200 group-open:rotate-45">
                <span className="text-lg font-normal leading-none">
                  +
                </span>
              </span>
            </summary>


            <div className="px-6 pb-6 sm:px-7 sm:pb-7">
              <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                {item.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    )}
  </div>
</Section>

);
}