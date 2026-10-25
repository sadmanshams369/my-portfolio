import React, { useState, useEffect } from 'react';
import {
  Sun, Moon, Terminal, Shield, Cpu, Globe, Code2,
  ExternalLink, Mail, Copy, Check, ChevronRight, Phone,
  Layers, Lock, Sparkles, TerminalSquare, FolderGit2, ArrowUpRight
} from 'lucide-react';

// Custom SVG Icon for GitHub
const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

// Custom SVG Icon for LinkedIn
const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const SKILLS = {
  "Languages & Paradigms": [
    "C++ (Algorithms & Systems)",
    "Python (Scripting & Automation)",
    "Java (Enterprise Architecture)",
    "C# (.NET Core Application)",
    "PHP (Web Backend)",
    "JavaScript (Modern ES6+)",
    "Object-Oriented Programming (OOP)"
  ],
  "Web & API Architecture": [
    "Modern Web Development",
    "HTML5 / Semantic Markup",
    "CSS3 & Responsive Layouts",
    "RESTful API Integration",
    "Client-Server Communication",
    "JSON & Asynchronous Handlers"
  ],
  "Frameworks & Core Backend": [
    ".NET Framework / .NET Core",
    "Backend MVC Architecture",
    "Database Schemas & Modeling",
    "Service Layer Abstraction",
    "Scalable Code Structure"
  ],
  "Security & Applied Intelligence": [
    "Cyber Defense Concepts",
    "Network Protocols & Architecture",
    "Threat Modeling & Secure Coding",
    "Machine Learning Foundations",
    "AI-Assisted Workflow Integration"
  ]
};

