import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, LayoutDashboard, CreditCard, Activity, Network, ArrowRight, CheckCircle2, Calendar, X, Link as LinkIcon, Camera, Copy } from "lucide-react";
import futureqLogo from "./assets/futureq.png";

const BookingContext = React.createContext({
  openBooking: () => {}
});

const seoFaqs = [
  {
    question: "How long does SEO take to show results?",
    answer: "Most sites see early movement in 4 to 8 weeks, with meaningful compounding gains by months 3 to 6. We pair SEO with conversion fixes so early traffic converts faster."
  },
  {
    question: "Do you handle local SEO for Indian businesses?",
    answer: "Yes. We optimize Google Business Profiles, location pages, and local intent keywords that capture high-intent searches in Tier-2 and Tier-3 cities."
  },
  {
    question: "Will you improve site speed and Core Web Vitals?",
    answer: "Absolutely. We optimize performance, image delivery, and code splitting to reach 90+ speed scores and improve Core Web Vitals."
  },
  {
    question: "Do you provide content and landing pages?",
    answer: "Yes. We create SEO-focused service pages, location pages, and high-converting landing pages aligned with your offers."
  }
];

const upsertMeta = ({ name, property, content }) => {
  const attrName = name ? "name" : "property";
  const attrValue = name || property;
  if (!attrValue) {
    return;
  }
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const upsertLink = ({ rel, href }) => {
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
};

const upsertJsonLd = (json) => {
  const scriptId = "seo-jsonld";
  let script = document.getElementById(scriptId);
  if (!script) {
    script = document.createElement("script");
    script.setAttribute("id", scriptId);
    script.setAttribute("type", "application/ld+json");
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(json);
};

// --- Components ---

const BookingModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="bg-[#0b0f14] border border-white/10 rounded-3xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden relative shadow-[0_0_60px_rgba(16,185,129,0.18)]"
          >
              <div className="flex justify-between items-center p-4 border-b border-white/10 bg-[#0b0f14]/80 backdrop-blur-md absolute top-0 left-0 right-0 z-10">
              <span className="text-white font-medium flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-emerald-300" />
                Schedule a Meeting with FutureQ
              </span>
              <button 
                onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 w-full h-full pt-[60px] bg-slate-50 relative">
               {/* Adding a loading skeleton or just background */}
                 <div className="absolute inset-0 pt-[60px] flex items-center justify-center -z-10 bg-[#0a0d12]">
                 <div className="animate-pulse flex items-center gap-2 text-slate-400">
                     <Calendar className="w-5 h-5 animate-bounce text-emerald-300" />
                   Loading Calendar...
                 </div>
               </div>
               <iframe 
                  src="https://calendly.com/saurabh-futureq/30min"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="w-full h-full relative z-10 rounded-b-3xl"
               ></iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  const { openBooking } = React.useContext(BookingContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0d12]/70 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={futureqLogo}
              alt="FutureQ"
              className="h-10 w-10 rounded-xl object-contain bg-[#0a0d12]/60 border border-white/10"
            />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-emerald-200">
              FutureQ
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 ease-in-out hover:scale-105">Services</Link>
            <Link to="/seo" className="text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 ease-in-out hover:scale-105">SEO</Link>
            <a href="/#our-work" className="text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 ease-in-out hover:scale-105">Our Work</a>
            <a href="/#about-us" className="text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 ease-in-out hover:scale-105">About</a>
            <a href="/#pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 ease-in-out hover:scale-105">Pricing</a>
            <button 
              onClick={openBooking}
              className="text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
            >
              Book a Meeting
            </button>
            <Link 
              to="/get-started" 
              className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition-all duration-300 ease-in-out hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
            >
              Get Started
            </Link>
          </div>
          <button
            onClick={() => setIsMenuOpen((value) => !value)}
            className="md:hidden px-4 py-2 rounded-full border border-white/15 text-slate-200 text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:border-white/30"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-6"
            >
              <div className="mt-4 flex flex-col gap-4 rounded-3xl border border-white/10 bg-[#0f1720]/70 backdrop-blur-md p-6">
                <Link to="/services" className="text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 ease-in-out">Services</Link>
                <Link to="/seo" className="text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 ease-in-out">SEO</Link>
                <a href="/#our-work" className="text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 ease-in-out">Our Work</a>
                <a href="/#about-us" className="text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 ease-in-out">About</a>
                <a href="/#pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 ease-in-out">Pricing</a>
                <button
                  onClick={() => {
                    openBooking();
                    setIsMenuOpen(false);
                  }}
                  className="text-left text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 ease-in-out"
                >
                  Book a Meeting
                </button>
                <Link
                  to="/get-started"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-center px-5 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition-all duration-300 ease-in-out"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

const Footer = () => {
  const { openBooking } = React.useContext(BookingContext);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("saurabh.futureq@gmail.com");
      alert("Email copied to clipboard.");
    } catch (error) {
      console.error("Clipboard copy failed:", error);
      alert("Copy failed. Please try again.");
    }
  };
  
  return (
  <footer className="bg-[#0a0d12] relative z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Layer 1: Pre-Footer CTA */}
      <div className="-translate-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-[#0f1720]/70 backdrop-blur-md p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_40px_rgba(16,185,129,0.15)]"
        >
          <div className="flex items-center gap-4">
            <img
              src={futureqLogo}
              alt="FutureQ"
              className="h-12 w-12 rounded-2xl object-contain bg-[#0a0d12]/60 border border-white/10"
            />
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                Ready to scale your business?
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Let&#39;s build the future together.
              </p>
            </div>
          </div>
          <Link
            to="/get-started"
            className="px-8 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition-all duration-300 ease-in-out hover:scale-105 shadow-[0_0_30px_rgba(16,185,129,0.4)]"
          >
            Start Your Build
          </Link>
        </motion.div>
      </div>

      {/* Layer 2: Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-16">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src={futureqLogo}
              alt="FutureQ"
              className="h-10 w-10 rounded-xl object-contain bg-[#0a0d12]/70 border border-white/10"
            />
            <div className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-emerald-200">
              FutureQ
            </div>
          </div>
          <p className="text-slate-400 leading-relaxed">
            Architecting digital dominance for Tier-2 India.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold tracking-widest text-slate-400">SERVICES</h4>
          <div className="flex flex-col gap-3">
            {[
              { label: "Web Development", href: "/services#web-development" },
              { label: "AI Automation", href: "/services#ai-automation" },
              { label: "Custom CRM", href: "/services#custom-crm" },
              { label: "Lead Generation", href: "/services#lead-generation" },
              { label: "SEO Strategy", href: "/seo" }
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-slate-300 hover:text-white transition-all duration-300 ease-in-out hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.4)]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold tracking-widest text-slate-400">COMPANY</h4>
          <div className="flex flex-col gap-3">
            <a href="#about-us" className="text-slate-300 hover:text-white transition-all duration-300 ease-in-out hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.4)]">About Us</a>
            <a href="#our-work" className="text-slate-300 hover:text-white transition-all duration-300 ease-in-out hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.4)]">Our Work</a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition-all duration-300 ease-in-out hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.4)]">Pricing</a>
            <button
              onClick={openBooking}
              className="text-left text-slate-300 hover:text-white transition-all duration-300 ease-in-out hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.4)]"
            >
              Book a Demo
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold tracking-widest text-slate-400">CONTACT</h4>
          <button
            onClick={handleCopyEmail}
            className="group inline-flex items-center gap-2 text-slate-300 hover:text-white transition-all duration-300 ease-in-out hover:scale-105"
          >
            <span>saurabh.futureq@gmail.com</span>
            <Copy className="w-4 h-4 text-slate-400 group-hover:text-white" />
          </button>
          <div className="flex gap-4 pt-2">
            {[{
              label: "LinkedIn",
              icon: LinkIcon
            }, {
              label: "Instagram",
              icon: Camera
            }].map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_18px_rgba(16,185,129,0.3)]"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Layer 3: Watermark and Legal */}
    <div className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-[12vw] md:text-[9vw] font-extrabold tracking-tighter text-white/5 text-center leading-none select-none">
          FUTUREQ
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-8 text-sm text-slate-500">
          <div>Copyright © 2026 FutureQ. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-all duration-300 ease-in-out hover:scale-105">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-all duration-300 ease-in-out hover:scale-105">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
};

// --- Pages ---

const Home = () => {
  const { openBooking } = React.useContext(BookingContext);
  const servicesContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const servicesItem = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 110, damping: 18 }
    }
  };

  const serviceCards = [
    {
      title: "Custom Product Platforms",
      description: "High-performance platforms engineered for scale, designed to convert local traffic into high-ticket leads.",
      icon: LayoutDashboard,
      accent: "from-emerald-500/20 via-emerald-500/5 to-transparent",
      bullets: ["Blueprint-to-MVP in 7 days", "Secure auth + audit logs", "Role-based dashboards"]
    },
    {
      title: "Automation-First Payments",
      description: "UPI, Razorpay, and Stripe flows that automate collections, invoices, and reconciliation.",
      icon: CreditCard,
      accent: "from-amber-500/20 via-amber-500/5 to-transparent",
      bullets: ["One-click payments", "Auto-invoicing", "Subscription logic"]
    },
    {
      title: "Ops & Admin Intelligence",
      description: "Actionable dashboards that reveal bottlenecks, automate tasks, and surface growth signals.",
      icon: Activity,
      accent: "from-teal-500/20 via-teal-500/5 to-transparent",
      bullets: ["Real-time analytics", "Team activity tracking", "Smart alerts"]
    },
    {
      title: "System Integrations",
      description: "We connect CRMs, payment tools, and legacy systems into a single, stable workflow.",
      icon: Network,
      accent: "from-lime-500/20 via-lime-500/5 to-transparent",
      bullets: ["API orchestration", "Webhook automation", "Zero manual data entry"]
    },
    {
      title: "Lead Conversion Engines",
      description: "Optimized landing funnels with native WhatsApp and mobile-first booking flows.",
      icon: LayoutDashboard,
      accent: "from-teal-500/20 via-teal-500/5 to-transparent",
      bullets: ["Local SEO ready", "WhatsApp CTAs", "High-converting forms"]
    },
    {
      title: "AI Workflow Layer",
      description: "Automate repetitive communication, follow-ups, and lead scoring with AI logic.",
      icon: Activity,
      accent: "from-emerald-400/20 via-emerald-400/5 to-transparent",
      bullets: ["Auto responses", "Lead qualification", "Smart routing"]
    }
  ];

  const processSteps = [
    {
      phase: "Phase 01",
      title: "Discovery & Blueprint",
      duration: "Week 1",
      outcomes: ["Process audit", "Conversion audit", "Architecture plan"],
      signal: "Blueprint locked"
    },
    {
      phase: "Phase 02",
      title: "Design & Rapid Build",
      duration: "Week 2-3",
      outcomes: ["High-fidelity UI", "Core workflows", "QA pass"],
      signal: "MVP live"
    },
    {
      phase: "Phase 03",
      title: "Automation & Integrations",
      duration: "Week 4",
      outcomes: ["Payments + CRM", "WhatsApp automation", "Analytics hooks"],
      signal: "Ops automated"
    },
    {
      phase: "Phase 04",
      title: "Scale & Optimization",
      duration: "Ongoing",
      outcomes: ["Performance tuning", "Conversion uplift", "Feature expansion"],
      signal: "Growth compounding"
    }
  ];
  const heroStats = [
    { label: "Avg. speed score", value: "90+" },
    { label: "Time-to-launch", value: "7 days" },
    { label: "Lead lift", value: "4x" }
  ];

  const trustSignals = [
    "Local SEO dominance",
    "WhatsApp-native flows",
    "Automation-ready stack",
    "Conversion-first UX"
  ];

  const impactCases = [
    {
      title: "EdTech Ecosystem Automation",
      metric: "15+ Hours Saved/Week",
      summary: "Integrated automated payments, attendance, and admin dashboards for a regional tuition center.",
      outcomes: ["98% fee collection rate", "3x faster onboarding", "Unified student CRM"],
      accent: "from-emerald-500/20 via-emerald-500/5 to-transparent",
      icon: Activity
    },
    {
      title: "B2B Logistics API Gateway",
      metric: "300% Processing Speed",
      summary: "Consolidated fleet tracking, dispatch, and billing into one GraphQL gateway.",
      outcomes: ["Instant driver routing", "99.9% uptime", "Realtime analytics"],
      accent: "from-amber-500/20 via-amber-500/5 to-transparent",
      icon: Network
    },
    {
      title: "Gym Lead Engine",
      metric: "4x Lead Conversion",
      summary: "Rebuilt the entire funnel with WhatsApp bookings, instant follow-ups, and local SEO.",
      outcomes: ["42% drop in CPL", "7-day nurture", "Auto follow-ups"],
      accent: "from-teal-500/20 via-teal-500/5 to-transparent",
      icon: LayoutDashboard
    }
  ];

  return (
    <div className="bg-[#0a0d12] text-white min-h-screen pt-20 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-[520px] h-[520px] bg-emerald-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[420px] h-[420px] bg-amber-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.2),_transparent_55%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-emerald-400/40 bg-emerald-400/10 text-emerald-200 text-xs font-semibold tracking-widest uppercase mb-6"
            >
              Elite AI + Web Automation
            </motion.span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              We build <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-emerald-200">conversion systems</span>
              <br className="hidden md:block" />
              for India&#39;s next market leaders.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              FutureQ engineers premium, automation-first platforms that replace chaos with precision, speed, and compounding revenue.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/get-started"
                className="group relative w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 rounded-full text-slate-950 font-semibold text-lg transition-all duration-300 ease-in-out flex items-center justify-center gap-2 overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:scale-105"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                <span className="relative z-10">Get a Custom Audit</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={openBooking}
                className="group relative w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 rounded-full text-white font-semibold text-lg transition-all duration-300 ease-in-out flex items-center justify-center gap-2 overflow-hidden border border-white/10 hover:border-white/25 hover:shadow-[0_0_20px_rgba(255,255,255,0.12)] hover:scale-105"
              >
                <Calendar className="w-5 h-5 text-emerald-200 group-hover:text-white transition-colors relative z-10" />
                <span className="relative z-10">Book a 30-Min Meeting</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-5 transition-all duration-300 ease-in-out hover:scale-105">
                <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">{stat.value}</div>
                <div className="text-sm text-slate-400 leading-relaxed">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {trustSignals.map((signal) => (
              <span key={signal} className="text-xs font-semibold tracking-widest text-slate-200 uppercase bg-white/5 border border-white/10 px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:scale-105">
                {signal}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Advanced Bento */}
      <section id="services" className="py-32 relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.14),_transparent_55%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-emerald-200 uppercase px-4 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10">
              What We Solve
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4">
              Systems that replace chaos with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-emerald-200"> precision.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed max-w-3xl mx-auto mt-4">
              We design automation ecosystems that feel premium, respond instantly, and turn local demand into compounding revenue.
            </p>
          </div>

          <motion.div
            variants={servicesContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {serviceCards.map((card) => (
              <motion.div
                key={card.title}
                variants={servicesItem}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 overflow-hidden transition-all duration-300 ease-in-out"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-emerald-300">
                    <card.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {card.description}
                  </p>
                  <div className="space-y-3">
                    {card.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-300" />
                        <span className="leading-relaxed">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-32 relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(16,185,129,0.12),_transparent_60%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-emerald-200 uppercase px-4 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10">
              Our Process
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4">
              A cinematic build system that
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-emerald-200"> compounds results.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed max-w-3xl mx-auto mt-4">
              Each phase is designed for speed, clarity, and compounding conversion wins across your entire digital presence.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 w-0.5 bg-gradient-to-b from-emerald-500 via-amber-400 to-transparent"
            />
            <div className="space-y-10">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
                >
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-6 w-8 h-8 rounded-full border border-white/10 bg-[#0a0d12] flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.6)]" />
                  </div>
                  <div className="ml-12 md:ml-0 md:w-[48%] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-[0_0_30px_rgba(10,13,18,0.6)]">
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div>
                        <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">{step.phase}</p>
                        <h3 className="text-2xl font-semibold tracking-tight text-white">{step.title}</h3>
                      </div>
                      <span className="text-xs font-semibold text-emerald-200 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {step.outcomes.map((outcome) => (
                        <div key={outcome} className="text-sm text-slate-300 leading-relaxed bg-[#0a0d12]/70 border border-white/10 rounded-2xl px-3 py-2">
                          {outcome}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 text-sm text-slate-400 leading-relaxed">
                      Outcome: <span className="text-slate-200">{step.signal}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies / Our Impact */}
      <section id="our-work" className="py-32 relative z-10 bg-slate-900/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-emerald-200 uppercase px-4 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10">
              Our Impact
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4">
              Real-world outcomes with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-emerald-200"> measurable wins.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed max-w-3xl mx-auto mt-4">
              Each solution is engineered to create visible business impact: faster operations, higher conversion, and scalable demand.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {impactCases.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -8, scale: 1.01 }}
                className="relative rounded-3xl border border-white/10 bg-[#0a0d12]/70 backdrop-blur-md p-8 overflow-hidden transition-all duration-300 ease-in-out"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-70`} />
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold tracking-widest text-emerald-200 uppercase">{item.metric}</div>
                    <div className="w-10 h-10 rounded-2xl bg-[#0a0d12]/70 border border-white/10 flex items-center justify-center text-emerald-200">
                      <item.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-white mb-3">{item.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{item.summary}</p>
                  </div>
                  <div className="space-y-3">
                    {item.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-start gap-3 text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-300" />
                        <span className="leading-relaxed">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Us / Founders */}
      <section id="about-us" className="py-32 relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_55%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-emerald-200 uppercase px-4 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10">
              Leadership
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4">
              Meet the Engineering Team that
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-emerald-200"> ships revenue.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed max-w-3xl mx-auto mt-4">
              We blend startup speed with enterprise-grade architecture, delivering systems that feel premium and perform under real-world pressure.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {[{
              name: "Saurabh Raj",
              role: "Founder & CEO",
              accent: "from-amber-500/30 via-amber-500/10 to-transparent",
              summary: "Product strategist and systems architect focused on conversion, clarity, and market-winning execution.",
              highlights: ["UX-first product design", "Local market expansion", "Revenue-centric roadmaps"],
              metrics: ["12+ platform launches", "90+ speed score", "4x lead uplift"]
            }, {
              name: "Rishav Kumar Srivastava",
              role: "Co-Founder & CTO",
              accent: "from-emerald-500/30 via-emerald-500/10 to-transparent",
              summary: "Infrastructure and automation specialist ensuring every platform is secure, scalable, and future-proof.",
              highlights: ["API orchestration", "Security hardening", "Automation workflows"],
              metrics: ["99.9% uptime targets", "24h deployment cycles", "Zero-downtime rollouts"]
            }].map((leader) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-10 overflow-hidden transition-all duration-300 ease-in-out"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${leader.accent} opacity-60`} />
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-white">{leader.name}</h3>
                      <p className="text-emerald-200 font-medium">{leader.role}</p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-[#0a0d12]/70 border border-white/10 flex items-center justify-center">
                      <img src={futureqLogo} alt="FutureQ" className="w-7 h-7 object-contain" />
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{leader.summary}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {leader.highlights.map((item) => (
                      <div key={item} className="text-sm text-slate-300 bg-[#0a0d12]/70 border border-white/10 rounded-2xl px-3 py-2">
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {leader.metrics.map((metric) => (
                      <span key={metric} className="text-xs font-semibold tracking-widest text-slate-200 uppercase bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 relative z-10 bg-neutral-950">
        <div className="absolute top-1/3 left-1/4 w-[420px] h-[420px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              Pricing Built for Local Winners
            </h2>
            <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">
              FutureQ delivers speed, trust, and premium quality for Indian businesses that want to grow fast.
            </p>
          </div>
          {(() => {
            const tiers = [
              {
                name: "STARTER",
                tagline: "The Digital Storefront",
                price: "4,999",
                subtitle: "Perfect for a professional online presence.",
                features: [
                  "3-4 Page Architecture",
                  "Mobile-Responsive UI",
                  "Fast Loading Speeds",
                  "Click-to-Call & Basic Contact",
                  "Standard SEO"
                ],
                buttonText: "Start Building",
                buttonClass:
                  "border border-slate-600/60 text-slate-100 hover:border-slate-300 hover:text-white",
                cardClass: "bg-white/5 border border-white/10",
                accent: "text-slate-300",
                isPopular: false,
                hasGradientBorder: false
              },
              {
                name: "BUSINESS",
                tagline: "The Lead Machine",
                price: "7,999",
                subtitle: "Turn visitors into paying customers.",
                features: [
                  "Everything in Starter",
                  "Floating WhatsApp Integration",
                  "Custom Lead Capture Forms",
                  "Google My Business Setup",
                  "Advanced Local SEO"
                ],
                buttonText: "Scale My Business",
                buttonClass:
                  "bg-emerald-400 text-slate-950 hover:bg-emerald-300 shadow-lg shadow-emerald-500/30",
                cardClass: "bg-white/5 border border-emerald-400/40 ring-1 ring-emerald-400/20",
                accent: "text-emerald-200",
                isPopular: true,
                hasGradientBorder: false
              },
              {
                name: "ENTERPRISE",
                tagline: "The Growth Engine",
                price: "14,999",
                subtitle: "Fully automated ecosystem for high-ticket local brands.",
                features: [
                  "Everything in Business",
                  "Automated Booking System",
                  "WhatsApp CRM Automation",
                  "Premium Bento Grid UI/UX",
                  "Ultra-Fast Edge Hosting (90+ Speed Score)"
                ],
                buttonText: "Automate Everything",
                buttonClass:
                  "bg-gradient-to-r from-amber-300 to-emerald-300 text-slate-950 hover:from-amber-200 hover:to-emerald-200 shadow-xl shadow-amber-400/40",
                cardClass: "bg-[#0b1118] border border-amber-200/30 shadow-[0_0_40px_rgba(16,185,129,0.12)]",
                accent: "text-amber-50",
                isPopular: false,
                hasGradientBorder: true
              }
            ];

            const containerVariants = {
              hidden: { opacity: 1 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.18 }
              }
            };

            const cardVariants = {
              hidden: { opacity: 0, y: 26 },
              show: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 120, damping: 18 }
              }
            };

            return (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="grid grid-cols-1 gap-8 md:grid-cols-3"
              >
                {tiers.map((tier) => {
                  const isEnterprise = tier.name === "ENTERPRISE";
                  return (
                  <motion.div
                    key={tier.name}
                    variants={cardVariants}
                    whileHover={isEnterprise ? { y: -12, scale: 1.01 } : { y: -8 }}
                    className={`relative h-full rounded-3xl p-8 backdrop-blur ${tier.cardClass} ${isEnterprise ? "enterprise-card" : ""}`}
                  >
                    {isEnterprise && <div className="enterprise-border" />}
                    {tier.hasGradientBorder && (
                      <>
                        <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-400 opacity-70 blur-sm" />
                        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-400 opacity-80" />
                      </>
                    )}

                    {tier.isPopular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-emerald-400 px-4 py-1 text-xs font-semibold tracking-wider text-slate-950">
                        MOST POPULAR
                      </div>
                    )}

                    <div className="relative z-10 flex h-full flex-col">
                      <p className={`text-xs font-semibold tracking-widest text-slate-400 ${isEnterprise ? "enterprise-label" : ""}`}>{tier.name}</p>
                      <p className={`mt-1 text-sm ${tier.accent} ${isEnterprise ? "enterprise-tagline" : ""}`}>{tier.tagline}</p>

                      <div className="mt-5 flex items-baseline gap-1">
                        <span className="text-2xl font-medium text-slate-400">₹</span>
                        <span className={`text-5xl font-semibold tracking-tight text-white ${isEnterprise ? "enterprise-price" : ""}`}>{tier.price}</span>
                      </div>

                      <p className={`mt-3 text-sm leading-relaxed text-slate-300 ${isEnterprise ? "enterprise-subtitle" : ""}`}>{tier.subtitle}</p>

                      <ul className={`mt-6 space-y-3 ${isEnterprise ? "enterprise-features" : ""}`}>
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm text-slate-200">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/get-started"
                        className={`mt-10 w-full rounded-xl px-4 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ease-in-out hover:scale-105 mt-auto ${tier.buttonClass}`}
                      >
                        {tier.buttonText}
                      </Link>
                    </div>
                  </motion.div>
                  );
                })}
              </motion.div>
            );
          })()}
        </div>
      </section>
    </div>
  );
};

const ServicesPage = () => {
  const serviceHighlights = [
    {
      id: "web-development",
      title: "High-Conversion Websites",
      description: "Premium websites engineered for speed, trust, and conversion. Perfect for Indian businesses competing in local search.",
      bullets: ["90+ speed score", "Conversion-first layouts", "Mobile-first UX"]
    },
    {
      id: "ai-automation",
      title: "AI Automation",
      description: "Automate follow-ups, lead scoring, and customer engagement with AI-driven workflows that reduce manual work.",
      bullets: ["Auto replies", "Lead qualification", "Smart routing"]
    },
    {
      id: "custom-crm",
      title: "Custom CRM",
      description: "Centralize leads, payments, and team activity in a CRM tailored to your process and local market needs.",
      bullets: ["Role-based dashboards", "Deal stages", "Pipeline clarity"]
    },
    {
      id: "lead-generation",
      title: "Lead Generation Funnels",
      description: "High-performing landing pages, WhatsApp funnels, and campaign-ready pages designed to convert intent fast.",
      bullets: ["WhatsApp CTAs", "Instant lead capture", "Retargeting ready"]
    },
    {
      id: "payments",
      title: "Payments + Integrations",
      description: "Razorpay, UPI, Stripe, and CRM integrations for smooth billing, automation, and reconciliation.",
      bullets: ["Auto invoicing", "Webhook automation", "Subscription logic"]
    },
    {
      id: "seo-systems",
      title: "SEO + Local Growth",
      description: "Search-optimized architecture, content, and technical SEO that compound visibility for local markets.",
      bullets: ["Local intent keywords", "Location pages", "Schema markup"]
    }
  ];

  const deliveryPhases = [
    {
      title: "Strategy + Research",
      details: "Audit, keyword mapping, and competitive positioning based on local intent and revenue goals."
    },
    {
      title: "Design + Build",
      details: "High-fidelity UI, conversion copy, and performance-first implementation."
    },
    {
      title: "Automation + Launch",
      details: "Integrations, analytics, and post-launch optimization for compounding results."
    }
  ];

  return (
    <div className="bg-[#0a0d12] text-white min-h-screen pt-24">
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.2),_transparent_60%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-emerald-200 uppercase px-4 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10">
            Services
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mt-6">
            High-end websites, automation, and SEO systems
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-emerald-200"> built for Indian growth brands.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
            We design the full revenue stack: websites, funnels, automation, and local SEO. Every service is engineered to convert traffic into leads and repeat revenue.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/get-started" className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition-all duration-300 ease-in-out hover:scale-105 shadow-[0_0_35px_rgba(16,185,129,0.4)]">
              Start a Custom Audit
            </Link>
            <Link to="/seo" className="px-8 py-4 rounded-full border border-white/10 text-slate-200 hover:text-white hover:border-white/30 transition-all duration-300 ease-in-out hover:scale-105">
              Explore SEO Systems
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceHighlights.map((service) => (
              <div key={service.title} id={service.id} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-white mb-3">{service.title}</h2>
                <p className="text-slate-400 leading-relaxed mb-6">{service.description}</p>
                <div className="space-y-3">
                  {service.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-300" />
                      <span className="leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How we deliver</h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              A clear execution model that moves fast, keeps quality high, and optimizes for revenue outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliveryPhases.map((phase) => (
              <div key={phase.title} className="rounded-3xl border border-white/10 bg-[#0a0d12]/70 p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{phase.title}</h3>
                <p className="text-slate-400 leading-relaxed">{phase.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready for a high-end build?</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Tell us about your business and we will deliver a conversion-first plan with SEO and automation included.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/get-started" className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition-all duration-300 ease-in-out hover:scale-105">
              Get a Custom Plan
            </Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-8 py-4 rounded-full border border-white/10 text-slate-200 hover:text-white hover:border-white/30 transition-all duration-300 ease-in-out"
            >
              Back to Top
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const SeoLanding = () => {
  const seoPillars = [
    {
      title: "Local Intent Targeting",
      description: "We map high-intent, location-based keywords to services so your business appears when buyers are ready."
    },
    {
      title: "Technical SEO",
      description: "Structured data, Core Web Vitals, and indexation hygiene that make Google trust your site faster."
    },
    {
      title: "Conversion UX",
      description: "We turn traffic into leads using clarity, strong CTAs, WhatsApp funnels, and form optimizations."
    },
    {
      title: "Compounding Content",
      description: "SEO landing pages, service pages, and case studies designed to rank and convert."
    }
  ];

  return (
    <div className="bg-[#0a0d12] text-white min-h-screen pt-24">
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.2),_transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-emerald-200 uppercase px-4 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10">
            SEO Systems
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mt-6">
            High-end SEO for premium websites that
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-emerald-200"> drives leads in India.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
            FutureQ blends technical SEO, conversion UX, and local intent targeting to help your agency or business rank, convert, and scale.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/get-started" className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition-all duration-300 ease-in-out hover:scale-105 shadow-[0_0_35px_rgba(16,185,129,0.4)]">
              Get an SEO Audit
            </Link>
            <Link to="/services" className="px-8 py-4 rounded-full border border-white/10 text-slate-200 hover:text-white hover:border-white/30 transition-all duration-300 ease-in-out hover:scale-105">
              View Full Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seoPillars.map((pillar) => (
              <div key={pillar.title} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
                <h2 className="text-2xl font-semibold text-white mb-3">{pillar.title}</h2>
                <p className="text-slate-400 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">FAQ</h2>
            <p className="text-slate-400 mt-4">Answers to common questions about SEO, local rankings, and performance.</p>
          </div>
          <div className="space-y-6">
            {seoFaqs.map((faq) => (
              <div key={faq.question} className="rounded-3xl border border-white/10 bg-[#0a0d12]/70 p-6">
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <p className="text-slate-400 leading-relaxed mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const GetStartedFlow = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: "",
    industry: "",
    challenges: "",
    integrations: "",
    budget: "",
    name: "",
    phone: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => setStep((s) => Math.min(s + 1, 5));
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return Boolean(formData.businessName.trim() && formData.industry.trim());
      case 2:
        return Boolean(formData.challenges.trim());
      case 3:
        return true;
      case 4:
        return Boolean(formData.budget.trim());
      case 5:
        return Boolean(formData.name.trim() && formData.email.trim());
      default:
        return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://hook.eu1.make.com/9ar8qpzvl4bdf5fjpjnukz9jcx84442s", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          source: "FutureQ Custom Audit Form"
        })
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      navigate("/thank-you");
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  return (
    <div className="min-h-screen bg-[#0a0d12] flex flex-col justify-center relative py-20 px-4">
      <div className="max-w-2xl mx-auto w-full relative z-10">
        
        {/* Progress */}
        <div className="mb-12">
          <Link to="/" className="text-slate-400 hover:text-white text-sm flex items-center gap-1 w-fit mb-8">
            &larr; Back to Home
          </Link>
          <div className="flex gap-2 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              className="bg-emerald-400 h-full rounded-full" 
              initial={{ width: "20%" }}
              animate={{ width: `${(step / 5) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="mt-4 text-xs font-medium text-slate-500 uppercase tracking-widest">Step {step} of 5</div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden min-h-[400px]">
          <AnimatePresence mode="wait" custom={1}>
            
            {step === 1 && (
              <motion.div key="step1" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h2 className="text-3xl font-bold text-white mb-6">Welcome to FutureQ! <br/><span className="text-xl text-slate-400 font-normal">Tell us a bit about your business.</span></h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Business Name</label>
                    <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} className="w-full bg-[#0a0d12]/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all" placeholder="Acme Corp" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Industry</label>
                    <input type="text" name="industry" value={formData.industry} onChange={handleChange} className="w-full bg-[#0a0d12]/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all" placeholder="e.g., Real Estate, EdTech, Logistics" />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h2 className="text-3xl font-bold text-white mb-6">What are the primary challenges you're trying to solve?</h2>
                <textarea name="challenges" value={formData.challenges} onChange={handleChange} rows={5} className="w-full bg-[#0a0d12]/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all resize-none" placeholder="e.g., Manual workflows, slow payments, messy data, generic website..." />
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h2 className="text-3xl font-bold text-white mb-6">Any existing systems to integrate with?</h2>
                <p className="text-slate-400 mb-6 text-sm">Do you currently use Salesforce, Razorpay, a legacy CRM, or proprietary software we need to connect to?</p>
                <textarea name="integrations" value={formData.integrations} onChange={handleChange} rows={4} className="w-full bg-[#0a0d12]/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all resize-none" placeholder="Leave blank if none." />
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h2 className="text-3xl font-bold text-white mb-6">Perfect. What is your estimated project budget?</h2>
                <select name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-[#0a0d12]/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all appearance-none">
                  <option value="" disabled>Select Range</option>
                  <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
                  <option value="₹10,000 - ₹15,000">₹10,000 - ₹15,000</option>
                  <option value="₹15,000+">₹15,000+</option>
                  <option value="Custom">Custom / Not Sure</option>
                </select>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div key="step5" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h2 className="text-3xl font-bold text-white mb-6">And finally, how can we reach you?</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-[#0a0d12]/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all" required/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-[#0a0d12]/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all" required/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Phone Number (Optional)</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-[#0a0d12]/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute bottom-8 left-8 right-8 flex justify-between">
            {step > 1 ? (
              <button onClick={handleBack} className="px-6 py-2.5 rounded-full text-slate-400 hover:text-white transition font-medium">
                Back
              </button>
            ) : <div/>}

            {step < 5 ? (
              <button
                onClick={handleNext}
                disabled={!isStepValid()}
                className="px-8 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition font-semibold shadow-lg shadow-emerald-500/20 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!isStepValid() || isSubmitting}
                className="px-8 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 transition font-semibold shadow-lg shadow-emerald-500/20 flex items-center gap-2"
              >
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-[#0a0d12] text-white flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none" />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl mx-auto text-center relative z-10"
      >
        <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-8 text-emerald-300">
           <CheckCircle2 size={40} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Thank You for Choosing FutureQ.</h1>
        <p className="text-xl text-slate-400 mb-10 leading-relaxed">
          We have received your project details and are reviewing them now. A member of our engineering team will reach out to you within the next 1-2 business days to discuss the next steps.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition font-medium w-full sm:w-auto">
            Go Back to Home
          </Link>
          <a href="#services" className="px-8 py-3 rounded-full border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10 transition font-medium w-full sm:w-auto">
            Explore Our Latest Research
          </a>
        </div>
      </motion.div>
    </div>
  );
};

// --- App Root ---

const SeoManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const origin = window.location.origin;
    const url = `${origin}${pathname}`;

    const seoConfig = {
      "/": {
        title: "FutureQ | Conversion-First Websites & Automation",
        description: "FutureQ builds high-conversion websites, automation systems, and AI workflows for fast-growing Indian businesses.",
        keywords: "agency website, web development, automation, AI workflows, local SEO, India",
        robots: "index, follow",
        ogType: "website",
        serviceType: "Web development, automation, and SEO"
      },
      "/services": {
        title: "Services | FutureQ Web, SEO, Automation",
        description: "Explore high-end websites, automation, CRM, and SEO services designed to grow local Indian businesses.",
        keywords: "website services, SEO agency, CRM, automation, lead generation",
        robots: "index, follow",
        ogType: "website",
        serviceType: "Website design, automation, CRM, and SEO"
      },
      "/seo": {
        title: "SEO Systems | FutureQ Local SEO & Growth",
        description: "High-end SEO for Indian businesses: technical SEO, local intent targeting, and conversion-first landing pages.",
        keywords: "SEO services, local SEO India, technical SEO, conversion optimization",
        robots: "index, follow",
        ogType: "website",
        serviceType: "SEO and conversion optimization",
        includeFaq: true
      },
      "/get-started": {
        title: "Get Started | FutureQ Custom Audit",
        description: "Share your project details to receive a custom audit and build plan.",
        robots: "noindex, nofollow",
        ogType: "website"
      },
      "/thank-you": {
        title: "Thank You | FutureQ",
        description: "We received your details and will follow up shortly.",
        robots: "noindex, nofollow",
        ogType: "website"
      }
    };

    const page = seoConfig[pathname] || seoConfig["/"];
    const ogImage = `${origin}/icons.svg`;

    document.title = page.title;
    upsertMeta({ name: "description", content: page.description });
    upsertMeta({ name: "robots", content: page.robots });
    if (page.keywords) {
      upsertMeta({ name: "keywords", content: page.keywords });
    }
    upsertMeta({ property: "og:title", content: page.title });
    upsertMeta({ property: "og:description", content: page.description });
    upsertMeta({ property: "og:type", content: page.ogType });
    upsertMeta({ property: "og:url", content: url });
    upsertMeta({ property: "og:image", content: ogImage });
    upsertMeta({ name: "twitter:title", content: page.title });
    upsertMeta({ name: "twitter:description", content: page.description });
    upsertMeta({ name: "twitter:image", content: ogImage });
    upsertMeta({ name: "twitter:card", content: "summary_large_image" });
    upsertLink({ rel: "canonical", href: url });

    const orgId = `${origin}/#organization`;
    const siteId = `${origin}/#website`;
    const pageId = `${url}#webpage`;

    const graph = [
      {
        "@type": "Organization",
        "@id": orgId,
        name: "FutureQ",
        url: origin,
        logo: ogImage,
        email: "saurabh.futureq@gmail.com"
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        name: "FutureQ",
        url: origin,
        publisher: { "@id": orgId }
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        name: page.title,
        url,
        description: page.description,
        isPartOf: { "@id": siteId }
      }
    ];

    if (page.serviceType) {
      graph.push({
        "@type": "Service",
        serviceType: page.serviceType,
        provider: { "@id": orgId }
      });
    }

    if (page.includeFaq) {
      graph.push({
        "@type": "FAQPage",
        mainEntity: seoFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      });
    }

    upsertJsonLd({ "@context": "https://schema.org", "@graph": graph });
  }, [pathname]);

  return null;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const Layout = ({ children }) => {
  const location = useLocation();
  const isFormOrThanks = location.pathname === "/get-started" || location.pathname === "/thank-you";
  
  return (
    <>
      <ScrollToTop />
      <SeoManager />
      {!isFormOrThanks && <Navbar />}
      <main className="min-h-screen">{children}</main>
      {!isFormOrThanks && <Footer />}
    </>
  );
};

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isBookingOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isBookingOpen]);

  return (
    <Router>
      <BookingContext.Provider value={{ openBooking }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/seo" element={<SeoLanding />} />
            <Route path="/get-started" element={<GetStartedFlow />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </Layout>
        <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
      </BookingContext.Provider>
    </Router>
  );
}