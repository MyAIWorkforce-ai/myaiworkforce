import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  title: "Build Your AI Workforce Without the Complexity | MyAIWorkforce.ai",
  description:
    "Build your AI workforce without the complexity. Browse 500+ ready-made AI agents, grab a DIY guide, or let our team build, deploy and manage your entire AI workforce — from $997/mo.",
  keywords: ["AI agents", "AI workforce", "AI automation", "no-code AI", "AI marketplace", "done for you AI"],
  openGraph: {
    title: "Build Your AI Workforce Without the Complexity | MyAIWorkforce.ai",
    description:
      "Build your AI workforce without the complexity. Browse 500+ ready-made AI agents, grab a DIY guide, or let our team build, deploy and manage your entire AI workforce — from $997/mo.",
    type: "website",
    url: "https://MyAIWorkforce.ai",
    siteName: "My AI Workforce",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build Your AI Workforce Without the Complexity | MyAIWorkforce.ai",
    description: "Browse 500+ ready-made AI agents or let us build your entire AI workforce from $997/mo.",
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
