import { contact, stats } from "../data";
import Reveal from "./Reveal";
import { IconDownload, IconMessage, IconWork } from "./Icons";

export default function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="hero-banner">
        <p className="eyebrow reveal">Welcome</p>
        <h2 className="hero-heading reveal">
          Hello, I’m <span>Sajjat Hossain</span>
        </h2>
        <p className="hero-sub reveal delay-1">
          Senior Software Engineer — Full-Stack SaaS · React · Laravel · TypeScript · AI
        </p>
        <p className="hero-lead reveal delay-2">
          I build scalable SaaS products, business automation platforms, cross-platform
          applications, and AI-powered solutions used in real operations.
        </p>
        <div className="hero-actions reveal delay-3">
          <a className="btn btn-primary btn-icon" href="#work">
            <IconWork />
            <span>My Portfolio</span>
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
            <span>Hire Me</span>
          </a>
        </div>
      </div>

      <div className="stats-row">
        {stats.map((stat) => (
          <Reveal key={stat.label} className="stat-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
