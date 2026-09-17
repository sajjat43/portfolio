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

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow reveal">Senior Software Engineer · Dhaka</p>
          <h1 className="hero-brand reveal">Sajjat Hossain</h1>
          <p className="hero-title reveal delay-1">
            I design and ship production SaaS, automation platforms, and AI systems.
          </p>
          <p className="hero-lead reveal delay-2">
            Currently building TruckAll at Astitva. Previously shipped recruitment automation
            and conversational AI at Prospect Engine LLC — end to end, from API to interface.
          </p>
          <div className="hero-actions reveal delay-3">
            <a className="btn btn-primary btn-icon" href="#work">
              <IconWork />
              <span>Explore work</span>
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
              <span>Contact</span>
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
          <figure className="portrait">
            <img src={profileImage} alt="Sajjat Hossain" className="hero-photo" />
            <figcaption className="portrait-caption">
              <strong>Available for roles</strong>
              <span>Full-stack · SaaS · AI</span>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="container">
        <div className="stats-row">
          {stats.map((stat) => (
            <Reveal key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label} </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
