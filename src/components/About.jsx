import { contact, personalInfo, profileImage } from "../data";
import Reveal from "./Reveal";
import { IconDownload, IconWhatsApp } from "./Icons";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">About</p>
          <h2>Engineer first. Product minded.</h2>
        </div>

        <div className="about-layout">
          <Reveal className="about-photo-wrap">
            <img src={profileImage} alt="Sajjat Hossain" className="about-photo" />
          </Reveal>

          <div className="about-copy">
            <p>
              I’m Sajjat Hossain, a Senior Software Engineer who builds scalable SaaS products,
              automation platforms, and AI-powered systems. I care about clean architecture,
              reliable delivery, and interfaces people can actually use under pressure.
            </p>
            <p>
              At Astitva I work on TruckAll — fleet, dispatch, compliance, and real-time ops.
              At Prospect Engine LLC I shipped LinkedIn automation, recruitment workflows, and
              Email/WhatsApp AI agents.
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
      </div>
    </section>
  );
}
