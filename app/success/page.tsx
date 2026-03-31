"use client";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: 480,
          backgroundColor: "var(--card)",
          border: "2px solid rgba(255,215,0,0.4)",
          borderRadius: "1.5rem",
          padding: "3rem 2rem",
        }}
      >
        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🎉</div>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: "0.75rem",
            color: "#FFD700",
          }}
        >
          Payment Successful!
        </h1>
        <p
          style={{
            color: "var(--text-dim)",
            lineHeight: 1.7,
            marginBottom: "2rem",
            fontSize: "1rem",
          }}
        >
          Thank you for your purchase. Check your email for your download link and setup instructions. If you don&apos;t see it within a few minutes, check your spam folder.
        </p>
        <Link
          href="/marketplace"
          style={{
            display: "inline-block",
            padding: "0.875rem 2rem",
            backgroundColor: "#FFD700",
            color: "#0A0A0A",
            borderRadius: "0.75rem",
            fontWeight: 700,
            fontSize: "0.95rem",
            textDecoration: "none",
          }}
        >
          ← Back to Marketplace
        </Link>
      </div>
    </div>
  );
}
