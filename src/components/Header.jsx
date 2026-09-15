import { useEffect, useState } from "react";
import { contact, navLinks } from "../data";
import { IconDownload } from "./Icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container header-inner">
        <a className="logo" href="#home" onClick={close}>
          Sajjat<span>.</span>
        </a>

        <button
          className={`nav-toggle${open ? " is-open" : ""}`}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav${open ? " is-open" : ""}`} aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a
            className="btn btn-primary btn-sm btn-icon header-cta"
            href={contact.cv}
            target="_blank"
            rel="noopener noreferrer"
            download
            onClick={close}
          >
            <IconDownload />
            <span>CV</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
