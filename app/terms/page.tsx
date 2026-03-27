"use client";
import Link from "next/link";

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: "var(--nav-bg)", borderColor: "var(--nav-border)" }}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-xl" style={{ color: "var(--yellow)" }}>MyAIWorkforce</Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/marketplace" style={{ color: "var(--text-dim)" }}>Marketplace</Link>
          <Link href="/guides" style={{ color: "var(--text-dim)" }}>Guides</Link>
          <Link href="/done-for-you" style={{ color: "var(--text-dim)" }}>Done-For-You</Link>
          <Link href="/pricing" style={{ color: "var(--text-dim)" }}>Pricing</Link>
          <Link href="/about" style={{ color: "var(--text-dim)" }}>About</Link>
          <Link href="/blog" style={{ color: "var(--text-dim)" }}>Blog</Link>
        </nav>
        <Link href="/contact" className="px-4 py-2 rounded-lg font-semibold text-sm" style={{ backgroundColor: "var(--yellow)", color: "#0A0A0A" }}>Book a Call</Link>
      </div>
    </header>
  );
}

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-extrabold mb-4" style={{ letterSpacing: "-0.03em" }}>Terms of Service</h1>
        <p className="text-sm mb-12" style={{ color: "var(--text-dim)" }}>Last updated: March 2026</p>

        {[
          { title: "1. Acceptance of Terms", content: "By accessing and using myaiworkforce.ai, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform." },
          { title: "2. Use of the Platform", content: "You may use our platform only for lawful purposes and in accordance with these Terms. You agree not to use the platform in any way that violates applicable laws, infringes on intellectual property rights, or harms other users." },
          { title: "3. Account Registration", content: "To access certain features, you must register for an account. You are responsible for maintaining the security of your account credentials and for all activity that occurs under your account." },
          { title: "4. Marketplace Transactions", content: "When purchasing listings from the marketplace, you agree to pay the listed price. Creator payouts are processed at 75% of the sale price. MyAIWorkforce retains 25% as a platform fee. All sales are final unless otherwise stated." },
          { title: "5. Creator Responsibilities", content: "If you sell listings on our marketplace, you represent that you have the right to sell such content, that it does not infringe on any third-party rights, and that it is accurately described. You are responsible for any taxes applicable to your earnings." },
          { title: "6. Intellectual Property", content: "The MyAIWorkforce platform, including its design, logo, and content, is owned by MyAIWorkforce and protected by intellectual property laws. Listings sold by creators remain the intellectual property of the creator, subject to the licence granted to buyers." },
          { title: "7. Disclaimers", content: "Our platform is provided 'as is' without warranties of any kind. We do not guarantee that AI agents or tools purchased will achieve specific results. Results may vary based on your implementation and use case." },
          { title: "8. Limitation of Liability", content: "To the fullest extent permitted by law, MyAIWorkforce shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform." },
          { title: "9. Termination", content: "We reserve the right to terminate or suspend your account at any time for violations of these Terms. You may also delete your account at any time by contacting us." },
          { title: "10. Changes to Terms", content: "We may update these Terms at any time. Continued use of the platform after changes constitutes acceptance of the new Terms." },
          { title: "11. Governing Law", content: "These Terms are governed by the laws of Australia. Any disputes will be resolved in the courts of Australia." },
          { title: "12. Contact", content: "For questions about these Terms, contact us at monty@myaiworkforce.ai." },
        ].map((section, i) => (
          <div key={i} className="mb-10">
            <h2 className="text-xl font-bold mb-3">{section.title}</h2>
            <p style={{ color: "var(--text-dim)", lineHeight: "1.8" }}>{section.content}</p>
          </div>
        ))}

        <div className="mt-12 pt-8 border-t" style={{ borderColor: "var(--nav-border)" }}>
          <Link href="/privacy" style={{ color: "var(--yellow)" }}>View Privacy Policy →</Link>
        </div>
      </main>
    </div>
  );
}
