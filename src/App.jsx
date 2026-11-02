import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import futureqLogo from "./assets/futureq.png";
import SEO from "./components/SEO";

// ─────────────────────────────────────────────────────────────────────────────
// 2004 "THE FACEBOOK" INSPIRED FUTURE Q COMPANY WEBSITE
// ─────────────────────────────────────────────────────────────────────────────

function Facebook2004Company() {
  const [activeTab, setActiveTab] = useState("all");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Student",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("saurabh.futureq@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-[#333333] font-['Lucida_Grande',Tahoma,Verdana,Arial,sans-serif] text-[11px] leading-[1.45]">
      <SEO
        title="Future Q | [ The Future Q Company Directory ]"
        description="Future Q Technologies is an Indian ed-tech software company founded in Bokaro Steel City. Creators of Focus Mode Player (focusmode.online) and CoachingWala (cwwala.vercel.app)."
        keywords="Future Q, Future Q Technologies, Focus Mode Player, CoachingWala, edtech India, Bokaro Steel City, student productivity, coaching ERP"
      />

      {/* ── 2004 TOP NAVBAR (The Facebook Blue Bar) ─────────────────────────── */}
      <header className="bg-[#3b5998] border-b border-[#284074] text-white py-1 px-4">
        <div className="max-w-[960px] mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-[18px] tracking-tight">
              [ <span className="font-extrabold">Future Q</span> ]
            </span>
            <span className="text-[#d8dfea] text-[10px] hidden sm:inline">
              [ an education technology directory ]
            </span>
          </div>

          {/* Navigation Links in [ brackets ] */}
          <nav className="flex items-center gap-2 text-[10px] text-white">
            <a href="#about" className="text-white hover:underline">
              [ about ]
            </a>
            <a href="#products" className="text-white hover:underline">
              [ products ]
            </a>
            <a href="#mission" className="text-white hover:underline">
              [ mission ]
            </a>
            <a href="#story" className="text-white hover:underline">
              [ founders ]
            </a>
            <a href="#contact" className="text-white hover:underline">
              [ contact ]
            </a>
            <span className="text-[#b4c3dc]">|</span>
            <button
              onClick={handleCopyEmail}
              className="bg-[#284074] hover:bg-[#1d2f57] text-white px-2 py-0.5 border border-[#1d2f57] cursor-pointer"
            >
              {copiedEmail ? "email copied!" : "saurabh.futureq@gmail.com"}
            </button>
          </nav>
        </div>
      </header>

      {/* ── MAIN CONTAINER (Centered 2004 Boxed Layout) ────────────────────── */}
      <main className="max-w-[960px] mx-auto p-3">
        {/* Top Announcement Bar */}
        <div className="bg-[#eceff5] border border-[#b4c3dc] p-2 mb-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px]">
          <div>
            <strong className="text-[#3b5998]">Welcome to Future Q!</strong> We are an Indian
            software startup founded in a Bokaro Steel City hostel room.{" "}
            <span className="text-[#555555]">
              (450+ active ecosystem learners • 2 shipped products • YC applicant)
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://focusmode.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3b5998] font-bold hover:underline"
            >
              focusmode.online ↗
            </a>
            <span className="text-[#b4c3dc]">|</span>
            <a
              href="https://cwwala.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3b5998] font-bold hover:underline"
            >
              cwwala.vercel.app ↗
            </a>
          </div>
        </div>

        {/* ── 2-COLUMN LAYOUT: Sidebar (Left) + Feed (Right) ────────────────── */}
        <div className="flex flex-col md:flex-row gap-3">
          {/* ─────────────────────────────────────────────────────────────────
              LEFT COLUMN: Company Profile & Information
          ───────────────────────────────────────────────────────────────── */}
          <aside className="w-full md:w-[250px] shrink-0">
            {/* Box 1: Company Profile Picture */}
            <div className="fb-panel">
              <div className="fb-panel-header">Future Q Technologies</div>
              <div className="p-2.5 text-center bg-white">
                <div className="border border-[#3b5998] p-1 bg-[#eceff5] inline-block mb-2">
                  <img
                    src={futureqLogo}
                    alt="Future Q Logo"
                    className="w-36 h-36 object-contain bg-white mx-auto"
                  />
                </div>
                <div className="text-[12px] font-bold text-[#3b5998]">Future Q</div>
                <div className="text-[10px] text-[#666666] italic mt-0.5">
                  "Building problem solvers, not rote memorizers."
                </div>

                <div className="mt-2 pt-2 border-t border-[#d8dfea] flex justify-center gap-1.5">
                  <button
                    onClick={handleCopyEmail}
                    className="fb-button text-[10px]"
                  >
                    [ message founders ]
                  </button>
                  <a
                    href="#contact"
                    className="fb-button-secondary text-[10px]"
                  >
                    [ partner ]
                  </a>
                </div>
              </div>
            </div>

            {/* Box 2: Information Table (Classic 2004 Facebook Profile Info) */}
            <div className="fb-panel">
              <div className="fb-panel-header">Company Information</div>
              <table className="fb-table">
                <tbody>
                  <tr>
                    <td className="label">Name:</td>
                    <td className="value font-bold text-[#3b5998]">Future Q</td>
                  </tr>
                  <tr>
                    <td className="label">Type:</td>
                    <td className="value">Ed-Tech Software Co.</td>
                  </tr>
                  <tr>
                    <td className="label">Hometown:</td>
                    <td className="value">Bokaro Steel City, India</td>
                  </tr>
                  <tr>
                    <td className="label">Founders:</td>
                    <td className="value">
                      Saurabh Raj & Brother
                      <br />
                      <span className="text-[#777777] text-[10px]">
                        (Class 12 Science Students)
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="label">Active Users:</td>
                    <td className="value font-bold">450+ Learners</td>
                  </tr>
                  <tr>
                    <td className="label">Products:</td>
                    <td className="value">
                      2 Live Platforms
                      <br />
                      <a href="#focusmode" className="text-[#3b5998]">
                        ↳ Focus Mode Player
                      </a>
                      <br />
                      <a href="#coachingwala" className="text-[#3b5998]">
                        ↳ CoachingWala
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="label">Status:</td>
                    <td className="value">Bootstrapped / YC Candidate</td>
                  </tr>
                  <tr>
                    <td className="label">Tech Stack:</td>
                    <td className="value text-[10px]">
                      Next.js, React, Tailwind, Supabase, Firebase
                    </td>
                  </tr>
                  <tr>
                    <td className="label">Outsourced:</td>
                    <td className="value font-bold text-[#006600]">
                      0% (100% In-House)
                    </td>
                  </tr>
                  <tr>
                    <td className="label">Contact:</td>
                    <td className="value text-[10px] break-all">
                      <a href="mailto:saurabh.futureq@gmail.com">
                        saurabh.futureq@gmail.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Box 3: Quick Navigation Directory */}
            <div className="fb-panel">
              <div className="fb-panel-header">Directory Navigation</div>
              <div className="p-2 space-y-1 text-[11px]">
                <div>
                  <a href="#about" className="font-bold text-[#3b5998]">
                    » About Future Q
                  </a>
                </div>
                <div>
                  <a href="#products" className="font-bold text-[#3b5998]">
                    » Products Suite (2 Live)
                  </a>
                </div>
                <div className="pl-3 text-[10px]">
                  •{" "}
                  <a href="https://focusmode.online" target="_blank" rel="noreferrer">
                    Focus Mode Player ↗
                  </a>
                </div>
                <div className="pl-3 text-[10px]">
                  •{" "}
                  <a href="https://cwwala.vercel.app" target="_blank" rel="noreferrer">
                    CoachingWala ERP ↗
                  </a>
                </div>
                <div>
                  <a href="#mission" className="font-bold text-[#3b5998]">
                    » The Mission & Manifesto
                  </a>
                </div>
                <div>
                  <a href="#comparison" className="font-bold text-[#3b5998]">
                    » Legacy Giants vs Future Q
                  </a>
                </div>
                <div>
                  <a href="#story" className="font-bold text-[#3b5998]">
                    » Letter from Bokaro Hostel
                  </a>
                </div>
                <div>
                  <a href="#contact" className="font-bold text-[#3b5998]">
                    » Inquire / Join Beta
                  </a>
                </div>
              </div>
            </div>

            {/* Box 4: Verified Validation Badge */}
            <div className="fb-panel-light p-2 bg-[#f0f3f8] text-[10px] text-[#444444] border-l-4 border-l-[#3b5998]">
              <strong>Verified In-House Engineering:</strong>
              <br />
              All codebases for Focus Mode Player and CoachingWala were independently written
              and architected by Saurabh Raj and team.
            </div>
          </aside>

          {/* ─────────────────────────────────────────────────────────────────
              RIGHT COLUMN: Main Content Feed & Details
          ───────────────────────────────────────────────────────────────── */}
          <div className="flex-1 space-y-3">
            {/* ── Box 1: Welcome / About Future Q ──────────────────────────── */}
            <section id="about" className="fb-panel">
              <div className="fb-panel-header">Welcome to Future Q</div>
              <div className="p-3 bg-white">
                <h1 className="text-[16px] font-bold text-[#3b5998] mb-1">
                  We Don't Build Rote Memorizers. We Build Real Problem Solvers.
                </h1>
                <p className="text-[12px] text-[#333333] leading-relaxed mb-2.5">
                  <strong>Future Q</strong> is an Indian education-technology company founded by two
                  brothers in a hostel room in Bokaro Steel City. We build software tools designed
                  to dismantle the passive rote-memorization model that is burning out millions of
                  Indian students preparing for <strong>JEE, NEET, and SSC</strong>.
                </p>
                <p className="text-[11px] text-[#555555] leading-relaxed mb-3">
                  Instead of passive 2-hour video broadcasting and overwhelming 20-question PDF
                  dumps, Future Q creates software that fosters active problem-solving, deep
                  cognitive focus, and modern educational operations.
                </p>

                {/* Quick Products Launch Buttons */}
                <div className="bg-[#eceff5] border border-[#d8dfea] p-2.5 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="font-bold text-[#3b5998]">Live Products:</span>{" "}
                    Explore our deployed software tools currently used by 450+ students.
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://focusmode.online"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fb-button text-[10px]"
                    >
                      [ focusmode.online ↗ ]
                    </a>
                    <a
                      href="https://cwwala.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fb-button text-[10px]"
                    >
                      [ cwwala.vercel.app ↗ ]
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Box 2: Products by Future Q (The Core Request!) ──────────── */}
            <section id="products" className="fb-panel">
              <div className="fb-panel-header">
                Products by Future Q [ 2 Live Software Platforms ]
              </div>
              <div className="p-3 bg-white space-y-4">
                {/* PRODUCT 1: Focus Mode Player */}
                <div id="focusmode" className="border border-[#b4c3dc] p-3 bg-[#fafbfc]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 mb-2 border-b border-[#d8dfea] gap-1">
                    <div>
                      <span className="text-[14px] font-bold text-[#3b5998]">
                        Focus Mode Player
                      </span>
                      <span className="text-[10px] text-[#006600] font-bold ml-2">
                        [ Live Web Application ]
                      </span>
                    </div>
                    <a
                      href="https://focusmode.online"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fb-button text-[10px] self-start sm:self-auto"
                    >
                      Open focusmode.online ↗
                    </a>
                  </div>

                  <table className="fb-table mb-2">
                    <tbody>
                      <tr>
                        <td className="label">Purpose:</td>
                        <td className="value">
                          Distraction-Free Student Productivity & Study Flow Workspace
                        </td>
                      </tr>
                      <tr>
                        <td className="label">Target Users:</td>
                        <td className="value">
                          Students preparing for competitive exams (JEE, NEET, SSC, Board exams)
                        </td>
                      </tr>
                      <tr>
                        <td className="label">Problem Solved:</td>
                        <td className="value">
                          Students attempting to study online are constantly hijacked by YouTube
                          recommendations, comments, and algorithmic rabbit holes.
                        </td>
                      </tr>
                      <tr>
                        <td className="label">Key Features:</td>
                        <td className="value">
                          • Zero-distraction study video player with no recommendation feeds
                          <br />
                          • Integrated Pomodoro timer with custom interval presets
                          <br />
                          • Curated ambient study audio, lofi focus streams, and binaural beats
                          <br />
                          • Lightweight, fast-loading interface with focus tracking
                        </td>
                      </tr>
                      <tr>
                        <td className="label">Tech Stack:</td>
                        <td className="value font-mono text-[10px]">
                          Next.js, React, Tailwind CSS, Firebase
                        </td>
                      </tr>
                      <tr>
                        <td className="label">Public URL:</td>
                        <td className="value">
                          <a
                            href="https://focusmode.online"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#3b5998] font-bold"
                          >
                            https://focusmode.online
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* PRODUCT 2: CoachingWala */}
                <div id="coachingwala" className="border border-[#b4c3dc] p-3 bg-[#fafbfc]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 mb-2 border-b border-[#d8dfea] gap-1">
                    <div>
                      <span className="text-[14px] font-bold text-[#3b5998]">
                        CoachingWala
                      </span>
                      <span className="text-[10px] text-[#3b5998] font-bold ml-2">
                        [ Deployed Cloud ERP ]
                      </span>
                    </div>
                    <a
                      href="https://cwwala.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fb-button text-[10px] self-start sm:self-auto"
                    >
                      Open cwwala.vercel.app ↗
                    </a>
                  </div>

                  <table className="fb-table mb-2">
                    <tbody>
                      <tr>
                        <td className="label">Purpose:</td>
                        <td className="value">
                          Operating System & Cloud ERP for Offline Coaching Institutes
                        </td>
                      </tr>
                      <tr>
                        <td className="label">Target Users:</td>
                        <td className="value">
                          Coaching center directors, administrators, teachers, and parents
                        </td>
                      </tr>
                      <tr>
                        <td className="label">Problem Solved:</td>
                        <td className="value">
                          Local coaching centers in India rely on messy paper registers for fee
                          ledgers, student attendance, and batch records, wasting hours daily.
                        </td>
                      </tr>
                      <tr>
                        <td className="label">Key Features:</td>
                        <td className="value">
                          • Complete student enrollment and batch allocation module
                          <br />
                          • Digital student fee ledger with one-click automated receipts
                          <br />
                          • Daily digital attendance tracking and parental alert capability
                          <br />
                          • Director analytics dashboard with fee collection tracking
                        </td>
                      </tr>
                      <tr>
                        <td className="label">Validation:</td>
                        <td className="value font-bold text-[#3b5998]">
                          Tested door-to-door with coaching institute directors in Bokaro Steel City
                        </td>
                      </tr>
                      <tr>
                        <td className="label">Tech Stack:</td>
                        <td className="value font-mono text-[10px]">
                          Next.js, React, Tailwind CSS, Supabase, PostgreSQL
                        </td>
                      </tr>
                      <tr>
                        <td className="label">Public URL:</td>
                        <td className="value">
                          <a
                            href="https://cwwala.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#3b5998] font-bold"
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

            {/* ── Box 3: The Mission & Manifesto ───────────────────────────── */}
            <section id="mission" className="fb-panel">
              <div className="fb-panel-header">The Mission & Manifesto [ Why We Exist ]</div>
              <div className="p-3 bg-white space-y-3">
                <div className="text-[13px] font-bold text-[#3b5998]">
                  Digitizing a Broken Classroom Does Not Fix Education.
                </div>
                <p className="text-[11px] text-[#333333] leading-relaxed">
                  India's legacy ed-tech giants (such as PhysicsWallah, Unacademy, and BYJU'S)
                  simply took an outdated, passive broadcast model and put it onto a smartphone
                  screen. Millions of students preparing for competitive entrance exams are suffocating
                  under 2-hour long video lectures and 30-question PDF batch dumps.
                </p>

                <div className="bg-[#fff9d7] border border-[#e2c822] p-2 text-[11px] text-[#554400]">
                  <strong>Core Realization:</strong> Real retention does not happen by watching
                  another 2-hour video lecture. It happens when students solve, explain, and build.
                  Future Q aims to be India's answer to Khan Academy + modern collaborative workspace.
                </div>

                {/* 3 Core Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                  <div className="border border-[#b4c3dc] p-2 bg-[#f7f9fc]">
                    <div className="font-bold text-[#3b5998] text-[11px]">
                      1. Micro-Chunked Active Practice
                    </div>
                    <p className="text-[10px] text-[#555555] mt-1">
                      Replacing 30-question PDF dumps with 4-question actionable bursts with instant
                      feedback loops.
                    </p>
                  </div>

                  <div className="border border-[#b4c3dc] p-2 bg-[#f7f9fc]">
                    <div className="font-bold text-[#3b5998] text-[11px]">
                      2. Peer-to-Peer Teaching
                    </div>
                    <p className="text-[10px] text-[#555555] mt-1">
                      Students master concepts by teaching juniors, earning real income and
                      achieving financial independence.
                    </p>
                  </div>

                  <div className="border border-[#b4c3dc] p-2 bg-[#f7f9fc]">
                    <div className="font-bold text-[#3b5998] text-[11px]">
                      3. Mentorship to Employment
                    </div>
                    <p className="text-[10px] text-[#555555] mt-1">
                      Pairing students with big-tech engineers and doctors to build real projects
                      from Class 7 onwards.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Box 4: Comparison Table (2004 Style) ───────────────────────── */}
            <section id="comparison" className="fb-panel">
              <div className="fb-panel-header">
                Market Comparison [ Legacy Ed-Tech vs. Future Q ]
              </div>
              <div className="p-3 bg-white">
                <table className="w-full border-collapse border border-[#b4c3dc] text-[11px]">
                  <thead>
                    <tr className="bg-[#d8dfea] text-[#3b5998]">
                      <th className="border border-[#b4c3dc] p-1.5 text-left font-bold w-1/4">
                        Dimension
                      </th>
                      <th className="border border-[#b4c3dc] p-1.5 text-left font-bold text-[#990000] w-3/8">
                        Legacy Giants (PW / Unacademy)
                      </th>
                      <th className="border border-[#b4c3dc] p-1.5 text-left font-bold text-[#006600] w-3/8 bg-[#eef4ee]">
                        The Future Q Approach
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-[#b4c3dc] p-1.5 font-bold">
                        Learning Delivery
                      </td>
                      <td className="border border-[#b4c3dc] p-1.5 text-[#555555]">
                        Passive 2-hour long broadcast lectures
                      </td>
                      <td className="border border-[#b4c3dc] p-1.5 font-bold text-[#006600] bg-[#f9fbf9]">
                        4-question active learning loops with instant feedback
                      </td>
                    </tr>
                    <tr className="bg-[#f7f7f7]">
                      <td className="border border-[#b4c3dc] p-1.5 font-bold">
                        Assignments
                      </td>
                      <td className="border border-[#b4c3dc] p-1.5 text-[#555555]">
                        Overwhelming 20-50 question PDF dumps
                      </td>
                      <td className="border border-[#b4c3dc] p-1.5 font-bold text-[#006600] bg-[#f9fbf9]">
                        Micro-chunked gamified mastery checks
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#b4c3dc] p-1.5 font-bold">
                        Teaching Force
                      </td>
                      <td className="border border-[#b4c3dc] p-1.5 text-[#555555]">
                        Expensive celebrity teachers (1-to-many broadcast)
                      </td>
                      <td className="border border-[#b4c3dc] p-1.5 font-bold text-[#006600] bg-[#f9fbf9]">
                        Scalable peer-to-peer tutoring marketplace
                      </td>
                    </tr>
                    <tr className="bg-[#f7f7f7]">
                      <td className="border border-[#b4c3dc] p-1.5 font-bold">
                        Student Economics
                      </td>
                      <td className="border border-[#b4c3dc] p-1.5 text-[#555555]">
                        Pure expense; students cannot earn
                      </td>
                      <td className="border border-[#b4c3dc] p-1.5 font-bold text-[#006600] bg-[#f9fbf9]">
                        Students earn income by tutoring juniors
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#b4c3dc] p-1.5 font-bold">
                        Goal
                      </td>
                      <td className="border border-[#b4c3dc] p-1.5 text-[#555555]">
                        Rote memorization for entrance exam day
                      </td>
                      <td className="border border-[#b4c3dc] p-1.5 font-bold text-[#006600] bg-[#f9fbf9]">
                        Building real engineers, doctors, and problem solvers
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── Box 5: The Founders Story ─────────────────────────────────── */}
            <section id="story" className="fb-panel">
              <div className="fb-panel-header">
                Letter from the Founders [ Bokaro Steel City Hostel Room ]
              </div>
              <div className="p-3 bg-white space-y-2.5">
                <div className="flex items-start gap-3">
                  <div className="border border-[#3b5998] p-1 bg-[#eceff5] shrink-0">
                    <div className="w-16 h-16 bg-[#3b5998] text-white flex items-center justify-center font-bold text-[14px]">
                      SR & BRO
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-[#3b5998] text-[12px]">
                      Saurabh Raj & Co-Founder Brother
                    </div>
                    <div className="text-[10px] text-[#666666]">
                      Bokaro Steel City, Jharkhand, India • Founded late 2025
                    </div>
                    <div className="text-[10px] text-[#444444] mt-1">
                      Class 12 Science Students • Full-Stack Developers • Bootstrapped
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#d8dfea] pt-2 text-[11px] text-[#333333] space-y-2 leading-relaxed">
                  <p>
                    "We have known each other for his entire life, as he is my younger brother. We
                    grew up together, currently share a hostel room in Bokaro Steel City, and have a
                    long track record of collaborating on creative and technical projects side-by-side."
                  </p>
                  <p>
                    "We are not armchair observers. As Class 12 students preparing for exams, we
                    suffocate under the passive, rote-memorization model daily. Our version of
                    'full-time' means coding late into the night from our shared hostel room, and
                    pounding the pavement during the day to sit down with real local coaching directors
                    and educators."
                  </p>
                  <p>
                    "We built <strong>Focus Mode Player</strong> (focusmode.online) because we saw
                    students helpless against digital distraction. We built{" "}
                    <strong>CoachingWala</strong> (cwwala.vercel.app) by walking door-to-door to
                    understand the operational bottlenecks of institutes. Every single line of code
                    has been written in-house. We do not outsource our engineering."
                  </p>
                </div>
              </div>
            </section>

            {/* ── Box 6: Early Access & Contact Form ────────────────────────── */}
            <section id="contact" className="fb-panel">
              <div className="fb-panel-header">
                Contact Future Q [ Registration & Partnership Inquiry ]
              </div>
              <div className="p-3 bg-white">
                {formSubmitted ? (
                  <div className="bg-[#eef4ee] border border-[#006600] p-3 text-center text-[#006600]">
                    <strong>Thank you for reaching out!</strong>
                    <br />
                    Your note has been transmitted to Saurabh Raj and the Future Q founding team. We
                    will get back to you shortly.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-2">
                    <div className="text-[11px] text-[#555555] mb-2">
                      Please fill out the form below to connect with the founders regarding student
                      beta access, coaching institute ERP pilots, or investment.
                    </div>

                    <table className="fb-table">
                      <tbody>
                        <tr>
                          <td className="label">I am a:</td>
                          <td className="value">
                            <select
                              value={formData.role}
                              onChange={(e) =>
                                setFormData({ ...formData, role: e.target.value })
                              }
                              className="fb-input"
                            >
                              <option value="Student">Student (Exam Aspirant)</option>
                              <option value="Director">Coaching Institute Director</option>
                              <option value="Mentor">Tech / Industry Mentor</option>
                              <option value="Investor">Investor / Accelerator</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td className="label">Your Name:</td>
                          <td className="value">
                            <input
                              type="text"
                              required
                              placeholder="e.g. Rahul Sharma"
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                              }
                              className="fb-input w-full max-w-[280px]"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="label">Email Address:</td>
                          <td className="value">
                            <input
                              type="email"
                              required
                              placeholder="e.g. rahul@example.com"
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                              }
                              className="fb-input w-full max-w-[280px]"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="label">Message / Note:</td>
                          <td className="value">
                            <textarea
                              rows={3}
                              placeholder="How would you like to collaborate with Future Q?"
                              value={formData.message}
                              onChange={(e) =>
                                setFormData({ ...formData, message: e.target.value })
                              }
                              className="fb-input w-full max-w-[360px]"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="label"></td>
                          <td className="value">
                            <button type="submit" className="fb-button">
                              [ Submit Inquiry ]
                            </button>
                            <span className="text-[#666666] ml-2 text-[10px]">
                              or email directly at{" "}
                              <a
                                href="mailto:saurabh.futureq@gmail.com"
                                className="text-[#3b5998]"
                              >
                                saurabh.futureq@gmail.com
                              </a>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                )}
              </div>
            </section>
          </div>
        </div>

        {/* ── 2004 FOOTER ──────────────────────────────────────────────────── */}
        <footer className="mt-6 pt-3 border-t border-[#d8dfea] text-center text-[#555555] text-[10px] space-y-1">
          <div>
            <a href="#about" className="text-[#3b5998]">
              about
            </a>{" "}
            |{" "}
            <a href="#products" className="text-[#3b5998]">
              products
            </a>{" "}
            |{" "}
            <a href="https://focusmode.online" target="_blank" rel="noreferrer" className="text-[#3b5998]">
              focusmode.online
            </a>{" "}
            |{" "}
            <a href="https://cwwala.vercel.app" target="_blank" rel="noreferrer" className="text-[#3b5998]">
              cwwala.vercel.app
            </a>{" "}
            |{" "}
            <a href="#mission" className="text-[#3b5998]">
              mission
            </a>{" "}
            |{" "}
            <a href="#story" className="text-[#3b5998]">
              founders
            </a>{" "}
            |{" "}
            <a href="#contact" className="text-[#3b5998]">
              contact
            </a>
          </div>
          <div>
            Future Q Technologies © 2004–2026. Inspired by The Facebook (2004) design.
          </div>
          <div className="text-[#888888]">
            Founded & operating in Bokaro Steel City, Jharkhand, India • Building great problem solvers.
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
        <Route path="*" element={<Facebook2004Company />} />
      </Routes>
    </Router>
  );
}