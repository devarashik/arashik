import { MessageCircle, Mail } from "lucide-react";

export function StickyContact() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/8801303759144"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="grid h-13 w-13 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:scale-110 transition p-3"
      >
        <MessageCircle size={22} />
      </a>
      <a
        href="mailto:arashik2197@gmail.com"
        aria-label="Email"
        className="grid h-13 w-13 place-items-center rounded-full glass hover:scale-110 transition p-3"
      >
        <Mail size={20} />
      </a>
    </div>
  );
}
