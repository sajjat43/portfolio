import { contact, personalInfo, profileImage } from "../data";
import Reveal from "./Reveal";
import { IconDownload, IconWhatsApp } from "./Icons";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-head">
        <p className="eyebrow">About Me</p>
        <h2>Biography</h2>
      </div>

      <div className="about-layout">
        <Reveal className="about-photo-wrap">
          <img src={profileImage} alt="Sajjat Hossain" className="about-photo" />
        </Reveal>

        <div className="about-copy">
          <h3>Senior Software Engineer specializing in SaaS &amp; AI</h3>
          <p>
            I’m Sajjat Hossain. I build scalable SaaS products, automation platforms, and
            AI-powered solutions — from TruckAll at Astitva to recruitment systems and
            conversational agents at Prospect Engine LLC.
          </p>

          <ul className="info-list">
            {personalInfo.map((item) => (
              <li key={item.label}>
                <span>{item.label}</span>
                {item.href ? <a href={item.href}>{item.value}</a> : <strong>{item.value}</strong>}
              </li>
            ))}
          </ul>

          <div className="about-actions">
            <a
              className="btn btn-primary btn-icon"
              href={contact.cv}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <IconDownload />
              <span>Download CV</span>
            </a>
            <a
              className="btn btn-ghost btn-icon"
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsApp />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
