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
        <div className="section-head">
          <p className="eyebrow">Capabilities</p>
          <h2>Where I create the most leverage</h2>
          <p className="section-lead">
            Not generic services — the product surfaces I repeatedly own and ship.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.title} className="service-card">
                <div className="service-top">
                  <div className="service-icon">
                    <Icon />
                  </div>
                  <span className="service-num">0{index + 1}</span>
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
