import React from "react";
import CSS from "../public/images/skills/css.svg";
import Flask from "../public/images/skills/flask.svg";
import HTML from "../public/images/skills/html.svg";
import JavaScript from "../public/images/skills/javascript.svg";
import Next from "../public/images/skills/nextjs.svg";
import PostgreSQL from "../public/images/skills/postgresql.svg";
import Python from "../public/images/skills/python.svg";
import react from "../public/images/skills/react.svg";
import SQL from "../public/images/skills/sql.svg";
import TypeScript from "../public/images/skills/typescript.svg";
import Tailwind from "../public/images/skills/tailwind.svg";
import SkillCard from "./SkillCard";

function Skills() {
  const languages = {
    HTML,
    CSS,
    JavaScript,
    TypeScript,
    Python,
    SQL,
  };

  const frameworks = {
    Tailwind,
    React: react,
    Next,
    Flask,
    PostgreSQL,
  };

  return (
    <div className={`mx-auto w-11/12 overflow-hidden transition-all duration-500`}>
      <div className="mb-2 flex flex-col items-center">
        <h2 className="mb-2 text-xl underline">Languages</h2>
        <div className="flex w-10/12 flex-wrap justify-center gap-3">
          {Object.entries(languages).map(([name, image], index) => (
            <SkillCard key={index} skill={name} image={image} />
          ))}
        </div>
      </div>
      <div className="mb-2 flex flex-col items-center">
        <h2 className="mb-2 text-xl underline">Frameworks</h2>
        <div className="flex w-10/12 flex-wrap justify-center gap-3">
          {Object.entries(frameworks).map(([name, image], index) => (
            <SkillCard key={index} skill={name} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
