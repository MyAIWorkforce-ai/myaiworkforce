'use client';
export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react';

export default function MissionControl() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleString('en-AU', {
        timeZone: 'Australia/Melbourne',
        weekday: 'short', month: 'short', day: 'numeric',
        hour: '2-digit', minute: '2-digit'
      }));
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0d0d1a !important; }
        .mc { background: #0d0d1a; color: #e0e0e0; font-family: 'Segoe UI', Arial, sans-serif; min-height: 100vh; }
        .mc header { background: #1a1a2e; border-bottom: 3px solid #c9a84c; padding: 16px 24px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 100; flex-wrap: wrap; gap: 12px; }
        .mc .logo { display: flex; align-items: center; gap: 12px; }
        .mc .logo h1 { font-size: 1.3rem; font-weight: 800; color: #fff; }
        .mc .logo p { font-size: 0.75rem; color: #c9a84c; text-transform: uppercase; letter-spacing: 1px; }
        .mc .status-pill { background: #0d2e1a; border: 1px solid #2ecc71; color: #2ecc71; padding: 6px 16px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; display: flex; align-items: center; gap: 8px; }
        .mc .dot { width: 8px; height: 8px; background: #2ecc71; border-radius: 50%; animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        .mc .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; padding: 24px; max-width: 1400px; margin: 0 auto; }
        .mc .card { background: #1a1a2e; border-radius: 10px; border: 1px solid #2a2a4a; overflow: hidden; }
        .mc .card-header { padding: 14px 20px; border-bottom: 1px solid #2a2a4a; }
        .mc .card-header h2 { font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #c9a84c; }
        .mc .card-body { padding: 16px 20px; }
        .mc .row { display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid #1e1e38; font-size: 0.85rem; }
        .mc .row:last-child { border-bottom: none; }
        .mc .label { color: #aaa; }
        .mc .val { font-weight: 700; color: #fff; }
        .mc .green { color: #2ecc71; }
        .mc .gold { color: #c9a84c; }
        .mc .badge { font-size: 0.7rem; padding: 3px 10px; border-radius: 12px; font-weight: 700; background: #0d2e1a; color: #2ecc71; border: 1px solid #2ecc71; }
        .mc .badge-new { background: #2e1a0d; color: #c9a84c; border: 1px solid #c9a84c; }
        .mc .proj { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #1e1e38; }
        .mc .proj:last-child { border-bottom: none; }
        .mc .proj-name { font-size: 0.9rem; color: #fff; font-weight: 600; }
        .mc .proj-url { font-size: 0.75rem; color: #666; }
        .mc .task { display: flex; gap: 10px; padding: 8px 0; border-bottom: 1px solid #1e1e38; font-size: 0.85rem; }
        .mc .task:last-child { border-bottom: none; }
        .mc .task-num { color: #555; min-width: 20px; }
        .mc .done { color: #2ecc71; }
        .mc .todo { color: #c9a84c; }
        .mc .act { display: flex; gap: 12px; padding: 8px 0; border-bottom: 1px solid #1e1e38; }
        .mc .act:last-child { border-bottom: none; }
        .mc .act-dot { width: 8px; height: 8px; background: #2ecc71; border-radius: 50%; margin-top: 5px; flex-shrink: 0; }
        .mc .act-text { font-size: 0.85rem; color: #ccc; }
        .mc .act-time { font-size: 0.75rem; color: #555; margin-top: 2px; }
        .mc .links { display: flex; flex-wrap: wrap; gap: 8px; }
        .mc a.link { background: #0d0d1a; border: 1px solid #2a2a4a; color: #aaa; padding: 8px 14px; border-radius: 6px; font-size: 0.8rem; text-decoration: none; }
        .mc a.link:hover { border-color: #c9a84c; color: #c9a84c; }
        .mc .domain-grid { display: grid; grid-template-columns: repeat(3,1fr); }
        .mc .d-stat { text-align: center; padding: 16px; border-right: 1px solid #2a2a4a; }
        .mc .d-stat:last-child { border-right: none; }
        .mc .big { font-size: 2.5rem; font-weight: 900; color: #c9a84c; line-height: 1; }
        .mc .big-label { font-size: 0.75rem; color: #666; text-transform: uppercase; letter-spacing: 1px; margin-top: 4px; }
        .mc footer { text-align: center; padding: 20px; color: #333; font-size: 0.75rem; border-top: 1px solid #1a1a2e; }
        .mc .time { color: #888; font-size: 0.8rem; }
        .mc .campaign-box { background: #0d1a0d; border: 1px solid #1a3a1a; border-radius: 8px; padding: 14px; }
        .mc .campaign-box h3 { font-size: 0.8rem; color: #2ecc71; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; }
      `}</style>
      <div className="mc">
        <header>
          <div className="logo">
            <span style={{fontSize:'2rem'}}>🐒</span>
            <div>
              <h1>Monty Mission Control</h1>
              <p>My AI Workforce — Live Dashboard</p>
            </div>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:'16px',flexWrap:'wrap'}}>
            <div className="status-pill"><div className="dot"></div> ONLINE</div>
            <div className="time">{time}</div>
          </div>
        </header>

        <div className="grid">

          {/* ACTIVE PROJECTS */}
          <div className="card">
            <div className="card-header"><h2>🚀 Active Projects</h2></div>
            <div className="card-body">
              {[
                ['myaiworkforce.ai','AI agent marketplace','live'],
                ['virtualassistant.com.au','VA business — do not touch','live'],
                ['premiumdomainsales.com.au','Domain portfolio sales','live'],
                ['cheapwebsite.com.au','Automated website service','live'],
                ['primeprojects.com.au',"Toby's building business",'live'],
                ['builderdromana.com.au','Funnel → primeprojects.com.au','live'],
                ['21 VA funnel pages','physio, doctor, dentist, lawyer + 17 more → virtualassistant.com.au','live'],
                ['tradieassistant.ai','Hub page — all trades → virtualassistant.com.au','live'],
                ['memyselfi.ai','Project TBD — in progress','new'],
              ].map(([name,desc,type]) => (
                <div className="proj" key={name}>
                  <div><div className="proj-name">{name}</div><div className="proj-url">{desc}</div></div>
                  <span className={`badge ${type==='new'?'badge-new':''}`}>{type==='new'?'NEW ✅':'LIVE'}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DOMAIN PORTFOLIO */}
          <div className="card">
            <div className="card-header"><h2>🌐 Domain Portfolio</h2></div>
            <div className="domain-grid">
              <div className="d-stat"><div className="big">230</div><div className="big-label">Total</div></div>
              <div className="d-stat"><div className="big">177</div><div className="big-label">Deployed</div></div>
              <div className="d-stat"><div className="big">53</div><div className="big-label">Skipped</div></div>
            </div>
            <div className="card-body">
              <div className="row"><span className="label">For-sale pages deployed</span><span className="val green">133 ✅</span></div>
              <div className="row"><span className="label">VA funnel pages deployed</span><span className="val green">29 ✅</span></div>
              <div className="row"><span className="label">Builder funnel pages deployed</span><span className="val green">15 ✅</span></div>
              <div className="row"><span className="label">Skipped (existing sites)</span><span className="val">53</span></div>
              <div className="row"><span className="label">Needs review</span><span className="val green">0 ✅</span></div>
              <div style={{marginTop:'12px',display:'flex',gap:'8px',flexWrap:'wrap'}}>
                <a href="https://myaiworkforce.ai/domain-status" target="_blank" className="link">Domain Status →</a>
                <a href="https://myaiworkforce.ai/deployment-plan" target="_blank" className="link">Deployment Plan →</a>
              </div>
            </div>
          </div>

          {/* EMAIL CAMPAIGN */}
          <div className="card">
            <div className="card-header"><h2>📧 Email Campaign</h2></div>
            <div className="card-body">
              <div className="campaign-box">
                <h3>builderbondi.com.au Outreach</h3>
                <div className="row"><span className="label">Total sent</span><span className="val">24</span></div>
                <div className="row"><span className="label">Delivered</span><span className="val green">24 ✅</span></div>
                <div className="row"><span className="label">Bounced (guessed)</span><span className="val" style={{color:'#e74c3c'}}>11</span></div>
                <div className="row"><span className="label">Send address</span><span className="val" style={{fontSize:'0.75rem'}}>monty@premiumdomainsales.com.au</span></div>
              </div>
              <div style={{marginTop:'14px'}}>
                <div className="row"><span className="label">Domain price (buy)</span><span className="val gold">$4,947</span></div>
                <div className="row"><span className="label">Rent only</span><span className="val gold">$147/mo</span></div>
                <div className="row"><span className="label">Rent + landing page</span><span className="val gold">$297/mo</span></div>
              </div>
            </div>
          </div>

          {/* OFFICE TASKS */}
          <div className="card">
            <div className="card-header"><h2>📋 Office Tasks</h2></div>
            <div className="card-body">
              {[
                [1,'⏳ Fix sender display name → "Monty - My AI Workforce" (Google Admin → Users → Monty → name) URGENT','todo'],
                [2,'⏳ Turn on Stripe payment notifications + ImprovMX aliases (monty@ + toby@ → myaiworkforce.ai)','todo'],
                [3,'❌ Anthropic credit — write-off (credit wasn\'t there)','done'],
                [4,'✅ Fix Resend DNS in GoDaddy — DONE','done'],
                [5,'⏳ Fix Stripe business name spelling: "My AI Wrokforce" → "My AI Workforce"','todo'],
                [6,'⏳ Connect toby@myaiworkforce.ai to Monty (Gmail API OAuth)','todo'],
                [7,'⏳ Set up Namecheap for new client domain registrations','todo'],
                [8,'✅ Telegram bot — DONE','done'],
                [9,'⏳ Social handles @myaiworkforce on all platforms','todo'],
                [10,'⏳ Buffer → connect socials → send API token','todo'],
                [11,'⏳ Set up hi@myaiworkforce.ai forwarding → toby@myaiworkforce.ai','todo'],
                [12,'⏳ ElevenLabs API key','todo'],
                [13,'⏳ Google Search Console — add builderdromana.com.au + physioassistant.com.au, submit sitemaps','todo'],
                [14,'⏳ Submit all VA funnel pages to Google Search Console','todo'],
                [15,'⏳ HeyGen — set up account + send API key','todo'],
                [16,'⏳ Pictory — set up account + send API key','todo'],
                [17,'✅ Monty Mission Control — LIVE','done'],
                [18,'✅ Supabase restored to healthy','done'],
                [19,'✅ Vercel team URL change (me-myself-i → myaiworkforce) — DONE','done'],
              ].map(([num,text,type]) => (
                <div className="task" key={num}>
                  <span className="task-num">{num}</span>
                  <span className={type==='done'?'done':'todo'}>{text as string}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RECENT ACTIVITY */}
          <div className="card">
            <div className="card-header"><h2>⚡ Recent Activity</h2></div>
            <div className="card-body">
              {[
                ['All 21 VA funnel pages live ✅','Today — Apr 21'],
                ['tradieassistant.ai live — hub for all trades ✅','Today — Apr 21'],
                ['massageassistant, hairdresser, consultant, mechanic deployed ✅','Today — Apr 21'],
                ['Session history recovered from reset transcript ✅','Today — Apr 21'],
                ['Mission Control updated ✅','Today — Apr 21'],
                ['24 cold emails sent to Bondi builders','Apr 17'],
                ['builderdromana.com.au deployed ✅','Apr 16'],
                ['178 Vercel DNS zones activated','Apr 16'],
                ['Vercel support case #01109721 resolved','Apr 16'],
                ['Supabase project restored to healthy','Apr 16'],
              ].map(([text,time]) => (
                <div className="act" key={text as string}>
                  <div className="act-dot"></div>
                  <div><div className="act-text">{text}</div><div className="act-time">{time}</div></div>
                </div>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="card">
            <div className="card-header"><h2>🔗 Quick Links</h2></div>
            <div className="card-body">
              <div className="links">
                {[
                  ['myaiworkforce.ai','https://myaiworkforce.ai'],
                  ['Domain Status','https://myaiworkforce.ai/domain-status'],
                  ['Deployment Plan','https://myaiworkforce.ai/deployment-plan'],
                  ['premiumdomainsales.com.au','https://premiumdomainsales.com.au'],
                  ['virtualassistant.com.au','https://virtualassistant.com.au'],
                  ['primeprojects.com.au','https://primeprojects.com.au'],
                  ['builderbondi.com.au','https://builderbondi.com.au'],
                  ['Stripe','https://dashboard.stripe.com'],
                  ['Supabase','https://supabase.com/dashboard'],
                  ['Vercel','https://vercel.com/my-ai-workforce'],
                  ['Resend','https://resend.com'],
                  ['ImprovMX','https://app.improvmx.com'],
                  ['GitHub','https://github.com/MyAIWorkforce-ai'],
                ].map(([label,url]) => (
                  <a href={url as string} target="_blank" className="link" key={label as string}>{label}</a>
                ))}
              </div>
            </div>
          </div>

        </div>
        <footer>🐒 Monty — My AI Workforce · Running on Claude Sonnet · <a href="https://myaiworkforce.ai" style={{color:'#c9a84c'}}>myaiworkforce.ai</a></footer>
      </div>
    </>
  );
}
// Wed Apr 22 15:39:12 AEST 2026
