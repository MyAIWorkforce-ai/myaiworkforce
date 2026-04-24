'use client';

import { useState } from 'react';

export default function GetStartedPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    await fetch('/api/get-started', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div style={wrap}>
        <div style={card}>
          <div style={header}>
            <p style={badge}>MY AI WORKFORCE</p>
            <h1 style={title}>You're on your way! 🚀</h1>
          </div>
          <div style={body}>
            <p style={{ fontSize: '3rem', textAlign: 'center', margin: '0 0 16px' }}>🎉</p>
            <p style={text}>Thanks — we've received your details and I'll be in touch within 24 hours to get everything set up for you.</p>
            <p style={text}>Keep an eye on your inbox!</p>
            <div style={secBox}>
              <p style={{ color: '#1a1a2e', fontSize: '0.9rem', margin: 0 }}>
                Questions? Email <a href="mailto:monty@myaiworkforce.ai" style={{ color: '#c9a84c' }}>monty@myaiworkforce.ai</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={wrap}>
      <div style={card}>
        <div style={header}>
          <p style={badge}>MY AI WORKFORCE</p>
          <h1 style={title}>Get Started 👋</h1>
          <p style={{ color: '#ccc', fontSize: '0.9rem', margin: 0 }}>Fill in your details below and we'll have your AI agent up and running in no time.</p>
        </div>
        <div style={body}>
          <form onSubmit={handleSubmit}>

            <Section label="Your Business" />
            <Field label="Business name *" name="businessName" required />
            <Field label="Industry (e.g. Plumber, Builder, Physio)" name="industry" required />
            <Field label="Your name *" name="ownerName" required />
            <Field label="Your email *" name="email" type="email" required />
            <Field label="Your phone number" name="phone" type="tel" />
            <Field label="Business website (if you have one)" name="website" />

            <Section label="Your AI Agent" />
            <Field label="What do you want to name your agent? (e.g. Max, Sam, Alex)" name="agentName" required />
            <Textarea label="What are the main things you want your agent to do? *" name="tasks" required placeholder="e.g. Reply to enquiry emails, answer questions about my services, book appointments..." />

            <Section label="Your Package" />
            <Select label="Which package are you interested in? *" name="package" required options={[
              { value: '', label: 'Select a package...' },
              { value: 'Starter - $497 setup + $297/mo', label: 'Starter — $497 setup + $297/mo' },
              { value: 'Growth - $997 setup + $597/mo', label: 'Growth — $997 setup + $597/mo' },
              { value: 'Enterprise - $1997 setup + $997/mo', label: 'Enterprise — $1,997 setup + $997/mo' },
              { value: 'Not sure yet', label: 'Not sure yet — help me choose' },
            ]} />

            <Section label="Getting Connected" />
            <Select label="Do you have Telegram on your phone? *" name="hasTelegram" required options={[
              { value: '', label: 'Select...' },
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: "No — I'll set it up" },
              { value: 'unsure', label: "Not sure what that is" },
            ]} />
            <Select label="Do you use Gmail? *" name="hasGmail" required options={[
              { value: '', label: 'Select...' },
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No — I use a different email' },
            ]} />
            <Select label="Do you use Xero for accounting?" name="hasXero" options={[
              { value: '', label: 'Select...' },
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
              { value: 'other', label: 'I use something else' },
            ]} />

            <Textarea label="Anything else you'd like us to know?" name="notes" placeholder="Any extra info, questions, or special requirements..." />

            <button type="submit" disabled={loading} style={{
              display: 'block',
              width: '100%',
              background: loading ? '#aaa' : '#c9a84c',
              color: '#1a1a2e',
              padding: '16px',
              borderRadius: '6px',
              fontWeight: 700,
              fontSize: '1rem',
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              marginTop: '24px',
            }}>
              {loading ? 'Sending...' : "Let's Go! →"}
            </button>

          </form>

          <p style={{ color: '#888', fontSize: '0.85rem', textAlign: 'center', margin: '20px 0 0' }}>
            Questions? Email <a href="mailto:monty@myaiworkforce.ai" style={{ color: '#c9a84c' }}>monty@myaiworkforce.ai</a>
          </p>
        </div>
      </div>
    </div>
  );
}

function Section({ label }: { label: string }) {
  return <p style={{ color: '#1a1a2e', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', margin: '28px 0 14px', borderBottom: '2px solid #f0f0f0', paddingBottom: '6px' }}>{label}</p>;
}

function Field({ label, name, type = 'text', required = false, placeholder = '' }: any) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={{ display: 'block', color: '#333', fontSize: '0.9rem', fontWeight: 600, marginBottom: '6px' }}>{label}</label>
      <input type={type} name={name} required={required} placeholder={placeholder} style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '0.95rem', boxSizing: 'border-box' }} />
    </div>
  );
}

function Textarea({ label, name, required = false, placeholder = '' }: any) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={{ display: 'block', color: '#333', fontSize: '0.9rem', fontWeight: 600, marginBottom: '6px' }}>{label}</label>
      <textarea name={name} required={required} placeholder={placeholder} rows={4} style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '0.95rem', boxSizing: 'border-box', resize: 'vertical' }} />
    </div>
  );
}

function Select({ label, name, required = false, options }: any) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={{ display: 'block', color: '#333', fontSize: '0.9rem', fontWeight: 600, marginBottom: '6px' }}>{label}</label>
      <select name={name} required={required} style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '0.95rem', boxSizing: 'border-box', background: '#fff' }}>
        {options.map((o: any) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );
}

// Styles
const wrap: React.CSSProperties = { minHeight: '100vh', background: '#f5f5f5', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', fontFamily: "'Helvetica Neue', Arial, sans-serif", padding: '40px 20px' };
const card: React.CSSProperties = { maxWidth: '580px', width: '100%' };
const header: React.CSSProperties = { background: '#1a1a2e', padding: '32px 40px', borderRadius: '8px 8px 0 0', textAlign: 'center' };
const body: React.CSSProperties = { background: '#ffffff', padding: '36px 40px', border: '1px solid #e8e8e8', borderTop: 'none', borderRadius: '0 0 8px 8px' };
const badge: React.CSSProperties = { color: '#c9a84c', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', margin: '0 0 10px 0' };
const title: React.CSSProperties = { color: '#ffffff', fontSize: '1.5rem', fontWeight: 700, margin: '0 0 8px', lineHeight: 1.3 };
const text: React.CSSProperties = { color: '#333', fontSize: '0.95rem', lineHeight: 1.7, margin: '0 0 16px' };
const secBox: React.CSSProperties = { background: '#f8f8f8', borderLeft: '4px solid #c9a84c', padding: '16px 20px', borderRadius: '0 4px 4px 0', marginTop: '24px' };
