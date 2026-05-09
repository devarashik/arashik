import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={`glass flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
            scrolled ? "shadow-card" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
              A
            </span>
            <span className="hidden sm:inline">
              A R Ashik<span className="text-gradient">.</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition rounded-lg hover:bg-secondary/50"
                activeProps={{ className: "px-4 py-2 text-sm font-medium text-foreground rounded-lg bg-secondary" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <a
            href="mailto:dev.arashik@gmail.com"
            className="hidden md:inline-flex items-center rounded-xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition"
          >
            Hire Me
          </a>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg hover:bg-secondary text-sm font-medium"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="mailto:dev.arashik@gmail.com"
              className="mt-2 text-center rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
