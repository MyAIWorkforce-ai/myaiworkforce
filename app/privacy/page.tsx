"use client";
import Link from "next/link";

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: "var(--nav-bg)", borderColor: "var(--nav-border)" }}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-xl" style={{ color: "var(--yellow)" }}>My AI Workforce</Link>
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

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-extrabold mb-4" style={{ letterSpacing: "-0.03em" }}>Privacy Policy</h1>
        <p className="text-sm mb-12" style={{ color: "var(--text-dim)" }}>Last updated: March 2026</p>

        {[
          { title: "1. Information We Collect", content: "We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us. This includes your name, email address, payment information, and any other information you choose to provide. We also collect information automatically when you use our platform, including usage data, log data, and cookies." },
          { title: "2. How We Use Your Information", content: "We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, respond to your comments and questions, and send you marketing communications (with your consent)." },
          { title: "3. Information Sharing", content: "We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our platform, conducting our business, or servicing you — provided they agree to keep this information confidential." },
          { title: "4. Data Security", content: "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure." },
          { title: "5. Cookies", content: "We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent." },
          { title: "6. Your Rights", content: "You have the right to access, update, or delete your personal information at any time. You may also opt out of marketing communications. To exercise these rights, please contact us at monty@myaiworkforce.ai." },
          { title: "7. Children's Privacy", content: "Our platform is not directed to children under 13. We do not knowingly collect personal information from children under 13." },
          { title: "8. Changes to This Policy", content: "We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the date above." },
          { title: "9. Contact Us", content: "If you have any questions about this privacy policy, please contact us at monty@myaiworkforce.ai." },
        ].map((section, i) => (
          <div key={i} className="mb-10">
            <h2 className="text-xl font-bold mb-3">{section.title}</h2>
            <p style={{ color: "var(--text-dim)", lineHeight: "1.8" }}>{section.content}</p>
          </div>
        ))}

        <div className="mt-12 pt-8 border-t" style={{ borderColor: "var(--nav-border)" }}>
          <Link href="/terms" style={{ color: "var(--yellow)" }}>View Terms of Service →</Link>
        </div>
      </main>
    </div>
  );
}
