import React, { useState } from 'react';
import { Shield, Zap, Lock, CheckCircle, ArrowRight, Menu, X, TrendingUp, Lightbulb, Flame } from 'lucide-react';

export default function TILWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 z-50 border-b border-emerald-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-sm font-bold text-emerald-600">TIL</div>
              <div className="text-xs text-slate-600">Turners Innovation Labs</div>
            </div>
          </div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => setCurrentPage('home')} className="hover:text-emerald-600 font-medium">Home</button>
            <button onClick={() => setCurrentPage('mission')} className="hover:text-emerald-600 font-medium">Mission</button>
            <button onClick={() => setCurrentPage('ideas')} className="hover:text-emerald-600 font-medium">Ideas</button>
            <button onClick={() => setCurrentPage('services')} className="hover:text-emerald-600 font-medium">Services</button>
            <button className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-semibold">Talk to Alex</button>
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-6">
            <h1 className="text-6xl font-bold text-slate-900">Your Idea. Your Control.</h1>
            <p className="text-xl text-slate-600 max-w-xl">We help founders create world-changing innovations without surrendering ownership. No exploitation. Strategic partnership.</p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-semibold">I'm a Founder</button>
              <button className="px-8 py-4 border-2 border-emerald-500 text-emerald-600 rounded-lg font-semibold">My Company Needs Help</button>
            </div>
            <div className="space-y-2 pt-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Keep 100% ownership</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Strategic guidance without control grabs</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Your mission stays sacred</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-6">Proven Innovation</h2>
        <p className="text-xl text-slate-600 mb-12">Concepts that work. Enough to inspire. Not enough to steal.</p>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl border border-emerald-200 p-8 hover:shadow-xl transition">
            <Zap className="w-6 h-6 text-emerald-600 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Hydra-Flow</h3>
            <p className="text-slate-600 mb-6">Distributed propulsion hybrid-electric aircraft designed for maximum efficiency.</p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm">60% emissions reduction</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm">Redundant safety systems</span>
              </div>
            </div>
            <button className="text-emerald-600 font-semibold flex items-center gap-2">Learn More <ArrowRight className="w-4 h-4" /></button>
          </div>

          <div className="bg-white rounded-2xl border border-teal-200 p-8 hover:shadow-xl transition">
            <span className="text-2xl mb-4 block">⚡</span>
            <h3 className="text-2xl font-bold mb-4">StormVolt</h3>
            <p className="text-slate-600 mb-6">Multi-source energy system combining wind, solar, and water harvesting.</p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="text-sm">80-90% energy independence</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="text-sm">Storm protection integrated</span>
              </div>
            </div>
            <button className="text-teal-600 font-semibold flex items-center gap-2">Learn More <ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
        <button className="px-8 py-4 border-2 border-emerald-500 text-emerald-600 rounded-lg font-semibold">Explore 15+ Ideas</button>
      </section>

      <section className="py-32 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-6">Build Without Compromise</h2>
        <button className="px-12 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-semibold text-lg">Schedule Free Strategy Call</button>
      </section>

      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2025 TIL - Turners Innovation Labs. Helping founders keep their companies.</p>
        </div>
      </footer>
    </div>
  );
}
