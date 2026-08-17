import "@/app/globals.css";

import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import { inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: "Sentra OT",
    template: "%s | Sentra OT",
  },
  description:
    "OT cybersecurity services for industrial organizations. Assess risk, strengthen resilience and protect critical infrastructure.",
  keywords: [
    "OT Cybersecurity",
    "ICS Cybersecurity",
    "Industrial Cybersecurity",
    "IEC 62443",
    "OT Security Assessment",
    "Critical Infrastructure",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} bg-background font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}