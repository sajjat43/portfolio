import { useEffect, useRef, useState } from "react";
import { skillBars, skillGroups } from "../data";
import Reveal from "./Reveal";

function SkillBar({ skill }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="skill-bar">
      <div className="skill-bar-top">
        <span>{skill.name}</span>
        <strong>{skill.level}%</strong>
      </div>
      <div className="skill-track">
        <span
          className="skill-fill"
          style={{ width: visible ? `${skill.level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

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
              <SkillBar key={skill.name} skill={skill} />
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
