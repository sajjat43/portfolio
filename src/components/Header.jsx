import { useEffect, useState } from "react";
import { contact, navLinks } from "../data";
import { IconDownload } from "./Icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.slice(1));

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 10);
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      let current = "#home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 120) current = `#${id}`;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container header-inner">
        <a className="logo" href="#home" onClick={close}>
          Sajjat Hossain
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
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? "is-active" : undefined}
              onClick={close}
            >
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
      <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
    </header>
  );
}
