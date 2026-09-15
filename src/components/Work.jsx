import { projects } from "../data";
import Reveal from "./Reveal";

export default function Work() {
  return (
    <section id="work" className="section work">
      <div className="section-head">
        <p className="eyebrow">Portfolio</p>
        <h2>Selected Projects</h2>
        <p className="section-lead">
          Logistics SaaS at Astitva, plus automation and AI platforms at Prospect Engine LLC.
        </p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <Reveal key={project.index} as="article" className={`portfolio-card tone-${project.tone}`}>
            <div className="portfolio-cover">
              <span className="portfolio-index">{project.index}</span>
              <span className="portfolio-company">{project.company}</span>
            </div>
            <div className="portfolio-body">
              <p className="work-role">{project.role}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul className="tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
