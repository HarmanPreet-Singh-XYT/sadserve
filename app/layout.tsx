import type { Metadata, Viewport } from "next";
import { Caveat, Fraunces, Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
});

const hand = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sadservers.com"),
  title: {
    default: "SadServers: Linux, DevOps & SRE Labs | Interview & Hiring Assessment",
    template: "%s | SadServers",
  },
  description:
    "Master Linux & DevOps troubleshooting on live servers. Fun, real-world challenges for engineers and powerful assessments for hiring teams.",
};

export const viewport: Viewport = {
  themeColor: "#07080a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${serif.variable} ${display.variable} ${hand.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-20 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-ink transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
