import { projects } from "../data";
import Reveal from "./Reveal";

function WorkPanel({ project }) {
  if (project.panelType === "agent") {
    return (
      <div className={`work-panel work-panel--${project.panel}`} aria-hidden="true">
        <div className="panel-label">{project.panelLabel}</div>
        <div className="panel-mock agent-mock">
          <span className="chat-bubble" />
          <span className="chat-bubble reply" />
          <span className="chat-bubble" />
        </div>
      </div>
    );
  }

  return (
    <div className={`work-panel work-panel--${project.panel}`} aria-hidden="true">
      <div className="panel-label">{project.panelLabel}</div>
      <div className="panel-mock">
        <span className="mock-line" />
        <span className="mock-line short" />
        <span className="mock-block" />
        <span className="mock-cta" />
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="section work">
      <div className="section-head">
        <p className="eyebrow">Selected work</p>
        <h2>Projects I’ve shipped</h2>
        <p className="section-lead">
          Logistics SaaS at Astitva, plus automation and AI platforms at Prospect Engine LLC.
        </p>
      </div>

      <div className="work-list">
        {projects.map((project) => (
          <Reveal key={project.index} as="article" className="work-item">
            <div className="work-meta">
              <span className="work-index">{project.index}</span>
              <span className="work-company">{project.company}</span>
            </div>
            <div className="work-body">
              <h3>{project.title}</h3>
              <p className="work-role">{project.role}</p>
              <p>{project.summary}</p>
              <ul className="contrib">
                {project.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul className="tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
            <WorkPanel project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
