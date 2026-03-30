import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "MyAIWorkforce — Build Your AI Workforce",
  description:
    "Browse ready-made AI agents, grab step-by-step guides, or let us build and run your entire AI workforce for you.",
  keywords: "AI agents, AI workforce, automation, no-code AI, AI marketplace",
  openGraph: {
    title: "MyAIWorkforce — Build Your AI Workforce",
    description:
      "Browse ready-made AI agents, grab step-by-step guides, or let us build and run your entire AI workforce for you.",
    type: "website",
    url: "https://myaiworkforce.ai",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(!t||t==='dark')document.documentElement.classList.add('dark');}catch(e){}})();` }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
