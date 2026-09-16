import { useEffect, useMemo, useState } from "react";
import { projects } from "../data";

const filters = [
  { id: "all", label: "All work" },
  { id: "astitva", label: "Astitva" },
  { id: "prospect", label: "Prospect Engine" },
];

function getCompanyKey(company) {
  return company.toLowerCase().includes("astitva") ? "astitva" : "prospect";
}

export default function Work() {
  const [filter, setFilter] = useState("all");
  const [openId, setOpenId] = useState(null);
  const [animKey, setAnimKey] = useState(0);

  const visible = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((project) => getCompanyKey(project.company) === filter);
  }, [filter]);

  useEffect(() => {
    setOpenId(null);
    setAnimKey((k) => k + 1);
  }, [filter]);

  return (
    <section id="work" className="section work">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Selected work</p>
          <h2>Projects with measurable ownership</h2>
          <p className="section-lead">
            Filter by company, then open a project to read the exact contributions I owned.
          </p>
        </div>

        <div className="filter-bar" role="tablist" aria-label="Filter projects">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={filter === item.id}
              className={`filter-chip${filter === item.id ? " is-active" : ""}`}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="project-list" key={animKey}>
          {visible.map((project, index) => {
            const isOpen = openId === project.index;
            return (
              <article
                key={project.index}
                className={`project-row tone-${project.tone}${isOpen ? " is-open" : ""}`}
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <button
                  type="button"
                  className="project-toggle"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? null : project.index)}
                >
                  <div className="project-meta">
                    <span className="project-index">{project.index}</span>
                    <span className="project-company">{project.company}</span>
                  </div>
                  <div className="project-main">
                    <p className="work-role">{project.role}</p>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <ul className="tags">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                  <span className="project-action">
                    <span>{isOpen ? "Hide details" : "View details"}</span>
                    <svg
                      className="chevron"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 6.5 8 10.5 12 6.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                <div className={`project-details${isOpen ? " is-open" : ""}`}>
                  <div className="project-details-inner">
                    <p className="details-label">Key contributions</p>
                    <ul className="contrib">
                      {project.contributions.map((item, i) => (
                        <li key={item} style={{ transitionDelay: isOpen ? `${120 + i * 60}ms` : "0ms" }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
