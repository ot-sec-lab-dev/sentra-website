import Image from "next/image";
import { Menu } from "lucide-react";

import { Button } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";

interface NavbarLink {
  text: string;
  href: string;
}

const navigationLinks: NavbarLink[] = [
  {
    text: "Capabilities",
    href: "#capabilities",
  },
  {
    text: "Services",
    href: "#services",
  },
  {
    text: "Methodology",
    href: "#methodology",
  },
  {
    text: "Why Sentra OT",
    href: "#why-sentra-ot",
  },
  {
    text: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-5 pb-6 sm:px-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-background/80 backdrop-blur-xl" />

      <div className="relative mx-auto max-w-container">
        <NavbarComponent className="py-3">
          <NavbarLeft className="gap-6">
            <a
              href="/"
              className="group flex items-center gap-3"
            >
              <Image
                src="/sentra-logo.png"
                alt="Sentra OT"
                width={56}
                height={56}
                priority
                className="size-12 object-contain transition-transform duration-300 group-hover:scale-105 sm:size-14"
              />

              <span className="text-2xl font-bold tracking-tight sm:text-3xl">
                <span className="text-foreground">Sentra</span>
                <span className="text-brand"> OT</span>
              </span>
            </a>

            <div className="hidden h-8 w-px bg-border md:block" />

            <nav className="hidden items-center gap-6 md:flex lg:gap-8">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-brand lg:text-base"
                >
                  {link.text}
                </a>
              ))}
            </nav>
          </NavbarLeft>

          <NavbarRight className="gap-3 sm:gap-4">
            <Button
              asChild
              size="lg"
              className="hidden h-11 px-5 sm:inline-flex"
            >
              <a href="/book-assessment">
                Book an Assessment
              </a>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-12 rounded-xl md:hidden"
                >
                  <Menu className="size-6" />
                  <span className="sr-only">
                    Toggle navigation menu
                  </span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[320px] bg-background/95 backdrop-blur-xl sm:w-[380px]"
              >
                <SheetTitle className="sr-only">
                  Navigation menu
                </SheetTitle>

                <nav className="mt-8 grid gap-6">
                  <a
                    href="/"
                    className="flex items-center gap-3 text-3xl font-bold tracking-tight"
                  >
                    <Image
                      src="/sentra-logo.png"
                      alt="Sentra OT"
                      width={52}
                      height={52}
                      priority
                      className="size-12 object-contain"
                    />

                    <span className="text-foreground">
                      Sentra
                    </span>
                    <span className="text-brand">
                      {" "}OT
                    </span>
                  </a>

                  <div className="my-2 h-px bg-border" />

                  {navigationLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="rounded-lg px-2 py-2 text-lg font-medium text-muted-foreground transition-colors hover:bg-brand/5 hover:text-brand"
                    >
                      {link.text}
                    </a>
                  ))}

                  <Button
                    asChild
                    size="lg"
                    className="mt-3 h-12"
                  >
                    <a href="/book-assessment">
                      Book an Assessment
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
