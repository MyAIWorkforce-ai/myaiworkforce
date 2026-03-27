import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "myaiworkforce.ai — Build Your AI Workforce Without the Complexity",
  description:
    "Browse ready-made AI agents, grab step-by-step guides, or let us build and run your entire AI workforce for you.",
  openGraph: {
    title: "myaiworkforce.ai",
    description:
      "Browse ready-made AI agents, grab step-by-step guides, or let us build and run your entire AI workforce for you.",
    url: "https://myaiworkforce.ai",
    siteName: "myaiworkforce.ai",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
