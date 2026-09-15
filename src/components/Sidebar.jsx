import { useState } from "react";
import { contact, navLinks, profileImage } from "../data";
import { IconDownload, IconGithub, IconLinkedIn, IconWhatsApp } from "./Icons";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
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

      <div
        className={`sidebar-backdrop${open ? " is-open" : ""}`}
        onClick={close}
        aria-hidden="true"
      />

      <aside className={`sidebar${open ? " is-open" : ""}`}>
        <div className="sidebar-profile">
          <img src={profileImage} alt="Sajjat Hossain" className="sidebar-avatar" />
          <h1 className="sidebar-name">Sajjat Hossain</h1>
          <p className="sidebar-role">Senior Software Engineer</p>
        </div>

        <nav className="sidebar-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="sidebar-social">
          <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <IconGithub />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <IconLinkedIn />
          </a>
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <IconWhatsApp />
          </a>
        </div>

        <a
          className="btn btn-primary btn-icon sidebar-cv"
          href={contact.cv}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <IconDownload />
          <span>Download CV</span>
        </a>
      </aside>
    </>
  );
}
