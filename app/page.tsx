
"use client";

import { useState, useEffect } from 'react';

// --- INLINE SVG ICONS ---
const IconSun = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>;
const IconMoon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>;
const IconBriefcase = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
const IconTarget = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>;
const IconZap = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
const IconBot = () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"></path><rect x="4" y="12" width="16" height="8" rx="2"></rect><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="M12 18v-2"></path><path d="M12 12V8"></path></svg>;
const IconMail = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const IconTwitter = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.13 0H0l9.308 13.324L0 23.973h2.113l8.17-9.309 6.616 9.309H24l-9.742-13.821zM11.423 13.012L10.74 12.01l-8.58-12.003h3.207l6.837 9.569 0.682 0.956 8.976 12.553h-3.207l-7.227-10.099z"></path></svg>;
const IconLinkedin = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>;

// --- MAIN PAGE COMPONENT ---
export default function HomePage() {
  return (
    <div className="bg-[var(--bg)] text-[var(--text)] font-sans antialiased">
      <Nav />
      <main>
        <Hero />
        <Section><ThreePillars /></Section>
        <Section altBg><WhoIsItFor /></Section>
        <Section><UseCases /></Section>
        <Section altBg><CtaBanner /></Section>
      </main>
      <Footer />
    </div>
  );
}

// --- CORE LAYOUT & ATOMS ---
function Section({ children, altBg = false, className = '' }: { children: React.ReactNode, altBg?: boolean, className?: string }) {
  const bgColor = altBg ? 'bg-[var(--bg-section)]' : 'bg-[var(--bg)]';
  return (
    <section className={`py-16 md:py-24 ${bgColor} ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
}

function SectionTitle({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${className}`}>{children}</h2>;
}

// --- THEME TOGGLE ---
function ThemeToggle() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') || 'light';
        setTheme(storedTheme);
        document.documentElement.className = storedTheme;
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.className = newTheme;
    };

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? <IconMoon /> : <IconSun />}
        </button>
    );
}


// --- NAVIGATION ---
function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--nav-border)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <IconBot />
            <span className="font-bold text-lg">My AI Workforce</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#pillars" className="text-[var(--text-dim)] hover:text-[var(--text)] transition-colors">How It Works</a>
            <a href="#use_cases" className="text-[var(--text-dim)] hover:text-[var(--text)] transition-colors">Use Cases</a>
            <a href="#contact" className="text-[var(--text-dim)] hover:text-[var(--text)] transition-colors">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
             <ThemeToggle />
             <button className="hidden md:inline-flex items-center justify-center bg-[var(--yellow)] text-black font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                Get Started
             </button>
             <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
                <span className="sr-only">Open menu</span>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
         <div className="md:hidden bg-[var(--mobile-menu-bg)] border-t border-[var(--nav-border)] py-4">
             <nav className="flex flex-col items-center space-y-4">
                 <a href="#pillars" onClick={() => setIsOpen(false)} className="text-[var(--text-dim)] hover:text-[var(--text)] transition-colors">How It Works</a>
                 <a href="#use_cases" onClick={() => setIsOpen(false)} className="text-[var(--text-dim)] hover:text-[var(--text)] transition-colors">Use Cases</a>
                 <a href="#contact" onClick={() => setIsOpen(false)} className="text-[var(--text-dim)] hover:text-[var(--text)] transition-colors">Contact</a>
                 <button className="w-full max-w-[200px] mt-4 inline-flex items-center justify-center bg-[var(--yellow)] text-black font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                    Get Started
                 </button>
             </nav>
         </div>
      )}
    </header>
  );
}

// Dummy Icons for Mobile Menu
const Menu = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);
const X = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);


// --- HERO SECTION ---
function Hero() {
  const rotatingTexts = [
    "automate your workflows.",
    "streamline your support.",
    "supercharge your sales.",
    "optimize your operations.",
    "analyze your data.",
    "scale your business.",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % rotatingTexts.length);
    }, 3000); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  return (
    <div className="relative text-center py-24 md:py-36 min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[var(--bg)] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)] dark:[mask-image:none] dark:bg-[var(--hero-gradient)]"></div>
        <div className="container mx-auto px-4 md:px-6 z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                AI agents that can
                <br />
                <span className="rotating-word">
                    {/*Static words for layout, JS will animate*/}
                    {rotatingTexts.map((text, i) => (
                      <span key={i} style={{ 
                          animationDelay: `${i * 3}s`,
                          position: i === index ? 'relative' : 'absolute',
                          opacity: i === index ? 1: 0,
                          transition: 'opacity 0.5s ease-in-out',
                      }}>{text}</span>
                    ))}
                </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-[var(--text-dim)] mb-8">
                Deploy autonomous AI agents to handle complex tasks, from customer support to data analysis, freeing up your human team for what they do best.
            </p>
            <div className="flex justify-center items-center gap-4">
                <button className="bg-[var(--yellow)] text-black font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                    Request a Demo
                </button>
                <button className="font-semibold px-6 py-3 rounded-lg text-[var(--text-dim)] hover:text-[var(--text)] transition-colors">
                    Learn More &rarr;
                </button>
            </div>
        </div>
    </div>
  );
}

