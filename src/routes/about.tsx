import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Download, GraduationCap, Briefcase, Code2, Wrench, Users } from "lucide-react";
import aboutImg from "@/assets/ashik-about.jpeg";
import { ContactPanel } from "@/components/ContactPanel";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Md. Ashikur Rahman | WordPress Developer" },
      { name: "description", content: "Results-driven web developer specializing in WordPress, Elementor, Laravel & AI-assisted development. Based in Bangladesh, serving clients globally." },
      { property: "og:title", content: "About Md. Ashikur Rahman" },
      { property: "og:description", content: "3+ years of WordPress, Elementor & responsive web development experience." },
    ],
  }),
  component: About,
});

const experience = [
  {
    company: "Vista Web",
    role: "Web Developer",
    period: "Nov 2025 – Present",
    points: [
      "Develop and maintain modern business websites end-to-end",
      "Build international client landing pages focused on conversion",
      "Improve delivery workflows with AI-powered coding tools",
      "Responsive frontend customization across all breakpoints",
    ],
  },
  {
    company: "Mediseba, Bangladesh",
    role: "Web Developer",
    period: "Feb 2023 – Sep 2025",
    points: [
      "WordPress development for healthcare and business clients",
      "Elementor Pro customization and reusable template systems",
      "Premium theme integration and brand-specific overrides",
      "Plugin integration and business website performance tuning",
    ],
  },
];

const skills = {
  "Web Development": ["WordPress", "Elementor Pro", "WooCommerce", "HTML5", "CSS3", "JavaScript", "Laravel", "Responsive Design"],
  "Tools & AI": ["Cursor", "Claude AI", "GitHub Copilot", "SEO Optimization", "Theme Customization", "Plugin Management"],
  "Professional": ["Remote Collaboration", "Website Maintenance", "Bug Fixing", "Conversion Optimization", "Digital Marketing Support"],
};

const skillBars = [
  { label: "WordPress & Elementor", val: 95 },
  { label: "Responsive Design", val: 92 },
  { label: "WooCommerce", val: 88 },
  { label: "Laravel / PHP", val: 80 },
  { label: "AI-Assisted Workflow", val: 90 },
];

const categoryIcons: Record<string, typeof Code2> = {
  "Web Development": Code2,
  "Tools & AI": Wrench,
  "Professional": Users,
};

function About() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero-glow">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-[1fr_1.4fr] gap-12 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary opacity-25 blur-3xl rounded-full" />
              <div className="relative glass rounded-3xl p-3 shadow-glow">
                <img src={aboutImg} alt="Md. Ashikur Rahman portrait" className="w-full rounded-2xl object-cover aspect-square" />
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">About Me</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">
              Crafting <span className="text-gradient">conversion-focused</span> websites for modern businesses.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              I'm a results-driven web developer with 3+ years of hands-on experience building
              WordPress sites, Elementor pages, WooCommerce stores, and Laravel applications.
              I blend pixel-perfect design with an AI-powered workflow to ship faster — without
              compromising quality.
            </p>
            <p className="mt-4 text-muted-foreground">
              From Bogura, Bangladesh, I collaborate remotely with agencies, startups, and
              business owners across the world to deliver websites that convert.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:dev.arashik@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow">
                Work With Me
              </a>
              <button className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 font-semibold hover:bg-secondary transition">
                <Download size={18} /> Download CV
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section className="mx-auto max-w-5xl px-4 py-20">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Experience</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Professional <span className="text-gradient">journey</span></h2>
        </div>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
          {experience.map((e, i) => (
            <motion.div
              key={e.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative mb-10 md:w-1/2 ${i % 2 === 0 ? "md:pr-10" : "md:ml-auto md:pl-10"} pl-12 md:pl-0`}
            >
              <div className={`absolute top-6 ${i % 2 === 0 ? "md:-right-2" : "md:-left-2"} left-2 md:left-auto h-4 w-4 rounded-full bg-gradient-primary shadow-glow`} />
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                  <Briefcase size={14} /> {e.period}
                </div>
                <h3 className="mt-2 text-xl font-bold">{e.role}</h3>
                <p className="text-muted-foreground">{e.company}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-2"><span className="text-primary mt-1">▸</span>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="glass rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground">
            <GraduationCap size={26} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Education</p>
            <h3 className="mt-2 text-2xl font-bold">B.Sc in Civil Engineering</h3>
            <p className="text-muted-foreground">Bangladesh Army University of Engineering and Technology (BAUET)</p>
            <p className="mt-1 text-sm text-muted-foreground">Graduated: 2021</p>
          </div>
        </div>
      </section>

      {/* SKILL BARS */}
      <section className="mx-auto max-w-5xl px-4 py-20">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Proficiency</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Core <span className="text-gradient">strengths</span></h2>
        </div>
        <div className="space-y-5">
          {skillBars.map((s) => (
            <div key={s.label}>
              <div className="flex justify-between text-sm font-medium mb-2">
                <span>{s.label}</span>
                <span className="text-primary">{s.val}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.val}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS GRID */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid md:grid-cols-3 gap-5">
          {Object.entries(skills).map(([cat, list]) => {
            const Icon = categoryIcons[cat];
            return (
              <div key={cat} className="glass rounded-2xl p-7">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-bold">{cat}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {list.map((s) => (
                    <span key={s} className="px-3 py-1.5 rounded-full bg-secondary text-sm">{s}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <ContactPanel />
    </>
  );
}