// Placeholder list - ready for your future projects
const PROJECTS = [];

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Interactive Terminal State
  const [termInput, setTermInput] = useState("");
  const [termHistory, setTermHistory] = useState([
    "Sadman-OS v2.4.0 (x86_64-engine-bash)",
    "System status: ONLINE. Type 'help' to inspect developer parameters."
  ]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const copyEmail = () => {
    navigator.clipboard.writeText("sadmanshams5000@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText("+8801783858574");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = termInput.trim().toLowerCase();
      let response = "";

      switch (cmd) {
        case "help":
          response = "Commands: bio, skills, domains, contact, vision, clear";
          break;
        case "bio":
          response = "MD. Sadman Islam Shams | CSE Student, aspiring Software & Security Engineer.";
          break;
        case "domains":
          response = "Focus Areas: Software Architecture, Defensive Cyber Security, Full-Stack Web, Applied AI/ML.";
          break;
        case "skills":
          response = "Languages: C++, Python, Java, C#, PHP, JS | Framework: .NET | Focus: OOP, APIs, Secure Systems.";
          break;
        case "vision":
          response = "Building reliable software pipelines where clean architecture, algorithmic rigor, and secure protocols meet.";
          break;
        case "contact":
          response = "Email: sadmanshams5000@gmail.com | Phone: +880 1783858574 | Dhaka, Bangladesh";
          break;
        case "clear":
          setTermHistory([]);
          setTermInput("");
          return;
        default:
          response = cmd ? `Command not recognized: '${cmd}'. Type 'help' for available commands.` : "";
      }

      setTermHistory(prev => [...prev, `> ${termInput}`, response].filter(Boolean));
      setTermInput("");
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 selection:bg-indigo-500 selection:text-white ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 backdrop-blur-md border-b ${darkMode ? 'bg-slate-950/80 border-slate-800/80' : 'bg-slate-50/80 border-slate-200/80'}`}>
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2.5 font-mono font-bold text-base sm:text-lg">
            <div className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Terminal className="w-4 h-4" />
            </div>
            <span>sadman<span className="text-indigo-500">.dev</span></span>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-6 text-sm font-medium">
            <a href="#about" className="hover:text-indigo-400 transition-colors hidden sm:block">About</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl border transition-all ${darkMode ? 'border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-amber-300' : 'border-slate-200 bg-white hover:bg-slate-100 text-slate-700'}`}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-12 sm:pt-20 sm:pb-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Computer Science & Engineering Student</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                MD. Sadman <br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Islam Shams
                </span>
              </h1>

              {/* Polished Multi-Domain Executive Title */}
              <p className="text-base sm:text-lg font-semibold tracking-wide text-slate-300 dark:text-slate-200">
                Aspiring Software & Security Engineer
                <span className="text-indigo-400 mx-2">|</span>
                Full-Stack Builder
                <span className="text-indigo-400 mx-2">|</span>
                AI & ML Explorer
              </p>
            </div>

            <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Passionate about engineering reliable, scalable software solutions by unifying core object-oriented architectures (C++, Python, Java, C#/.NET) with modern web engineering, defensive cybersecurity models, and practical machine learning intelligence.
            </p>

            {/* Quick Interactive Tags */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              <span className={`px-2.5 py-1 rounded-md border ${darkMode ? 'bg-slate-900 border-slate-800 text-indigo-400' : 'bg-slate-100 border-slate-200 text-indigo-600'}`}>#SoftwareEngineering</span>
              <span className={`px-2.5 py-1 rounded-md border ${darkMode ? 'bg-slate-900 border-slate-800 text-pink-400' : 'bg-slate-100 border-slate-200 text-pink-600'}`}>#CyberSecurity</span>
              <span className={`px-2.5 py-1 rounded-md border ${darkMode ? 'bg-slate-900 border-slate-800 text-cyan-400' : 'bg-slate-100 border-slate-200 text-cyan-600'}`}>#WebArchitecture</span>
              <span className={`px-2.5 py-1 rounded-md border ${darkMode ? 'bg-slate-900 border-slate-800 text-emerald-400' : 'bg-slate-100 border-slate-200 text-emerald-600'}`}>#AppliedAI</span>
            </div>

            {/* Actions & Social */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-lg shadow-indigo-600/25 flex items-center space-x-2"
              >
                <span>Get in Touch</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/sadmanshams369"
                target="_blank"
                rel="noreferrer"
                className={`p-3 rounded-xl border flex items-center space-x-2 font-medium transition-all ${darkMode ? 'border-slate-800 hover:bg-slate-900 text-slate-300' : 'border-slate-200 hover:bg-slate-100 text-slate-700'}`}
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="text-xs font-mono">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/sadman-islam-shams-79a65028a/"
                target="_blank"
                rel="noreferrer"
                className={`p-3 rounded-xl border flex items-center space-x-2 font-medium transition-all ${darkMode ? 'border-slate-800 hover:bg-slate-900 text-slate-300' : 'border-slate-200 hover:bg-slate-100 text-slate-700'}`}
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-500" />
                <span className="text-xs font-mono">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Profile Picture with Glow Effect */}
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-700"></div>
            <div className={`relative w-56 h-72 sm:w-64 sm:h-80 rounded-2xl overflow-hidden border shadow-2xl ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'}`}>
              <img
                src="/profile.png"
                alt="MD. Sadman Islam Shams"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full flex flex-col items-center justify-center font-mono text-xs text-slate-500 p-4 text-center">Place photo as public/profile.png</div>';
                }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* Unique About Me Narrative & Highlights */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-16">
        <div className={`p-8 sm:p-12 rounded-3xl border relative overflow-hidden backdrop-blur-sm ${darkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white border-slate-200/90 shadow-sm'}`}>
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center space-x-2 text-indigo-400 font-mono text-xs uppercase tracking-wider font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Engineering Philosophy & Perspective</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Driven by curiosity. Grounded in architecture.
            </h2>

            <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              I am an aspiring software engineer and tech explorer with an innate drive to understand how systems operate under the hood—from algorithmic optimization and scalable backend pipelines to resilient network security boundaries.
            </p>

            <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              My core foundation is established across diverse programming paradigms including <strong>C++, Python, Java, C#/.NET, PHP, and JavaScript</strong>. Rather than confining myself to isolated silos, I bridge multiple disciplines: building responsive web platforms, designing clean object-oriented APIs, studying cyber threat prevention mechanisms, and exploring how modern machine learning models can empower intelligent decision-making.
            </p>
          </div>

          {/* 4 Architectural Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 relative z-10">
            <div className={`p-5 rounded-2xl border transition-all ${darkMode ? 'bg-slate-950/60 border-slate-800 hover:border-indigo-500/40' : 'bg-slate-50 border-slate-200 hover:border-indigo-300'}`}>
              <Layers className="w-5 h-5 text-indigo-400 mb-3" />
              <h4 className="font-bold text-sm tracking-tight">Polyglot Engineering</h4>
              <p className={`text-xs mt-1.5 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Adaptive across OOP architectures in C++, Java, C#/.NET, and modular Python services.
              </p>
            </div>

            <div className={`p-5 rounded-2xl border transition-all ${darkMode ? 'bg-slate-950/60 border-slate-800 hover:border-pink-500/40' : 'bg-slate-50 border-slate-200 hover:border-pink-300'}`}>
              <Lock className="w-5 h-5 text-pink-400 mb-3" />
              <h4 className="font-bold text-sm tracking-tight">Security-First Mindset</h4>
              <p className={`text-xs mt-1.5 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Prioritizing system defense, sanitized data flow, access controls, and network resilience.
              </p>
            </div>

            <div className={`p-5 rounded-2xl border transition-all ${darkMode ? 'bg-slate-950/60 border-slate-800 hover:border-cyan-500/40' : 'bg-slate-50 border-slate-200 hover:border-cyan-300'}`}>
              <Globe className="w-5 h-5 text-cyan-400 mb-3" />
              <h4 className="font-bold text-sm tracking-tight">Web & API Infrastructure</h4>
              <p className={`text-xs mt-1.5 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Crafting robust client-server experiences powered by RESTful endpoints and clean UI layouts.
              </p>
            </div>

            <div className={`p-5 rounded-2xl border transition-all ${darkMode ? 'bg-slate-950/60 border-slate-800 hover:border-emerald-500/40' : 'bg-slate-50 border-slate-200 hover:border-emerald-300'}`}>
              <Cpu className="w-5 h-5 text-emerald-400 mb-3" />
              <h4 className="font-bold text-sm tracking-tight">Applied AI Intelligence</h4>
              <p className={`text-xs mt-1.5 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Harnessing machine learning algorithms to automate pattern recognition and data insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Widget Section */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className={`rounded-2xl border font-mono text-sm overflow-hidden shadow-2xl ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-900 text-slate-100 border-slate-700'}`}>
          <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-rose-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            </div>
            <span className="text-xs text-slate-400 font-mono">bash session: visitor@sadman-core</span>
          </div>
          <div className="p-4 space-y-2 h-44 overflow-y-auto">
            {termHistory.map((item, idx) => (
              <div key={idx} className={item.startsWith(">") ? "text-indigo-400 font-semibold" : "text-slate-300"}>
                {item}
              </div>
            ))}
            <div className="flex items-center space-x-2 text-indigo-400">
              <span>sadman@terminal:~$</span>
              <input
                type="text"
                value={termInput}
                onChange={(e) => setTermInput(e.target.value)}
                onKeyDown={handleCommand}
                placeholder="type 'help'..."
                className="bg-transparent border-none outline-none text-slate-100 flex-1 font-mono text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-16">
        <div className="space-y-2 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Technical Competencies</h2>
          <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Categorized technical stack, development environments, and engineering skillsets.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(SKILLS).map(([cat, list], idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${darkMode ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'}`}
            >
              <div>
                <div className="flex items-center space-x-2.5 mb-5 text-indigo-500">
                  {idx === 0 && <Code2 className="w-5 h-5" />}
                  {idx === 1 && <Globe className="w-5 h-5" />}
                  {idx === 2 && <Layers className="w-5 h-5" />}
                  {idx === 3 && <Shield className="w-5 h-5" />}
                  <h3 className="font-bold text-sm tracking-wide text-slate-900 dark:text-slate-100">{cat}</h3>
                </div>
                <ul className="space-y-2.5 text-xs font-mono">
                  {list.map((item, i) => (
                    <li key={i} className={`flex items-start space-x-2.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section (Clean Placeholder Setup) */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Showcase & Implementations</h2>
            <p className={`text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Hands-on engineering projects and open-source contributions.
            </p>
          </div>

          <a
            href="https://github.com/sadmanshams369"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-1.5 text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <span>Browse GitHub Repositories</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {PROJECTS.length === 0 ? (
          <div className={`p-10 rounded-2xl border text-center space-y-4 ${darkMode ? 'bg-slate-900/30 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="w-12 h-12 mx-auto rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-base">Projects Currently In Pipeline</h3>
              <p className={`text-xs max-w-md mx-auto leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Currently refining and documenting selected works across Web Development, System Utilities, and Cyber Defense models. Check back soon or visit GitHub directly.
              </p>
            </div>
            <a
              href="https://github.com/sadmanshams369"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-mono font-medium bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Explore GitHub (@sadmanshams369)</span>
            </a>
          </div>
        ) : null}
      </section>

      {/* Enhanced Contact Section with Phone and Email */}
      <footer id="contact" className={`border-t mt-20 ${darkMode ? 'border-slate-800/80 bg-slate-950' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-indigo-400 font-mono text-xs uppercase tracking-wider font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Let's Build Something Meaningful</span>
              </div>
              <h3 className="text-3xl font-extrabold tracking-tight">Get in touch.</h3>
              <p className={`text-sm leading-relaxed max-w-md ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Whether you have an upcoming project, an engineering role opportunity, research ideas, or just want to discuss software systems—my inbox and phone are open!
              </p>

              <div className="pt-2 flex items-center space-x-4">
                <a
                  href="https://github.com/sadmanshams369"
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2.5 rounded-lg border transition-colors ${darkMode ? 'border-slate-800 hover:bg-slate-900 text-slate-300' : 'border-slate-200 hover:bg-slate-100 text-slate-700'}`}
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/sadman-islam-shams-79a65028a/"
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2.5 rounded-lg border transition-colors ${darkMode ? 'border-slate-800 hover:bg-slate-900 text-slate-300' : 'border-slate-200 hover:bg-slate-100 text-slate-700'}`}
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-500" />
                </a>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <div className={`p-4 rounded-xl border flex items-center justify-between transition-all ${darkMode ? 'bg-slate-900/50 border-slate-800 hover:border-slate-700' : 'bg-slate-50 border-slate-200 hover:border-slate-300'}`}>
                <div className="flex items-center space-x-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Email Address</span>
                    <a href="mailto:sadmanshams5000@gmail.com" className="text-sm font-semibold hover:text-indigo-400 transition-colors truncate block">
                      sadmanshams5000@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className={`p-2 rounded-lg border text-xs font-mono transition-colors shrink-0 ${darkMode ? 'border-slate-800 hover:bg-slate-800 text-slate-300' : 'border-slate-300 hover:bg-white text-slate-700'}`}
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className={`p-4 rounded-xl border flex items-center justify-between transition-all ${darkMode ? 'bg-slate-900/50 border-slate-800 hover:border-slate-700' : 'bg-slate-50 border-slate-200 hover:border-slate-300'}`}>
                <div className="flex items-center space-x-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Phone (Bangladesh)</span>
                    <a href="tel:+8801783858574" className="text-sm font-semibold hover:text-emerald-400 transition-colors block">
                      +880 1783858574
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyPhone}
                  className={`p-2 rounded-lg border text-xs font-mono transition-colors shrink-0 ${darkMode ? 'border-slate-800 hover:bg-slate-800 text-slate-300' : 'border-slate-300 hover:bg-white text-slate-700'}`}
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

          </div>

          <div className="mt-12 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-2">
            <span>© {new Date().getFullYear()} MD. Sadman Islam Shams. All rights reserved.</span>
            <span>Crafted with React & Tailwind CSS</span>
          </div>
        </div>
      </footer>

    </div>
  );
}