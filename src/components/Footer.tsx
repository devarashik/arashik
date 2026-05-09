import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display font-bold text-xl">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">A</span>
            Md. Ashikur Rahman
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            Web Developer · WordPress & Elementor Specialist · AI-Assisted Development.
            Crafting high-conversion business websites for clients worldwide.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-6 inline-flex items-center gap-2 text-sm text-primary hover:opacity-80"
          >
            <ArrowUp size={16} /> Back to top
          </button>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><a href="mailto:arashik2197@gmail.com" className="flex items-center gap-2 hover:text-foreground"><Mail size={14}/> arashik2197@gmail.com</a></li>
            <li><a href="https://wa.me/8801303759144" className="flex items-center gap-2 hover:text-foreground"><Phone size={14}/> +880 1303 759144</a></li>
            <li className="flex items-center gap-2"><MapPin size={14}/> Bogura, Bangladesh</li>
            <li><a href="https://www.linkedin.com/in/arashik2198" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-foreground"><Linkedin size={14}/> LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Md. Ashikur Rahman. Crafted with precision.
      </div>
    </footer>
  );
}
