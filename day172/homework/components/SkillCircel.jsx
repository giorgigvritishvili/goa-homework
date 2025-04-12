// SkillCircle.js
import React from "react";
import "./SkillCircle.css";

const skills = [
  { name: "React", level: 90 },
  { name: "CSS", level: 80 },
  { name: "JavaScript", level: 85 },
  { name: "HTML", level: 95 },
];

const SkillCircle = () => {
  return (
    <div id="skills" className="skills-container">
      {skills.map((skill, idx) => (
        <div className="circle" key={idx}>
          <svg viewBox="0 0 36 36" className="circular-chart">
            <path
              className="circle-bg"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="circle-progress"
              strokeDasharray={`${skill.level}, 100`}
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" className="percentage">
              {skill.level}%
            </text>
          </svg>
          <div className="label">{skill.name}</div>
        </div>
      ))}
    </div>
  );
};

export default SkillCircle;
