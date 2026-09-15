import { useEffect, useState } from "react";
import { contact, profileImage, stats } from "../data";
import Reveal from "./Reveal";
import {
  IconDownload,
  IconGithub,
  IconLinkedIn,
  IconMessage,
  IconWhatsApp,
  IconWork,
} from "./Icons";

const roles = [
  "Senior Software Engineer",
  "Full-Stack SaaS Developer",
  "React & React Native",
  "Laravel · NestJS · AI Agents",
];

function TypeLine() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const speed = deleting ? 28 : 55;
    const pause = deleting && text === "" ? 400 : !deleting && text === current ? 1600 : speed;

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
        return;
      }
      const next = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);
      setText(next);
    }, pause);

    return () => clearTimeout(timer);
  }, [text, deleting, index]);

  return (
    <p className="hero-type">
      <span className="code-prefix">&gt;</span> {text}
      <span className="cursor" aria-hidden="true" />
    </p>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow reveal">
            <span className="code-tag">const</span> status = &quot;open_to_work&quot;;
          </p>
          <h1 className="hero-brand reveal">
            Sajjat
            <span className="hero-brand-accent"> Hossain</span>
          </h1>
          <div className="reveal delay-1">
            <TypeLine />
          </div>
          <p className="hero-title reveal delay-1">
            Crafting dark-mode ready SaaS, apps, and AI systems that ship.
          </p>
          <p className="hero-lead reveal delay-2">
            Full-stack engineer for React, React Native, Laravel, NestJS, and LLM agents —
            building products teams can trust in production.
          </p>
          <div className="hero-actions reveal delay-3">
            <a className="btn btn-primary btn-icon" href="#work">
              <IconWork />
              <span>View portfolio</span>
            </a>
            <a
              className="btn btn-ghost btn-icon"
              href={contact.cv}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <IconDownload />
              <span>Download CV</span>
            </a>
            <a className="btn btn-ghost btn-icon" href="#contact">
              <IconMessage />
              <span>Contact me</span>
            </a>
          </div>
          <div className="hero-social reveal delay-3">
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
        </div>

        <div className="hero-media reveal delay-2">
          <div className="code-window">
            <div className="code-window-bar">
              <span />
              <span />
              <span />
              <p>sajjat.profile.tsx</p>
            </div>
            <div className="code-window-body">
              <img src={profileImage} alt="Sajjat Hossain" className="hero-photo" />
              <div className="scanline" aria-hidden="true" />
              <div className="hero-badge">
                <span className="pulse-dot" />
                Available for hire
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="stats-row">
          {stats.map((stat) => (
            <Reveal key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
