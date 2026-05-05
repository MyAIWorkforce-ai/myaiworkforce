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
    "Your own AI agent, live in 24 hours. Handles emails, bookings, admin and more — on your own private server. First month free.",
  keywords: ["AI agents", "AI workforce", "AI automation", "no-code AI", "AI marketplace", "done for you AI"],
  openGraph: {
    title: "Build Your AI Workforce Without the Complexity | MyAIWorkforce.ai",
    description:
      "Your own AI agent, live in 24 hours. Handles emails, bookings, admin and more — on your own private server. First month free.",
    type: "website",
    url: "https://MyAIWorkforce.ai",
    siteName: "My AI Workforce",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build Your AI Workforce Without the Complexity | MyAIWorkforce.ai",
    description: "Your own AI agent, live in 24 hours. Handles emails, bookings, admin and more. First month free.",
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
        <script dangerouslySetInnerHTML={{ __html: `(function(){document.documentElement.classList.remove('dark');})();` }} />
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
