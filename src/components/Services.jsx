import { services } from "../data";
import Reveal from "./Reveal";
import { IconAi, IconAutomation, IconMobile, IconSaas } from "./Icons";

const icons = {
  saas: IconSaas,
  mobile: IconMobile,
  automation: IconAutomation,
  ai: IconAi,
};

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-head center">
          <p className="eyebrow">Services</p>
          <h2>What I offer</h2>
          <p className="section-lead">
            Website, app, and platform engineering for SaaS, mobile, automation, and AI.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.title} className="service-card">
                <div className="service-icon">
                  <Icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
