import React, { useState } from 'react';
import {
  Terminal, Shield, Cpu, Globe, Code2, Layers, Lock,
  Sparkles, Mail, Phone, Copy, Check, ArrowUpRight,
  MapPin, Video, Play, GraduationCap, Filter
} from 'lucide-react';

// Custom SVG Icons
const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const SKILLS = {
  "Languages & Core": ["Python", "C++", "Java", "C#", "JavaScript (ES6+)", "TypeScript", "PHP", "SQL"],
  "AI, ML & Computer Vision": ["PyTorch", "YOLOv8", "Scikit-Learn", "XGBoost", "SHAP (Explainable AI)", "NumPy", "Pandas"],
  "Backend & Web Architecture": ["NestJS", "REST APIs", ".NET Core", "PHP MVC", "PostgreSQL", "MySQL", "SQL Server", "JWT & RBAC"],
  "Cybersecurity & DevOps": ["Kali Linux", "Nmap", "Wireshark", "John the Ripper", "VirtualBox", "Git & GitHub", "Swagger / Postman"]
};

const PROJECTS = [
  {
    id: 1,
    title: "Automated Waste Segregation Pipeline",
    category: "AI & Vision",
    badge: "87.76% Routing Acc.",
    description: "Real-time computer vision pipeline transmitting camera frames via REST API to a YOLOv8n detector across 11 waste classes. Audited dataset leakage (994 images) and engineered a 0.90 confidence-gated routing layer with event logging.",
    tech: ["Python", "YOLOv8n", "PyTorch", "REST API", "Computer Vision"],
    github: "https://github.com/sadmanshams369"
  },
  {
    id: 2,
    title: "Heart Disease Prediction (Explainable AI)",
    category: "AI & Vision",
    badge: "93.44% Acc. | 0.96 AUC",
    description: "Comparative ML study and Hybrid RF-SVM stacking ensemble trained on clinical data with engineered cardiac risk indices (CLI, ECR, STDRS). Integrated SHAP analysis for global and local clinical interpretability.",
    tech: ["Python", "Scikit-Learn", "XGBoost", "SHAP", "Stacking Ensemble"],
    github: "https://github.com/sadmanshams369"
  },
  {
    id: 3,
    title: "BoardRoom — Collaborative Study Group API",
    category: "Backend & Web",
    badge: "NestJS + PostgreSQL",
    description: "Multi-tenant REST API for private study rooms with invite link lifecycle, row-locked database transactions for lobby approvals, JWT authentication, role-based guards (Owner/Editor/Viewer), and full audit logging.",
    tech: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "JWT", "Swagger"],
    github: "https://github.com/sadmanshams369"
  },
  {
    id: 4,
    title: "Isolated Network Security Assessment",
    category: "Cybersecurity",
    badge: "5-Phase Audit",
    description: "Conducted penetration testing and vulnerability analysis from Kali Linux against an isolated target network (192.168.1.0/24). Identified 18 exposed services, intercepted clear-text FTP credentials, and audited password hashes.",
    tech: ["Kali Linux", "Nmap", "Wireshark", "John the Ripper", "VirtualBox"],
    github: "https://github.com/sadmanshams369"
  },
  {
    id: 5,
    title: "LifeLink — Campus Blood Donor Finder",
    category: "Software & Desktop",
    badge: "Python + NumPy",
    description: "Desktop utility for university blood-donation clubs to match eligible, compatible donors by area and 120-day donation rules. Built modular input validators, custom exception classes, atomic JSON storage, and NumPy analytics.",
    tech: ["Python", "Tkinter", "NumPy", "JSON", "OOP"],
    github: "https://github.com/sadmanshams369"
  },
  {
    id: 6,
    title: "Online Car Rent & Rental Management Systems",
    category: "Backend & Web",
    badge: "Full-Stack & Desktop",
    description: "Engineered a PHP MVC car rental web platform with role-based Admin CRUD, AJAX endpoints, and SQL-injection/XSS protection, alongside a C# & SQL Server house rental management desktop application.",
    tech: ["PHP MVC", "MySQL", "JavaScript", "AJAX", "C#", "SQL Server"],
    github: "https://github.com/sadmanshams369"
  }
];

