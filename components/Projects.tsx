import React from "react";
import ProjectCard from "./ProjectCard";
import coffeePosts from "../public/images/projects/coffeePosts.jpeg";

function Projects() {
    const projects = [
        {
            name: "Project 1",
            image: coffeePosts,
            description: "This is a description of project 1",
            frontend: "React",
            backend: "Flask",
            database: "PostgreSQL",
            liveLink: "https://www.google.com",
            repoLink: "https://www.google.com",
        },
    ];
    return (
        <div
            className={`mx-auto flex w-11/12 flex-wrap justify-center gap-2 overflow-hidden transition-all duration-500`}>
            {projects.map((project, index) => (
                <ProjectCard {...project} key={index} />
            ))}
        </div>
    );
}

export default Projects;
