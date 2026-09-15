import { contact } from "../data";
import Reveal from "./Reveal";
import {
  IconDownload,
  IconMail,
  IconPhone,
  IconWhatsApp,
} from "./Icons";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="about-grid">
        <div className="about-copy">
          <p className="eyebrow">About</p>
          <h2>Senior Software Engineer specializing in SaaS &amp; AI.</h2>
          <p>
            I’m Sajjat Hossain. I build scalable SaaS products, business automation platforms,
            cross-platform applications, and AI-powered solutions — from fleet operations at
            Astitva to recruitment automation and conversational agents at Prospect Engine LLC.
          </p>
          <p>
            My focus spans full-stack SaaS, React &amp; React Native, Laravel &amp; PHP,
            TypeScript &amp; Node.js, business automation, AI agents &amp; LLM applications, and
            cross-platform product development.
          </p>
        </div>
        <Reveal as="aside" className="about-aside">
          <dl>
            <div>
              <dt>Role</dt>
              <dd>Senior Software Engineer</dd>
            </div>
            <div>
              <dt>Current</dt>
              <dd>Astitva · TruckAll</dd>
            </div>
            <div>
              <dt>Previous</dt>
              <dd>Prospect Engine LLC</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a className="inline-icon-link" href={`mailto:${contact.email}`}>
                  <IconMail />
                  <span>{contact.email}</span>
                </a>
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a className="inline-icon-link" href={contact.phoneHref}>
                  <IconPhone />
                  <span>{contact.phone}</span>
                </a>
              </dd>
            </div>
            <div>
              <dt>WhatsApp</dt>
              <dd>
                <a
                  className="inline-icon-link"
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconWhatsApp />
                  <span>{contact.phone}</span>
                </a>
              </dd>
            </div>
            <div>
              <dt>CV</dt>
              <dd>
                <a
                  className="inline-icon-link"
                  href={contact.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <IconDownload />
                  <span>Download PDF</span>
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