const EDUCATION = [
  {
    institution: "American International University-Bangladesh (AIUB)",
    degree: "B.Sc. in Computer Science & Engineering",
    period: "Present",
    location: "Dhaka, Bangladesh"
  },
  {
    institution: "Dinajpur Government College (DGC)",
    degree: "Higher Secondary Certificate (HSC) — Science",
    period: "2022",
    location: "Dinajpur, Bangladesh"
  },
  {
    institution: "Saint Philips High School (SPS)",
    degree: "Secondary School Certificate (SSC) — Science",
    period: "2020",
    location: "Dinajpur, Bangladesh"
  }
];

export default function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Video configuration:
  // 1) Local video file: place your video in 'public/intro.mp4' and leave YOUTUBE_EMBED_URL empty ("")
  // 2) YouTube video: paste the embed link (e.g., "https://www.youtube.com/embed/VIDEO_ID")
  const LOCAL_VIDEO_SRC = "/intro.mp4";
  const YOUTUBE_EMBED_URL = "";

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

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#c5c6c7] font-sans selection:bg-indigo-500/30 selection:text-white">

      {/* Top Floating Glass Header */}
      <header className="sticky top-4 z-50 max-w-4xl mx-auto px-4">
        <div className="bg-[#12141a]/80 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3 flex items-center justify-between shadow-2xl">
          <a href="#" className="flex items-center space-x-2 text-white font-mono font-medium text-sm hover:text-indigo-400 transition-colors">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            <span>sadman.dev</span>
          </a>

          <nav className="flex items-center space-x-4 sm:space-x-6 text-xs font-mono">
            <a href="#about" className="hover:text-white transition-colors">Profile</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#video-intro" className="hover:text-white transition-colors hidden sm:inline">Video</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 pt-12 pb-24 space-y-24">

        {/* Hero Section */}
        <section className="space-y-8">
          <div className="inline-flex items-center space-x-2.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Open to Software, Applied AI & Security Roles</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div className="space-y-5 max-w-xl">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                MD. Sadman Islam Shams
              </h1>
              <p className="text-base sm:text-lg text-indigo-400/90 font-mono">
                Applied AI & Software Engineer | CSE Undergraduate at AIUB
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-zinc-400">
                Building production-ready Python APIs, computer vision pipelines, and secure backend architectures. Experienced in PyTorch, YOLOv8, NestJS, and network security auditing.
              </p>

              <div className="flex items-center space-x-2 text-xs font-mono text-zinc-500">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* Avatar Card */}
            <div className="relative group shrink-0">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border border-white/10 bg-[#161821] p-1 shadow-2xl">
                <img
                  src="/profile.png"
                  alt="MD. Sadman Islam Shams"
                  className="w-full h-full object-cover object-top rounded-xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center font-mono text-xs text-zinc-500">profile.png</div>';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://github.com/sadmanshams369"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono flex items-center space-x-2 transition-all hover:scale-105"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>

            <a
              href="https://www.linkedin.com/in/sadman-islam-shams-79a65028a/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono flex items-center space-x-2 transition-all hover:scale-105"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-400" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>

            <a
              href="#video-intro"
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono flex items-center space-x-2 transition-all hover:scale-105"
            >
              <Play className="w-3.5 h-3.5 text-emerald-400" />
              <span>Watch Intro</span>
            </a>

            <a
              href="#contact"
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono flex items-center space-x-1.5 transition-all shadow-lg shadow-indigo-600/20"
            >
              <span>Get in touch</span>
            </a>
          </div>
        </section>

        {/* Profile & Education Section */}
        <section id="about" className="space-y-6">
          <div className="flex items-center space-x-3 text-white font-mono text-xs uppercase tracking-wider">
            <span className="text-indigo-400">01 //</span>
            <span>Profile & Background</span>
          </div>

          <div className="bg-[#12141a]/60 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
              I am an inquisitive Computer Science & Engineering undergraduate at <strong>American International University-Bangladesh (AIUB)</strong>, currently focused on building scalable software systems, applied AI/ML pipelines, and secure backend architectures. My core technical interests span <strong>Software Engineering, Full-Stack Web Development, Cybersecurity, and Applied Artificial Intelligence</strong>—actively engineering real-time computer vision models, RESTful APIs, and security assessment workflows.
            </p>

            {/* Education Timeline inside Profile */}
            <div className="pt-4 border-t border-white/10 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-indigo-400 uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {EDUCATION.map((edu, index) => (
                  <div key={index} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5">
                    <span className="text-[11px] font-mono text-indigo-400">{edu.period}</span>
                    <h4 className="text-white text-xs font-semibold leading-snug">{edu.institution}</h4>
                    <p className="text-zinc-400 text-[11px] leading-relaxed">{edu.degree}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills Bento Grid */}
        <section id="skills" className="space-y-6">
          <div className="flex items-center space-x-3 text-white font-mono text-xs uppercase tracking-wider">
            <span className="text-indigo-400">02 //</span>
            <span>Technical Stack</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(SKILLS).map(([cat, list], i) => (
              <div key={i} className="bg-[#12141a]/60 border border-white/10 rounded-2xl p-5 hover:border-indigo-500/30 transition-all group">
                <h3 className="text-white font-mono text-xs font-semibold uppercase tracking-wider mb-3 text-indigo-400 group-hover:text-indigo-300 transition-colors">
                  {cat}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {list.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-zinc-300 text-xs font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3 text-white font-mono text-xs uppercase tracking-wider">
              <span className="text-indigo-400">03 //</span>
              <span>Projects & Research</span>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {["All", "AI & Vision", "Backend & Web", "Cybersecurity", "Software & Desktop"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all ${selectedCategory === cat
                      ? "bg-indigo-600 text-white"
                      : "bg-white/5 text-zinc-400 hover:text-white border border-white/5"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#12141a]/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-indigo-500/30 transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[11px] font-mono">
                      {project.badge}
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-500 hover:text-white transition-colors"
                      title="View on GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>

                  <h3 className="text-white font-bold text-base group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-white/5 text-zinc-300 text-[11px] font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Short Video Introduction Section */}
        <section id="video-intro" className="space-y-6">
          <div className="flex items-center space-x-3 text-white font-mono text-xs uppercase tracking-wider">
            <span className="text-indigo-400">04 //</span>
            <span>Video Introduction</span>
          </div>

          <div className="bg-[#12141a]/60 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Quick Pitch & Engineering Walkthrough
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  A brief overview of my background, technical stack, and key AI & software projects.
                </p>
              </div>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono self-start">
                <Video className="w-3.5 h-3.5" />
                <span>60s Intro</span>
              </span>
            </div>

            {/* Video Player Container */}
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-[#0b0c10] border border-white/10">
              {YOUTUBE_EMBED_URL ? (
                <iframe
                  src={YOUTUBE_EMBED_URL}
                  title="MD. Sadman Islam Shams — Video Introduction"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  controls
                  preload="metadata"
                  poster="/profile.png"
                  className="w-full h-full object-cover"
                >
                  <source src={LOCAL_VIDEO_SRC} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-6">
          <div className="flex items-center space-x-3 text-white font-mono text-xs uppercase tracking-wider">
            <span className="text-indigo-400">05 //</span>
            <span>Let's Connect</span>
          </div>

          <div className="bg-[#12141a]/60 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Have a project or opportunity?</h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">Feel free to reach out directly via email or phone.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {/* Email Card */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                <div className="flex items-center space-x-3 overflow-hidden">
                  <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                  <a href="mailto:sadmanshams5000@gmail.com" className="text-xs font-mono text-zinc-300 hover:text-white truncate">
                    sadmanshams5000@gmail.com
                  </a>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors shrink-0"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                <div className="flex items-center space-x-3 overflow-hidden">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href="tel:+8801783858574" className="text-xs font-mono text-zinc-300 hover:text-white">
                    +880 1783858574
                  </a>
                </div>
                <button
                  onClick={copyPhone}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors shrink-0"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 max-w-4xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-2">
        <span>© {new Date().getFullYear()} MD. Sadman Islam Shams</span>
        <span>Built with React & Tailwind CSS</span>
      </footer>

    </div>
  );
}