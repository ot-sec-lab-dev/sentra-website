import { ArrowRightIcon, ExternalLinkIcon, ShieldCheckIcon } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { LinkButton, type LinkButtonProps } from "../../ui/link-button";
import { Mockup, MockupFrame } from "../../ui/mockup";
import { Section } from "../../ui/section";

interface HeroButtonProps extends Omit<LinkButtonProps, "children"> { text: string; }
interface HeroProps { title?: ReactNode; description?: string; mockup?: ReactNode | false; badge?: ReactNode | false; buttons?: HeroButtonProps[] | false; className?: string; }

const DEFAULT_HERO_BUTTONS: HeroButtonProps[] = [
  { href: "/book-assessment", text: "Book an Assessment", variant: "default", iconRight: <ArrowRightIcon className="size-4" /> },
  { href: "https://ot-sec-lab-dev.github.io/sentra-ot/demo/SENTRA_OT_Demo.pdf", text: "View Live Demo (PDF)", variant: "outline", iconRight: <ExternalLinkIcon className="size-4" /> },
  { href: "#services", text: "Explore Services", variant: "glow" },
];

const DEFAULT_HERO_BADGE = (
  <div className="animate-appear inline-flex items-center rounded-full border border-brand/30 bg-brand/5 px-4 py-2 shadow-[0_0_30px_-12px_var(--brand)]">
    <ShieldCheckIcon className="mr-2 size-4 text-brand" />
    <span className="text-sm text-muted-foreground">OT Cybersecurity • IEC 62443 • Industrial Security</span>
  </div>
);

const DEFAULT_HERO_MOCKUP = (
  <div className="grid gap-4 bg-background/90 p-5 sm:grid-cols-3 sm:p-6">
    <div className="rounded-xl border border-border/70 bg-card p-5 shadow-sm"><p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Overall Risk</p><div className="mt-4 flex items-end justify-between"><span className="text-3xl font-bold text-destructive">HIGH</span><span className="text-xs font-medium text-muted-foreground">72 / 100</span></div><div className="mt-4 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full w-[72%] rounded-full bg-destructive" /></div></div>
    <div className="rounded-xl border border-border/70 bg-card p-5 shadow-sm"><p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Assets</p><p className="mt-4 text-3xl font-bold">1,247</p><p className="mt-2 text-sm text-muted-foreground">Industrial assets identified</p></div>
    <div className="rounded-xl border border-border/70 bg-card p-5 shadow-sm"><p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">IEC 62443</p><p className="mt-4 text-3xl font-bold text-brand">68%</p><p className="mt-2 text-sm text-muted-foreground">Current alignment</p></div>
    <div className="rounded-xl border border-border/70 bg-card p-5 shadow-sm sm:col-span-3">
      <div className="flex items-center justify-between"><p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">OT Security Posture</p><span className="flex items-center gap-2 text-xs font-medium text-brand"><span className="size-2 animate-pulse rounded-full bg-brand" />Assessment active</span></div>
      <div className="mt-5 grid gap-3 sm:grid-cols-6">
        {[["L5","80%"],["L4","92%"],["L3","74%"],["L2","67%"],["L1","61%"],["L0","55%"]].map(([level,value])=>(<div key={level} className="rounded-lg border border-border/40 bg-muted/40 p-3"><div className="flex items-center justify-between"><span className="text-xs font-bold">{level}</span><span className="text-xs text-muted-foreground">{value}</span></div><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-brand" style={{width:value}}/></div></div>))}
      </div>
    </div>
  </div>
);

export default function Hero({
  title = <>Secure your <span className="text-brand">OT environment.</span><br/>Reduce risk. Build resilience.</>,
  description = "Independent OT cybersecurity assessments designed to identify operational risk, strengthen industrial resilience and provide a clear path toward IEC 62443 alignment.",
  mockup = DEFAULT_HERO_MOCKUP,
  badge = DEFAULT_HERO_BADGE,
  buttons = DEFAULT_HERO_BUTTONS,
  className,
}: HeroProps) {
  return (
    <Section className={cn("relative overflow-hidden pb-0", className)}>
      <div className="max-w-container relative mx-auto flex flex-col gap-12 pt-20 sm:gap-24 sm:pt-24">
        <div className="flex flex-col items-center gap-7 text-center sm:gap-9">
          {badge!== false && badge}
          <h1 className="animate-appear max-w-5xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">{title}</h1>
          <p className="animate-appear max-w- text-base font-medium leading-8 text-muted-foreground delay-100 sm:text-xl sm:leading-9">{description}</p>
          {buttons!== false && (
            <div className="animate-appear flex flex-col justify-center gap-4 delay-300 sm:flex-row">
              {buttons.map((b) => (
                <LinkButton key={b.href + b.text} variant={b.variant || "default"} size="lg" href={b.href} icon={b.icon} iconRight={b.iconRight}>{b.text}</LinkButton>
              ))}
            </div>
          )}
          {mockup!== false && (
            <div className="relative mt-4 w-full pt-8 sm:mt-8 sm:pt-12">
              <MockupFrame className="animate-appear delay-700" size="small"><Mockup type="responsive" className="w-full rounded-xl border bg-background/95 shadow-2xl">{mockup}</Mockup></MockupFrame>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
