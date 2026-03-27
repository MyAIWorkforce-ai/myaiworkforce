
"use client";
import React from "react";

const MarketplacePage = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main className="max-w-7xl mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold">AI Agent Marketplace</h1>
          <p className="text-lg text-gray-600 mt-2">Find the perfect AI agent to automate your business tasks.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <aside className="w-full md:w-1/4">
            <div className="sticky top-8">
              <h2 className="text-2xl font-bold mb-4">Filters</h2>
              <div className="mb-6">
                <label htmlFor="search" className="font-semibold block mb-2">Search</label>
                <input type="text" id="search" placeholder="Search agents..." className="w-full p-2 border rounded-lg"/>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Categories</h3>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2"><input type="checkbox"/> Customer Support</label>
                  <label className="flex items-center gap-2"><input type="checkbox"/> Sales & Marketing</label>
                  <label className="flex items-center gap-2"><input type="checkbox"/> Data & Analytics</label>
                  <label className="flex items-center gap-2"><input type="checkbox"/> Social Media</label>
                  <label className="flex items-center gap-2"><input type="checkbox"/> Content Creation</label>
                   <label className="flex items-center gap-2"><input type="checkbox"/> HR & Recruitment</label>
                </div>
              </div>
            </div>
          </aside>

          {/* Agent Grid */}
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 12 }).map((_, i) => (
                <AgentCard key={i} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const AgentCard = () => {
  return (
    <div className="border rounded-lg p-6 flex flex-col items-center text-center bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
      </div>
      <h3 className="text-xl font-bold">AI Agent #{Math.floor(Math.random() * 1000)}</h3>
      <p className="text-gray-500 text-sm mb-4">By AI Corp</p>
      <p className="text-gray-600 mb-4">This is a brief description of the AI agent and what it does.</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">View Details</button>
    </div>
  );
};


const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <div className="text-2xl font-bold">myaiworkforce</div>
      <nav className="hidden md:flex gap-8">
        <a href="/" className="text-gray-600 hover:text-black">Home</a>
        <a href="/marketplace" className="text-black font-semibold">Marketplace</a>
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
                <a href="/marketplace" className="block text-white mb-2">Marketplace</a>
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

export default MarketplacePage;
