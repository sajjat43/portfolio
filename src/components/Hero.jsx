import { contact } from "../data";
import { IconDownload, IconMessage, IconWork } from "./Icons";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-visual" aria-hidden="true">
        <div className="hero-plane" />
        <div className="hero-orb hero-orb--a" />
        <div className="hero-orb hero-orb--b" />
        <div className="hero-grid" />
        <div className="hero-route" />
      </div>

      <div className="hero-copy">
        <p className="hero-brand reveal">Sajjat Hossain</p>
        <p className="hero-role reveal delay-1">Senior Software Engineer</p>
        <h1 className="hero-title reveal delay-1">
          Scalable SaaS, automation, and AI-powered products.
        </h1>
        <p className="hero-lead reveal delay-2">
          Full-Stack Development · SaaS · React · Laravel · TypeScript · AI — building
          business platforms, cross-platform apps, and intelligent workflows.
        </p>
        <div className="hero-actions reveal delay-3">
          <a className="btn btn-primary btn-icon" href="#work">
            <IconWork />
            <span>See selected work</span>
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
            <span>Get in touch</span>
          </a>
        </div>
      </div>
    </section>
  );
}
