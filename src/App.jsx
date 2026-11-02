import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import futureqLogo from "./assets/futureq.png";
import SEO from "./components/SEO";

// ─────────────────────────────────────────────────────────────────────────────
// KHAN ACADEMY + FACEBOOK HYBRID: FUTURE Q COMPANY DIRECTORY
// ─────────────────────────────────────────────────────────────────────────────

function KhanAcademyFacebookCompany() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("saurabh.futureq@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] text-[#1e293b] font-['Inter',-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif] text-[14.5px] leading-relaxed">
      <SEO
        title="Future Q Technologies | The Khan Academy for Indian Problem Solvers"
        description="Future Q is an Indian education-technology company founded in Bokaro Steel City. Creators of Focus Mode Player (focusmode.online) and CoachingWala (cwwala.vercel.app)."
        keywords="Future Q, Future Q Technologies, Focus Mode Player, CoachingWala, Khan Academy India, Bokaro Steel City, student productivity, coaching center ERP"
      />

      {/* ── TOP NAV BAR (Khan Academy + Facebook Friendly Blue) ─────────────── */}
      <header className="kf-navbar text-white py-2.5 px-4 shadow-sm sticky top-0 z-30">
        <div className="max-w-[1040px] mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <img
              src={futureqLogo}
              alt="Future Q Logo"
              className="w-8 h-8 rounded bg-white p-0.5 object-contain"
            />
            <div className="flex items-center gap-2">
              <span className="text-white font-extrabold text-[20px] tracking-tight">
                Future Q
              </span>
              <span className="bg-[#2a4d80] text-[#dbeafe] text-[11px] font-semibold px-2 py-0.5 rounded">
                Company Portal
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-4 text-[13.5px] font-medium text-white">
            <a href="#about" className="text-white hover:text-[#93c5fd] transition-colors">
              About
            </a>
            <a href="#products" className="text-white hover:text-[#93c5fd] transition-colors">
              Products
            </a>
            <a href="#mission" className="text-white hover:text-[#93c5fd] transition-colors">
              Mission
            </a>
            <a href="#founders" className="text-white hover:text-[#93c5fd] transition-colors">
              Founders
            </a>
            <a href="#contact" className="text-white hover:text-[#93c5fd] transition-colors">
              Contact
            </a>
            <span className="text-[#64748b]">|</span>
            <button
              onClick={handleCopyEmail}
              className="bg-[#1865f2] hover:bg-[#1557d0] text-white text-[12.5px] font-semibold px-3 py-1 rounded transition-colors cursor-pointer"
            >
              {copiedEmail ? "✓ Email Copied" : "Copy Founder Email"}
            </button>
          </nav>
        </div>
      </header>

      {/* ── MAIN CONTENT CONTAINER (Spacious, Large, Readable) ──────────────── */}
      <main className="max-w-[1040px] mx-auto p-4 sm:p-6 space-y-4">
        {/* Khan Academy Mission Alert Ribbon */}
        <div className="bg-[#ffffff] border border-[#cbd5e1] rounded-lg p-4 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#10b981] shrink-0" />
            <div>
              <strong className="text-[#0f172a] text-[15px]">
                A mission-driven education company from Bokaro Steel City, India.
              </strong>
              <div className="text-[13px] text-[#64748b] mt-0.5">
                Founded by Saurabh Raj & Rishav Kumar Srivastava • 450+ active ecosystem learners • Y Combinator applicant
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0 self-end md:self-auto">
            <a
              href="https://focusmode.online"
              target="_blank"
              rel="noopener noreferrer"
              className="kf-button text-[12.5px] py-1.5 px-3"
            >
              focusmode.online ↗
            </a>
            <a
              href="https://cwwala.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="kf-button-green text-[12.5px] py-1.5 px-3"
            >
              cwwala.vercel.app ↗
            </a>
          </div>
        </div>

        {/* ── 2-COLUMN LAYOUT: Sidebar (Profile & Info) + Main Content ───────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* ─────────────────────────────────────────────────────────────────
              LEFT COLUMN: Company Profile, Key Stats, Quick Directory
          ───────────────────────────────────────────────────────────────── */}
          <aside className="lg:col-span-4 space-y-4">
            {/* Box 1: Company Profile Card */}
            <div className="kf-panel">
              <div className="kf-panel-header">
                <span>Future Q Technologies</span>
                <span className="text-[11px] font-normal text-[#93c5fd]">Directory</span>
              </div>

              <div className="p-4 text-center bg-white">
                <div className="border-2 border-[#1b365d] p-2 bg-[#f8fafc] rounded-lg inline-block mb-3 shadow-xs">
                  <img
                    src={futureqLogo}
                    alt="Future Q Logo"
                    className="w-36 h-36 object-contain mx-auto"
                  />
                </div>

                <h2 className="text-[18px] font-bold text-[#0f172a]">Future Q</h2>
                <div className="text-[13px] font-medium text-[#1865f2] mt-0.5">
                  "Building real problem solvers, not rote memorizers."
                </div>
                <p className="text-[12.5px] text-[#64748b] mt-2">
                  Operating out of a student hostel room in Bokaro Steel City, Jharkhand.
                </p>

                <div className="mt-4 pt-3 border-t border-[#e2e8f0]">
                  <a
                    href="mailto:saurabh.futureq@gmail.com"
                    className="kf-button text-[13px] py-2 px-3 w-full text-center flex items-center justify-center gap-1.5"
                  >
                    ✉ Email: saurabh.futureq@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Box 2: Verified Company Stats Table */}
            <div className="kf-panel">
              <div className="kf-panel-header">
                <span>Company Overview</span>
              </div>
              <table className="kf-table">
                <tbody>
                  <tr>
                    <td className="label">Full Name:</td>
                    <td className="value font-semibold text-[#1865f2]">
                      Future Q Technologies
                    </td>
                  </tr>
                  <tr>
                    <td className="label">Headquarters:</td>
                    <td className="value">Bokaro Steel City, India</td>
                  </tr>
                  <tr>
                    <td className="label">Founders:</td>
                    <td className="value font-medium">
                      Saurabh Raj & Rishav Kumar Srivastava
                      <div className="text-[12px] text-[#64748b]">
                        Saurabh Raj (Founder) & Rishav Kumar Srivastava (Co-Founder)
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="label">Active Users:</td>
                    <td className="value font-bold text-[#0f172a]">
                      450+ Active Learners
                    </td>
                  </tr>
                  <tr>
                    <td className="label">Live Products:</td>
                    <td className="value">
                      <div className="space-y-1">
                        <div>
                          <a
                            href="https://focusmode.online"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-[#1865f2]"
                          >
                            ↳ Focus Mode Player ↗
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://cwwala.vercel.app"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-[#10b981]"
                          >
                            ↳ CoachingWala ERP ↗
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="label">Engineering:</td>
                    <td className="value font-semibold text-[#10b981]">
                      100% In-House (0% Outsourced)
                    </td>
                  </tr>
                  <tr>
                    <td className="label">Tech Stack:</td>
                    <td className="value text-[12.5px] font-mono text-[#334155]">
                      Next.js, React, Tailwind, Supabase, Firebase
                    </td>
                  </tr>
                  <tr>
                    <td className="label">Contact:</td>
                    <td className="value text-[12.5px] break-all">
                      <a href="mailto:saurabh.futureq@gmail.com" className="text-[#1865f2]">
                        saurabh.futureq@gmail.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Box 3: Quick Navigation */}
            <div className="kf-panel">
              <div className="kf-panel-header">
                <span>Directory Index</span>
              </div>
              <div className="p-3.5 space-y-2 text-[13.5px]">
                <div>
                  <a href="#about" className="font-semibold text-[#1865f2] hover:underline">
                    • About Future Q & Vision
                  </a>
                </div>
                <div>
                  <a href="#products" className="font-semibold text-[#1865f2] hover:underline">
                    • Products Suite (Focus Mode & CoachingWala)
                  </a>
                </div>
                <div>
                  <a href="#mission" className="font-semibold text-[#1865f2] hover:underline">
                    • Mission & Khan Academy Philosophy
                  </a>
                </div>
                <div>
                  <a href="#comparison" className="font-semibold text-[#1865f2] hover:underline">
                    • Legacy Giants (PW / Unacademy) vs Future Q
                  </a>
                </div>
                <div>
                  <a href="#founders" className="font-semibold text-[#1865f2] hover:underline">
                    • Letter from the Bokaro Hostel Room
                  </a>
                </div>
                <div>
                  <a href="#contact" className="font-semibold text-[#1865f2] hover:underline">
                    • Contact via Email
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* ─────────────────────────────────────────────────────────────────
              RIGHT COLUMN: Main Content Feed (Products, Mission, Story)
          ───────────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-8 space-y-4">
            {/* ── Box 1: Welcome & About ──────────────────────────────────── */}
            <section id="about" className="kf-panel">
              <div className="kf-panel-header">
                <span>Welcome to Future Q</span>
                <span className="text-[12px] font-normal text-[#93c5fd]">Vision 2026</span>
              </div>

              <div className="p-5 bg-white space-y-3">
                <h1 className="text-[24px] sm:text-[28px] font-extrabold text-[#0f172a] leading-tight">
                  We Don't Build Rote Memorizers.{" "}
                  <span className="text-[#1865f2]">We Build Real Problem Solvers.</span>
                </h1>

                <p className="text-[15px] text-[#334155] leading-relaxed">
                  <strong>Future Q</strong> is an Indian education-technology company created by two
                  brothers, <strong>Saurabh Raj</strong> and <strong>Rishav Kumar Srivastava</strong>, living and studying in a shared hostel room in Bokaro Steel City. We are
                  solving the core bottleneck of student life by replacing the passive,
                  rote-memorization model with active learning workspaces and digital tools for
                  learners and coaching centers.
                </p>

                <p className="text-[14px] text-[#475569] leading-relaxed">
                  Millions of students preparing for competitive exams like <strong>JEE, NEET, and SSC</strong>{" "}
                  are suffocating under 2-hour passive video lectures and heavy 30-question PDF
                  dumps. Future Q is building software that fosters deep focus, active practice, and
                  streamlined educational administration.
                </p>

                {/* Live Products Banner */}
                <div className="mt-4 p-4 bg-[#f8fafc] border border-[#cbd5e1] rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <span className="font-bold text-[#0f172a] text-[14.5px]">
                      Explore Our Live Products:
                    </span>
                    <div className="text-[13px] text-[#64748b]">
                      Actively deployed and used by 450+ students across India.
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <a
                      href="https://focusmode.online"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="kf-button text-[13px] py-2 px-3.5"
                    >
                      focusmode.online ↗
                    </a>
                    <a
                      href="https://cwwala.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="kf-button-green text-[13px] py-2 px-3.5"
                    >
                      cwwala.vercel.app ↗
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Box 2: Products by Future Q (Prominent Product Showcase) ── */}
            <section id="products" className="kf-panel">
              <div className="kf-panel-header">
                <span>Products by Future Q</span>
                <span className="text-[12px] font-normal text-[#93c5fd]">2 Deployed Platforms</span>
              </div>

              <div className="p-5 bg-white space-y-6">
                {/* Product 1: Focus Mode Player */}
                <div className="border border-[#cbd5e1] rounded-lg p-5 bg-[#fafbfc] hover:border-[#1865f2] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-3 border-b border-[#e2e8f0] gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[18px] font-bold text-[#0f172a]">
                          Focus Mode Player
                        </span>
                        <span className="bg-[#dcfce7] text-[#166534] text-[11px] font-bold px-2 py-0.5 rounded">
                          Live Web App • Free
                        </span>
                      </div>
                      <div className="text-[13px] text-[#1865f2] font-semibold mt-0.5">
                        Distraction-Free Student Productivity Workspace
                      </div>
                    </div>
                    <a
                      href="https://focusmode.online"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="kf-button text-[13px] py-2 px-4 self-start sm:self-auto"
                    >
                      Launch focusmode.online ↗
                    </a>
                  </div>

                  <table className="kf-table mb-3">
                    <tbody>
                      <tr>
                        <td className="label">Purpose:</td>
                        <td className="value font-medium">
                          Protecting deep cognitive flow for competitive exam aspirants (JEE, NEET, SSC, Boards).
                        </td>
                      </tr>
                      <tr>
                        <td className="label">The Problem:</td>
                        <td className="value">
                          Students attempting to study online are constantly hijacked by YouTube recommendation
                          algorithms, comment sections, and digital rabbit holes.
                        </td>
                      </tr>
                      <tr>
                        <td className="label">Key Features:</td>
                        <td className="value">
                          <ul className="space-y-1 list-disc list-inside text-[#334155]">
                            <li>Zero-distraction study video player with recommendation feeds stripped out</li>
                            <li>Integrated Pomodoro interval timer with custom presets for deep study sessions</li>
                            <li>Curated ambient focus soundscapes, binaural beats, and lofi audio channels</li>
                            <li>Lightning-fast, responsive web interface with clean dark mode</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="label">Tech Stack:</td>
                        <td className="value font-mono text-[12.5px] text-[#334155]">
                          Next.js, React, Tailwind CSS, Firebase
                        </td>
                      </tr>
                      <tr>
                        <td className="label">Live URL:</td>
                        <td className="value">
                          <a
                            href="https://focusmode.online"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#1865f2] font-semibold hover:underline"
                          >
                            https://focusmode.online
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Product 2: CoachingWala */}
                <div className="border border-[#cbd5e1] rounded-lg p-5 bg-[#fafbfc] hover:border-[#10b981] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-3 border-b border-[#e2e8f0] gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[18px] font-bold text-[#0f172a]">
                          CoachingWala
                        </span>
                        <span className="bg-[#dbeafe] text-[#1e40af] text-[11px] font-bold px-2 py-0.5 rounded">
                          Deployed Cloud ERP • Piloted
                        </span>
                      </div>
                      <div className="text-[13px] text-[#10b981] font-semibold mt-0.5">
                        Operating System for Offline Coaching Centers
                      </div>
                    </div>
                    <a
                      href="https://cwwala.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="kf-button-green text-[13px] py-2 px-4 self-start sm:self-auto"
                    >
                      Launch cwwala.vercel.app ↗
                    </a>
                  </div>

                  <table className="kf-table mb-3">
                    <tbody>
                      <tr>
                        <td className="label">Purpose:</td>
                        <td className="value font-medium">
                          Modernizing the daily operations, fee management, and attendance of coaching institutes.
                        </td>
                      </tr>
                      <tr>
                        <td className="label">The Problem:</td>
                        <td className="value">
                          Local coaching centers in India rely on manual paper registers for fee ledgers,
                          student attendance, and batch records, creating immense operational friction.
                        </td>
                      </tr>
                      <tr>
                        <td className="label">Key Features:</td>
                        <td className="value">
                          <ul className="space-y-1 list-disc list-inside text-[#334155]">
                            <li>Student digital enrollment, batch allocation, and profile directories</li>
                            <li>Automated student fee ledger with one-click digital receipt generation</li>
                            <li>Daily digital attendance tracking ready for parent SMS notifications</li>
                            <li>Director analytics dashboard tracking fee collection and batch health</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="label">Door-to-Door Validation:</td>
                        <td className="value font-semibold text-[#0f172a]">
                          Pitched and tested door-to-door with local coaching directors in Bokaro Steel City.
                        </td>
                      </tr>
                      <tr>
                        <td className="label">Tech Stack:</td>
                        <td className="value font-mono text-[12.5px] text-[#334155]">
                          Next.js, React, Tailwind CSS, Supabase, PostgreSQL
                        </td>
                      </tr>
                      <tr>
                        <td className="label">Live URL:</td>
                        <td className="value">
                          <a
                            href="https://cwwala.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#10b981] font-semibold hover:underline"
                          >
                            https://cwwala.vercel.app
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* ── Box 3: The Mission & Khan Academy Philosophy ────────────── */}
            <section id="mission" className="kf-panel">
              <div className="kf-panel-header">
                <span>The Mission & Philosophy</span>
                <span className="text-[12px] font-normal text-[#93c5fd]">Why We Exist</span>
              </div>

              <div className="p-5 bg-white space-y-4">
                <h3 className="text-[20px] font-bold text-[#0f172a]">
                  Digitizing a Broken Classroom Does Not Fix Education.
                </h3>

                <p className="text-[15px] text-[#334155] leading-relaxed">
                  India's legacy ed-tech giants (PhysicsWallah, Unacademy, and BYJU'S) simply took an
                  outdated, passive broadcasting model and placed it onto a 6-inch phone screen. Students
                  burn out watching 2-hour lectures with zero active recall, drowning under 30-question
                  PDF dumps.
                </p>

                <div className="p-4 bg-[#eff6ff] border-l-4 border-l-[#1865f2] rounded-r-lg text-[#1e3a8a] text-[14px]">
                  <strong>Our North Star:</strong> Real conceptual mastery does not happen by watching
                  another 2-hour lecture on a phone. It happens when students solve, explain to peers,
                  and build real projects. Future Q aims to be India's answer to Khan Academy + modern
                  collaborative workspace.
                </div>

                {/* 3 Core Educational Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                  <div className="border border-[#cbd5e1] p-3.5 rounded-lg bg-[#f8fafc]">
                    <div className="font-bold text-[#1865f2] text-[14px]">
                      1. Micro-Chunked Active Practice
                    </div>
                    <p className="text-[13px] text-[#475569] mt-1.5 leading-relaxed">
                      Replacing 30-question PDF dumps with bite-sized, 4-question active bursts that provide
                      instant feedback and mastery clarity.
                    </p>
                  </div>

                  <div className="border border-[#cbd5e1] p-3.5 rounded-lg bg-[#f8fafc]">
                    <div className="font-bold text-[#1865f2] text-[14px]">
                      2. Peer-to-Peer Teaching
                    </div>
                    <p className="text-[13px] text-[#475569] mt-1.5 leading-relaxed">
                      Empowering students to teach those one class junior to them. Teaching cements
                      conceptual mastery while allowing students to earn income.
                    </p>
                  </div>

                  <div className="border border-[#cbd5e1] p-3.5 rounded-lg bg-[#f8fafc]">
                    <div className="font-bold text-[#1865f2] text-[14px]">
                      3. Targeted Industry Mentorship
                    </div>
                    <p className="text-[13px] text-[#475569] mt-1.5 leading-relaxed">
                      Pairing students as early as 7th grade with experienced software engineers and
                      doctors to build real-world projects rather than aimlessly cramming.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Box 4: Market Comparison Table ──────────────────────────── */}
            <section id="comparison" className="kf-panel">
              <div className="kf-panel-header">
                <span>Market Comparison</span>
                <span className="text-[12px] font-normal text-[#93c5fd]">Legacy Giants vs Future Q</span>
              </div>

              <div className="p-5 bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-[#cbd5e1] text-[13.5px]">
                    <thead>
                      <tr className="bg-[#1b365d] text-white">
                        <th className="border border-[#cbd5e1] p-2.5 text-left font-bold w-1/4">
                          Educational Dimension
                        </th>
                        <th className="border border-[#cbd5e1] p-2.5 text-left font-bold text-[#fca5a5] w-3/8">
                          Legacy Ed-Tech (PW / Unacademy / BYJU'S)
                        </th>
                        <th className="border border-[#cbd5e1] p-2.5 text-left font-bold text-[#86efac] w-3/8 bg-[#152e52]">
                          The Future Q Model
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-[#cbd5e1] p-2.5 font-semibold text-[#0f172a]">
                          Learning Delivery
                        </td>
                        <td className="border border-[#cbd5e1] p-2.5 text-[#64748b]">
                          Passive 2-hour long broadcast lectures
                        </td>
                        <td className="border border-[#cbd5e1] p-2.5 font-semibold text-[#15803d] bg-[#f0fdf4]">
                          Micro-chunked 4-question active loops with instant feedback
                        </td>
                      </tr>
                      <tr className="bg-[#f8fafc]">
                        <td className="border border-[#cbd5e1] p-2.5 font-semibold text-[#0f172a]">
                          Assignment Format
                        </td>
                        <td className="border border-[#cbd5e1] p-2.5 text-[#64748b]">
                          Overwhelming 20 to 50 question PDF batch dumps
                        </td>
                        <td className="border border-[#cbd5e1] p-2.5 font-semibold text-[#15803d] bg-[#f0fdf4]">
                          Gamified, bite-sized mastery bursts with progress bars
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-[#cbd5e1] p-2.5 font-semibold text-[#0f172a]">
                          Teaching Force
                        </td>
                        <td className="border border-[#cbd5e1] p-2.5 text-[#64748b]">
                          Celebrity teachers broadcasting to 10,000+ passive students
                        </td>
                        <td className="border border-[#cbd5e1] p-2.5 font-semibold text-[#15803d] bg-[#f0fdf4]">
                          Scalable peer-to-peer tutoring marketplace
                        </td>
                      </tr>
                      <tr className="bg-[#f8fafc]">
                        <td className="border border-[#cbd5e1] p-2.5 font-semibold text-[#0f172a]">
                          Student Economics
                        </td>
                        <td className="border border-[#cbd5e1] p-2.5 text-[#64748b]">
                          Pure expense; students have zero earning opportunity
                        </td>
                        <td className="border border-[#cbd5e1] p-2.5 font-semibold text-[#15803d] bg-[#f0fdf4]">
                          Students earn income by tutoring juniors
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-[#cbd5e1] p-2.5 font-semibold text-[#0f172a]">
                          Ultimate Goal
                        </td>
                        <td className="border border-[#cbd5e1] p-2.5 text-[#64748b]">
                          Rote memorization to clear entrance test day
                        </td>
                        <td className="border border-[#cbd5e1] p-2.5 font-semibold text-[#15803d] bg-[#f0fdf4]">
                          Building genuine engineers, doctors, and real problem solvers
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* ── Box 5: Founders Story (Letter from Bokaro Hostel) ────────── */}
            <section id="founders" className="kf-panel">
              <div className="kf-panel-header">
                <span>The Founders' Story</span>
                <span className="text-[12px] font-normal text-[#93c5fd]">Bokaro Steel City</span>
              </div>

              <div className="p-5 bg-white space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-[#1b365d] text-white flex items-center justify-center font-bold text-[14px] shrink-0">
                    SR & RS
                  </div>
                  <div>
                    <h4 className="text-[18px] font-bold text-[#0f172a]">
                      Saurabh Raj & Rishav Kumar Srivastava
                    </h4>
                    <div className="text-[13px] text-[#1865f2] font-medium">
                      Co-Founders • Saurabh Raj (Founder & Lead Architect) & Rishav Kumar Srivastava (Co-Founder)
                    </div>
                    <div className="text-[12px] text-[#64748b]">
                      Class 12 Science Students • Full-Stack Team • Bokaro Steel City, India
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#e2e8f0] pt-4 text-[14.5px] text-[#334155] space-y-3 leading-relaxed">
                  <p>
                    "We have known each other for his entire life, as Rishav Kumar Srivastava is my younger brother. We grew
                    up together, currently share a hostel room in Bokaro Steel City, and have a long
                    track record of collaborating on creative and technical projects side-by-side, including running our YouTube channel."
                  </p>
                  <p>
                    "While we are students during the day preparing for competitive exams, we treat
                    this startup as a full-time obsession. Our version of 'full-time' means coding
                    late into the night from our shared bunk beds, and pounding the pavement during
                    the day to sit down with real local coaching directors and educators."
                  </p>
                  <p>
                    "We built <strong>Focus Mode Player</strong> (focusmode.online) because our fellow
                    hostel students were helpless against algorithmic digital distraction. We built{" "}
                    <strong>CoachingWala</strong> (cwwala.vercel.app) by walking door-to-door pitching
                    local coaching directors to understand their daily operational bottlenecks. Every
                    single line of code, database schema, and design has been built in-house. We do
                    not outsource our engineering."
                  </p>
                </div>
              </div>
            </section>

            {/* ── Box 6: Contact Founders Directly (Email Only) ─────────── */}
            <section id="contact" className="kf-panel">
              <div className="kf-panel-header">
                <span>Contact Future Q Founders</span>
                <span className="text-[12px] font-normal text-[#93c5fd]">Direct Email</span>
              </div>

              <div className="p-6 bg-white space-y-4">
                <div>
                  <h3 className="text-[20px] font-bold text-[#0f172a] mb-1">
                    Direct Founder Contact
                  </h3>
                  <p className="text-[15px] text-[#475569] leading-relaxed">
                    For all inquiries regarding Focus Mode Player, CoachingWala ERP pilots, collaborations, or general questions, reach out to Saurabh Raj and Rishav Kumar Srivastava directly:
                  </p>
                </div>

                <div className="p-5 bg-[#f8fafc] border border-[#cbd5e1] rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-[12px] font-bold uppercase tracking-wider text-[#64748b]">
                      Founder & Lead Developer Email
                    </div>
                    <a
                      href="mailto:saurabh.futureq@gmail.com"
                      className="text-[20px] font-bold text-[#1865f2] hover:underline break-all block mt-0.5"
                    >
                      saurabh.futureq@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={handleCopyEmail}
                      className="kf-button text-[14px] py-2.5 px-5 cursor-pointer"
                    >
                      {copiedEmail ? "✓ Copied to Clipboard!" : "Copy Email"}
                    </button>
                    <a
                      href="mailto:saurabh.futureq@gmail.com"
                      className="kf-button-secondary text-[14px] py-2.5 px-5"
                    >
                      Send Email ↗
                    </a>
                  </div>
                </div>

                <div className="text-[13.5px] text-[#64748b]">
                  📍 Operating from our hostel room in Bokaro Steel City, Jharkhand, India. We read and reply to all emails personally.
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* ── FOOTER ──────────────────────────────────────────────────────── */}
        <footer className="mt-8 pt-5 border-t border-[#cbd5e1] text-center text-[#64748b] text-[13px] space-y-2 pb-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#about" className="text-[#1865f2] hover:underline">
              About Future Q
            </a>
            <span>•</span>
            <a href="#products" className="text-[#1865f2] hover:underline">
              Products
            </a>
            <span>•</span>
            <a href="https://focusmode.online" target="_blank" rel="noreferrer" className="text-[#1865f2] hover:underline">
              Focus Mode Player
            </a>
            <span>•</span>
            <a href="https://cwwala.vercel.app" target="_blank" rel="noreferrer" className="text-[#10b981] hover:underline">
              CoachingWala ERP
            </a>
            <span>•</span>
            <a href="#mission" className="text-[#1865f2] hover:underline">
              Mission
            </a>
            <span>•</span>
            <a href="#founders" className="text-[#1865f2] hover:underline">
              Founders
            </a>
            <span>•</span>
            <a href="#contact" className="text-[#1865f2] hover:underline">
              Contact
            </a>
          </div>
          <div>
            Future Q Technologies © 2026. A Khan Academy & Facebook inspired directory for Indian problem solvers.
          </div>
          <div className="text-[12px] text-[#94a3b8]">
            Founded & operating in Bokaro Steel City, Jharkhand, India.
          </div>
        </footer>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<KhanAcademyFacebookCompany />} />
      </Routes>
    </Router>
  );
}