import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Sparkles, Globe, Zap, Code2, ShoppingCart, LayoutTemplate, Palette, Plug, Server, Smartphone, Search, Wrench } from "lucide-react";
import heroImg from "@/assets/ashik-hero.jpeg";
import { Typewriter } from "@/components/Typewriter";
import { ContactPanel } from "@/components/ContactPanel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Md. Ashikur Rahman — WordPress & Elementor Web Developer" },
      { name: "description", content: "Premium WordPress, Elementor & AI-assisted web development. Hire Ashik for high-converting business websites." },
      { property: "og:title", content: "Md. Ashikur Rahman — WordPress & Elementor Specialist" },
      { property: "og:description", content: "3+ years building responsive, conversion-focused business websites with WordPress, Elementor & AI tools." },
    ],
  }),
  component: Home,
});

const expertise = [
  { icon: Code2, title: "WordPress Development", desc: "Custom themes, ACF, performance-tuned builds." },
  { icon: LayoutTemplate, title: "Elementor Pro", desc: "Pixel-perfect page building & custom widgets." },
  { icon: ShoppingCart, title: "WooCommerce", desc: "Full-featured stores with payment & shipping." },
  { icon: Palette, title: "Landing Page Design", desc: "High-conversion pages built to sell." },
  { icon: Wrench, title: "Theme Customization", desc: "Tailor any theme to your exact brand." },
  { icon: Plug, title: "Plugin Integration", desc: "Seamless 3rd-party tools & APIs." },
  { icon: Server, title: "Laravel Development", desc: "Robust backend & custom web apps." },
  { icon: Smartphone, title: "Responsive Design", desc: "Flawless on every device & screen." },
  { icon: Search, title: "SEO Optimization", desc: "Built-in best practices for ranking." },
  { icon: Sparkles, title: "AI-Assisted Workflow", desc: "Faster delivery powered by AI tools." },
];

const stats = [
  { num: "3+", label: "Years Experience" },
  { num: "50+", label: "Projects Delivered" },
  { num: "20+", label: "International Clients" },
  { num: "100%", label: "Responsive Builds" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-glow">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Available for new projects
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05]">
              Md. Ashikur <span className="text-gradient">Rahman</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-muted-foreground">
              Web Developer · WordPress & Elementor Specialist · AI-Assisted Development
            </p>
            <div className="mt-6 text-xl md:text-2xl font-display font-semibold h-8">
              I'm a <Typewriter words={["WordPress Developer", "Elementor Expert", "Landing Page Specialist", "Responsive Web Designer", "AI-Assisted Web Developer"]} />
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="mailto:dev.arashik@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition">
                Hire Me <ArrowRight size={18} />
              </a>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 font-semibold hover:bg-secondary transition">
                View Services
              </Link>
              <a href="https://wa.me/8801303759144" className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-semibold hover:bg-secondary transition">
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md animate-float">
              <div className="absolute -inset-6 bg-gradient-primary opacity-30 blur-3xl rounded-full" />
              <div className="relative glass rounded-3xl p-3 shadow-glow">
                <img src={heroImg} alt="Md. Ashikur Rahman" className="w-full rounded-2xl object-cover aspect-[4/3]" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl px-5 py-3 shadow-card">
                <p className="text-xs text-muted-foreground">Currently at</p>
                <p className="font-semibold">Vista Web</p>
              </div>
              <div className="absolute -top-4 -right-4 glass rounded-2xl px-5 py-3 shadow-card">
                <p className="text-xs text-muted-foreground">Clients in</p>
                <p className="font-semibold">10+ Countries</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-4 mt-8">
        <div className="glass rounded-3xl grid grid-cols-2 md:grid-cols-4 divide-x divide-border overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="p-8 text-center">
              <p className="text-4xl md:text-5xl font-display font-bold text-gradient">{s.num}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: Briefcase, title: "3+ Years Experience", desc: "Delivering professional web solutions for global clients." },
            { icon: Globe, title: "International Client Experience", desc: "Worked with businesses across 10+ countries remotely." },
            { icon: Zap, title: "AI-Powered Workflow", desc: "Cursor, Claude & Copilot for faster, cleaner code." },
          ].map((h) => (
            <div key={h.title} className="glass rounded-2xl p-7 hover:-translate-y-1 transition">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground mb-4">
                <h.icon size={20} />
              </div>
              <h3 className="text-xl font-semibold">{h.title}</h3>
              <p className="mt-2 text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Featured Expertise</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">What I bring to your <span className="text-gradient">project</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {expertise.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="glass rounded-2xl p-5 hover:shadow-glow hover:-translate-y-1 transition-all"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-secondary text-primary mb-3">
                <e.icon size={18} />
              </div>
              <h3 className="font-semibold">{e.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <ContactPanel />
    </>
  );
}
