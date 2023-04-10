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
import SkillCard from "./SkillCard";

function Skills({ selected }: { selected: boolean }) {
    const skills = {
        HTML,
        CSS,
        JavaScript,
        TypeScript,
        Python,
        SQL,
        React: react,
        Next,
        Nest,
        Flask,
        PostgreSQL,
    };

    return (
        <div
            className={`${
                selected ? "max-h-128" : "max-h-0"
            } mx-auto flex w-3/4  flex-wrap justify-center gap-2 overflow-hidden transition-all duration-500`}>
            {Object.entries(skills).map(([name, image], index) => (
                <SkillCard key={index} skill={name} image={image} />
            ))}
        </div>
    );
}

export default Skills;
