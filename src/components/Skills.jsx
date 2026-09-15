import { skillBars, skillGroups } from "../data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head center">
          <p className="eyebrow">Skills</p>
          <h2>Technical expertise</h2>
        </div>

        <div className="skills-layout">
          <div className="skill-bars">
            {skillBars.map((skill) => (
              <Reveal key={skill.name} className="skill-bar">
                <div className="skill-bar-top">
                  <span>{skill.name}</span>
                  <strong>{skill.level}%</strong>
                </div>
                <div className="skill-track">
                  <span className="skill-fill" style={{ width: `${skill.level}%` }} />
                </div>
              </Reveal>
            ))}
          </div>

          <div className="skill-groups">
            {skillGroups.map((group) => (
              <Reveal key={group.title} className="skill-group">
                <h3>{group.title}</h3>
                <ul className="skill-rail">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
