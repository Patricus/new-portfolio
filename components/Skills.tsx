import React from "react";
import CSS from "../public/images/skills/css.svg";
import Flask from "../public/images/skills/flask.svg";
import HTML from "../public/images/skills/html.svg";
import JavaScript from "../public/images/skills/javascript.svg";
import Nest from "../public/images/skills/nestjs.svg";
import Next from "../public/images/skills/nextjs.svg";
import PostgreSQL from "../public/images/skills/postgresql.svg";
import Python from "../public/images/skills/python.svg";
import react from "../public/images/skills/react.svg";
import SQL from "../public/images/skills/sql.svg";
import TypeScript from "../public/images/skills/typescript.svg";
import Tailwind from "../public/images/skills/tailwind.svg";
import SkillCard from "./SkillCard";

function Skills() {
    const skills = {
        HTML,
        CSS,
        JavaScript,
        TypeScript,
        Python,
        SQL,
        Tailwind,
        React: react,
        Next,
        Nest,
        Flask,
        PostgreSQL,
    };

    return (
        <div
            className={`mx-auto flex w-11/12 flex-wrap justify-center gap-2 overflow-hidden transition-all duration-500`}>
            {Object.entries(skills).map(([name, image], index) => (
                <SkillCard key={index} skill={name} image={image} />
            ))}
        </div>
    );
}

export default Skills;
