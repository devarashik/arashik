import { Mail, Phone, MapPin, Linkedin, MessageCircle } from "lucide-react";

const items = [
  { icon: Mail, label: "Email", value: "arashik2197@gmail.com", href: "mailto:arashik2197@gmail.com", cta: "Send email" },
  { icon: MessageCircle, label: "WhatsApp", value: "+880 1303 759144", href: "https://wa.me/8801303759144", cta: "Chat now" },
  { icon: Phone, label: "Phone", value: "+880 1303 759144", href: "tel:+8801303759144", cta: "Call" },
  { icon: Linkedin, label: "LinkedIn", value: "arashik2198", href: "https://www.linkedin.com/in/arashik2198", cta: "Connect" },
];

export function ContactPanel() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Let's talk</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold">Ready to build something <span className="text-gradient">remarkable</span>?</h2>
        <p className="mt-4 text-muted-foreground">Reach out directly — I respond within 24 hours.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((it) => (
          <a
            key={it.label}
            href={it.href}
            target={it.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group glass rounded-2xl p-6 hover:-translate-y-1 hover:shadow-glow transition-all"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground mb-5">
              <it.icon size={20} />
            </div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">{it.label}</p>
            <p className="mt-1 font-semibold break-all">{it.value}</p>
            <p className="mt-4 text-sm text-primary group-hover:opacity-80 inline-flex items-center gap-1">
              {it.cta} →
            </p>
          </a>
        ))}
      </div>
      <div className="mt-10 glass rounded-2xl p-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <MapPin size={16} className="text-primary" /> Based in Bogura, Bangladesh — Available for remote work worldwide
      </div>
    </section>
  );
}
