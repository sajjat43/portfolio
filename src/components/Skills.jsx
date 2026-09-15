import { skillGroups } from "../data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-head">
        <p className="eyebrow">Skills</p>
        <h2>Core technical stack</h2>
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
    </section>
  );
}
