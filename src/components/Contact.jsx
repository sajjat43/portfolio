import { contact } from "../data";
import Reveal from "./Reveal";
import {
  IconDownload,
  IconGithub,
  IconLinkedIn,
  IconMail,
  IconPhone,
  IconWhatsApp,
} from "./Icons";

const links = [
  { href: `mailto:${contact.email}`, label: contact.email, icon: IconMail, primary: true },
  { href: contact.phoneHref, label: contact.phone, icon: IconPhone },
  { href: contact.whatsapp, label: "WhatsApp", icon: IconWhatsApp, external: true },
  { href: contact.cv, label: "Download CV", icon: IconDownload, external: true, download: true },
  { href: contact.github, label: "GitHub", icon: IconGithub, external: true },
  { href: contact.linkedin, label: "LinkedIn", icon: IconLinkedIn, external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-head center">
          <p className="eyebrow">Contact</p>
          <h2>Let’s work together</h2>
          <p className="section-lead">
            Open to senior full-stack, SaaS, and AI engineering roles — or product collaborations.
          </p>
        </div>

        <Reveal className="contact-panel">
          <div className="contact-actions">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  className={`btn btn-icon ${link.primary ? "btn-primary" : "btn-ghost"}`}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  download={link.download || undefined}
                >
                  <Icon />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
