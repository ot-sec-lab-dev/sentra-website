import * as React from "react";

import { cn } from "@/lib/utils";

function Navbar({ className, ...props }: React.ComponentProps<"nav">) {
return (
<nav
data-slot="navbar"
className={cn(
"flex min-h-16 items-center justify-between rounded-2xl border border-border/60 bg-background/75 px-4 py-4 shadow-sm backdrop-blur-xl",
"md:min-h-18 md:px-6",
className,
)}
{...props}
/>
);
}

function NavbarLeft({ className, ...props }: React.ComponentProps<"div">) {
return (
<div
data-slot="navbar-left"
className={cn(
"flex items-center justify-start gap-5 md:gap-7",
className,
)}
{...props}
/>
);
}

function NavbarRight({ className, ...props }: React.ComponentProps<"div">) {
return (
<div
data-slot="navbar-right"
className={cn(
"flex items-center justify-end gap-4 md:gap-5",
className,
)}
{...props}
/>
);
}

function NavbarCenter({ className, ...props }: React.ComponentProps<"div">) {
return (
<div
data-slot="navbar-center"
className={cn(
"flex items-center justify-center gap-4",
className,
)}
{...props}
/>
);
}

export { Navbar, NavbarCenter, NavbarLeft, NavbarRight };