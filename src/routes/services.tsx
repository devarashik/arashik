import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Code2, LayoutTemplate, Target, ShoppingBag, Wrench, Bug, Server, Smartphone, Search, Sparkles, Check } from "lucide-react";
import { ContactPanel } from "@/components/ContactPanel";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — WordPress, Elementor & AI Web Development" },
      { name: "description", content: "WordPress, Elementor, WooCommerce, Laravel, landing pages, SEO and AI-assisted development services for businesses worldwide." },
      { property: "og:title", content: "Services by Md. Ashikur Rahman" },
      { property: "og:description", content: "Premium web development services tailored for businesses, startups, and agencies." },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Code2,
    title: "WordPress Website Development",
    desc: "Custom WordPress builds — fast, secure, easy to manage.",
    tech: ["WordPress", "ACF", "Custom Themes"],
    benefit: "Own a scalable site you can update without a developer.",
  },
  {
    icon: LayoutTemplate,
    title: "Elementor Pro Page Building",
    desc: "Pixel-perfect pages with reusable templates & global styles.",
    tech: ["Elementor Pro", "Custom CSS", "Global Kits"],
    benefit: "Launch faster with a brand-consistent design system.",
  },
  {
    icon: Target,
    title: "Landing Page Development",
    desc: "High-converting pages engineered for ads & campaigns.",
    tech: ["Elementor", "A/B Ready", "Speed Optimized"],
    benefit: "Turn more visitors into customers and leads.",
  },
  {
    icon: ShoppingBag,
    title: "WooCommerce Store Setup",
    desc: "Complete online stores with payments, shipping & checkout.",
    tech: ["WooCommerce", "Stripe", "PayPal"],
    benefit: "Start selling online with a reliable, scalable store.",
  },
  {
    icon: Wrench,
    title: "Website Customization",
    desc: "Theme, plugin & layout customization to match your brand.",
    tech: ["PHP", "CSS", "JavaScript"],
    benefit: "Stand out with a unique site that reflects your brand.",
  },
  {
    icon: Bug,
    title: "Bug Fixing & Maintenance",
    desc: "Resolve errors, conflicts & security issues quickly.",
    tech: ["Debugging", "Backups", "Updates"],
    benefit: "Keep your site running smoothly with zero downtime.",
  },
  {
    icon: Server,
    title: "Laravel Web Development",
    desc: "Custom web apps and dashboards built with Laravel.",
    tech: ["Laravel", "MySQL", "REST APIs"],
    benefit: "Robust, tailored applications built around your workflow.",
  },
  {
    icon: Smartphone,
    title: "Responsive Web Design",
    desc: "Flawless layouts on desktop, tablet, and mobile devices.",
    tech: ["Mobile-First", "Tailwind", "CSS Grid"],
    benefit: "Reach every customer on every device.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Technical SEO setup, schema, speed & on-page optimization.",
    tech: ["Yoast", "Schema", "Core Web Vitals"],
    benefit: "Rank higher and attract organic traffic that converts.",
  },
  {
    icon: Sparkles,
    title: "AI-Assisted Development",
    desc: "Faster delivery using Cursor, Claude & GitHub Copilot.",
    tech: ["Cursor", "Claude AI", "Copilot"],
    benefit: "Get production-ready websites in record time.",
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "Understanding your goals, audience & requirements." },
  { step: "02", title: "Design", desc: "Wireframes & visual direction aligned with your brand." },
  { step: "03", title: "Development", desc: "Pixel-perfect, responsive build with best practices." },
  { step: "04", title: "Launch & Support", desc: "Deployment, training, and ongoing maintenance." },
];

function Services() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero-glow">
        <div className="mx-auto max-w-4xl px-4 py-20 md:py-28 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Services</p>
          <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-[1.05]">
            Services that <span className="text-gradient">scale</span> your business
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            From WordPress builds to AI-powered custom development —
            everything you need to launch, grow, and maintain a high-performing web presence.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group glass rounded-2xl p-7 hover:-translate-y-1 hover:shadow-glow transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <s.icon size={20} />
                </div>
                <span className="text-xs font-semibold text-muted-foreground">0{(i % 9) + 1}</span>
              </div>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {s.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-secondary text-xs font-medium">{t}</span>
                ))}
              </div>

              <div className="mt-5 pt-5 border-t border-border flex items-start gap-2 text-sm">
                <Check size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground"><span className="text-foreground font-medium">Benefit: </span>{s.benefit}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">How we work</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">A simple, <span className="text-gradient">transparent</span> process</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {process.map((p) => (
            <div key={p.step} className="glass rounded-2xl p-7">
              <div className="text-4xl font-display font-bold text-gradient">{p.step}</div>
              <h3 className="mt-3 text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4">
        <div className="glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-glow opacity-60 pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold">Have a project in mind?</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Let's turn your idea into a website that performs. Get a free quote within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="mailto:arashik2197@gmail.com" className="rounded-xl bg-gradient-primary px-7 py-3 font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition">
                Start a Project
              </a>
              <a href="https://wa.me/8801303759144" className="rounded-xl glass px-7 py-3 font-semibold hover:bg-secondary transition">
                WhatsApp Me
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactPanel />
    </>
  );
}
