
"use client";
import React, { useState, useEffect } from "react";

const HomePage = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <HeroSection />
      <PillarsSection />
      <WhoIsItForSection />
      <UseCasesSection />
      <CtaBanner />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <div className="text-2xl font-bold">myaiworkforce</div>
      <nav className="hidden md:flex gap-8">
        <a href="#" className="text-gray-600 hover:text-black">Marketplace</a>
        <a href="#" className="text-gray-600 hover:text-black">Use Cases</a>
        <a href="#" className="text-gray-600 hover:text-black">Pricing</a>
        <a href="#" className="text-gray-600 hover:text-black">Contact</a>
      </nav>
      <div>
        <button className="bg-black text-white px-4 py-2 rounded-lg">Get Started</button>
      </div>
    </header>
  );
};

const HeroSection = () => {
  const [text, setText] = useState("Automate");
  const words = ["Automate", "Innovate", "Accelerate"];
  useEffect(() => {
    const interval = setInterval(() => {
      setText(prevText => {
        const currentIndex = words.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-center py-20 px-4">
      <h1 className="text-6xl font-bold mb-4">
        <span className="text-blue-500">{text}</span> Your Business with AI
      </h1>
      <p className="text-xl text-gray-600 mb-8">Deploy powerful AI agents to handle tasks, from customer service to data analysis.</p>
      <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg">Explore the Marketplace</button>
    </section>
  );
};

const PillarsSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          </div>
          <h3 className="text-2xl font-bold mb-2">Autonomous Agents</h3>
          <p className="text-gray-600">Deploy AI agents that work 24/7, handling complex tasks without human intervention.</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 12h10"></path><path d="M12 7v10"></path></svg>
          </div>
          <h3 className="text-2xl font-bold mb-2">Seamless Integration</h3>
          <p className="text-gray-600">Connect our agents with your existing tools and workflows in just a few clicks.</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          </div>
          <h3 className="text-2xl font-bold mb-2">Unmatched Security</h3>
          <p className="text-gray-600">Your data is protected with enterprise-grade security and privacy controls.</p>
        </div>
      </div>
    </section>
  );
};

const WhoIsItForSection = () => {
  return (
    <section className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Who is My AI Workforce for?</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-lg border">
          <h3 className="text-2xl font-bold mb-4">Startups & Small Businesses</h3>
          <p className="text-gray-600">Scale your operations without the overhead. Automate customer support, lead generation, and social media management, so you can focus on growth.</p>
        </div>
        <div className="p-8 rounded-lg border">
          <h3 className="text-2xl font-bold mb-4">Enterprises</h3>
          <p className="text-gray-600">Enhance your team's productivity. Our agents can handle data entry, generate reports, and manage internal workflows, freeing up your employees for more strategic work.</p>
        </div>
      </div>
    </section>
  );
};

const UseCasesSection = () => {
    return (
        <section className="py-20 px-4 bg-gray-50">
            <h2 className="text-4xl font-bold text-center mb-12">Endless Possibilities</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 rounded-lg border bg-white">
                    <h3 className="text-xl font-bold mb-2">Customer Support</h3>
                    <p className="text-gray-600">24/7 automated support via chat and email.</p>
                </div>
                <div className="p-6 rounded-lg border bg-white">
                    <h3 className="text-xl font-bold mb-2">Sales Outreach</h3>
                    <p className="text-gray-600">Automate lead qualification and initial contact.</p>
                </div>
                <div className="p-6 rounded-lg border bg-white">
                    <h3 className="text-xl font-bold mb-2">Social Media Management</h3>
                    <p className="text-gray-600">Schedule posts, engage with followers, and track metrics.</p>
                </div>
                <div className="p-6 rounded-lg border bg-white">
                    <h3 className="text-xl font-bold mb-2">Data Analysis</h3>
                    <p className="text-gray-600">Process datasets and generate insightful reports.</p>
                </div>
                <div className="p-6 rounded-lg border bg-white">
                    <h3 className="text-xl font-bold mb-2">Content Creation</h3>
                    <p className="text-gray-600">Generate blog posts, product descriptions, and ad copy.</p>
                </div>
                <div className="p-6 rounded-lg border bg-white">
                    <h3 className="text-xl font-bold mb-2">HR & Recruitment</h3>
                    <p className="text-gray-600">Screen resumes, schedule interviews, and onboard new hires.</p>
                </div>
            </div>
        </section>
    );
};

const CtaBanner = () => {
  return (
    <section className="bg-blue-500 text-white text-center py-20 px-4">
      <h2 className="text-4xl font-bold mb-4">Ready to build your AI workforce?</h2>
      <p className="text-xl mb-8">Sign up today and get started for free. No credit card required.</p>
      <button className="bg-white text-blue-500 px-8 py-3 rounded-lg text-lg font-bold">Start Building</button>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                <h3 className="text-xl font-bold mb-4">myaiworkforce</h3>
                <p className="text-gray-400">Automate. Innovate. Accelerate.</p>
            </div>
            <div>
                <h4 className="font-bold mb-4">Product</h4>
                <a href="#" className="block text-gray-400 hover:text-white mb-2">Marketplace</a>
                <a href="#" className="block text-gray-400 hover:text-white mb-2">Use Cases</a>
                <a href="#" className="block text-gray-400 hover:text-white mb-2">Pricing</a>
            </div>
            <div>
                <h4 className="font-bold mb-4">Company</h4>
                <a href="#" className="block text-gray-400 hover:text-white mb-2">About Us</a>
                <a href="#" className="block text-gray-400 hover:text-white mb-2">Careers</a>
                <a href="#" className="block text-gray-400 hover:text-white mb-2">Contact</a>
            </div>
            <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <a href="#" className="block text-gray-400 hover:text-white mb-2">Privacy Policy</a>
                <a href="#" className="block text-gray-400 hover:text-white mb-2">Terms of Service</a>
            </div>
        </div>
        <div className="text-center text-gray-500 mt-8 pt-8 border-t border-gray-800">
            © 2024 My AI Workforce. All rights reserved.
        </div>
    </footer>
  );
};

export default HomePage;