// --- PILLARS SECTION ---
function ThreePillars() {
  const pillars = [
    { icon: <IconBriefcase />, title: "Autonomous Agents", description: "AI that thinks and acts independently to complete complex, multi-step tasks." },
    { icon: <IconTarget />, title: "Goal-Oriented", description: "Define your objective, and our agents will determine the best path to achieve it." },
    { icon: <IconZap />, title: "Seamless Integration", description: "Connects with your existing tools and workflows for a frictionless experience." },
  ];

  return (
    <div id="pillars">
      <SectionTitle>Your Workforce, Reimagined</SectionTitle>
      <div className="grid md:grid-cols-3 gap-8">
        {pillars.map((pillar, i) => (
          <div key={i} className="text-center p-8 bg-[var(--card)] border border-[var(--border)] rounded-xl card-hover">
            <div className="inline-block p-4 bg-[var(--yellow)] text-black rounded-lg mb-4">
              {pillar.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
            <p className="text-[var(--text-dim)]">{pillar.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- WHO IT'S FOR SECTION ---
function WhoIsItFor() {
    return (
        <div>
            <SectionTitle>Designed For Teams That Value <span className="text-[var(--yellow)]">Efficiency</span></SectionTitle>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-lg">
                <div className="bg-[var(--card)] p-8 border border-[var(--border)] rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Startups & SMBs</h3>
                    <p className="text-[var(--text-dim)]">Scale your operations without scaling your headcount. Automate repetitive tasks and focus on growth.</p>
                </div>
                <div className="bg-[var(--card)] p-8 border border-[var(--border)] rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Enterprise Teams</h3>
                    <p className="text-[var(--text-dim)]">Empower your departments with AI assistants for sales, support, and marketing to boost productivity.</p>
                </div>
            </div>
        </div>
    );
}


// --- USE CASES GRID ---
function UseCases() {
    const cases = [
        { title: "Customer Support Agent", description: "Answers queries, resolves issues, and escalates to humans only when necessary." },
        { title: "Sales Development Rep", description: "Identifies leads, sends personalized outreach, and books meetings 24/7." },
        { title: "Data Analyst", description: "Connects to your database to find insights, generate reports, and answer questions in natural language." },
        { title: "Social Media Manager", description: "Schedules posts, engages with comments, and tracks brand mentions across platforms." },
        { title: "Recruitment Assistant", description: "Sources candidates, screens resumes, and schedules interviews with your top choices." },
        { title: "Custom Solutions", description: "Build a bespoke agent tailored to your unique operational needs." },
    ];
    
    return (
        <div id="use_cases">
            <SectionTitle>Endless Possibilities</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cases.map((useCase) => (
                    <div key={useCase.title} className="bg-[var(--card)] p-6 border border-[var(--border)] rounded-xl card-hover">
                        <h3 className="font-bold text-lg mb-2">{useCase.title}</h3>
                        <p className="text-[var(--text-dim)] text-sm">{useCase.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}


// --- CTA BANNER ---
function CtaBanner() {
    return (
        <div className="text-center rounded-xl bg-[var(--card)] border border-[var(--border)] p-12 relative overflow-hidden">
             <div className="absolute -inset-4 bg-[var(--cta-glow)] blur-3xl rounded-full"></div>
             <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your AI Workforce?</h2>
                <p className="max-w-xl mx-auto text-lg text-[var(--text-dim)] mb-8">
                    Stop imagining the future of work. Start building it.
                </p>
                <button className="bg-[var(--yellow)] text-black font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-lg">
                    Schedule Your Free Consultation
                </button>
            </div>
        </div>
    );
}

// --- FOOTER ---
function Footer() {
  return (
    <footer id="contact" className="border-t border-[var(--footer-border)] bg-[var(--bg)]">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[var(--text-dim)] text-center md:text-left mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} My AI Workforce. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
                 <a href="mailto:contact@myaiworkforce.com" className="text-[var(--text-dim)] hover:text-[var(--yellow)]">
                    <IconMail />
                 </a>
                 <a href="#" className="text-[var(--text-dim)] hover:text-[var(--yellow)]">
                    <IconTwitter />
                 </a>
                 <a href="#" className="text-[var(--text-dim)] hover:text-[var(--yellow)]">
                    <IconLinkedin />
                 </a>
            </div>
        </div>
      </div>
    </footer>
  );
}
