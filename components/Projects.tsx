import React from "react";
import ProjectCard from "./ProjectCard";
import bookFace from "../public/images/projects/postFeed.png";
import eventZeit from "../public/images/projects/events-top.png";
import yummies from "../public/images/projects/homePage.png";

function Projects() {
  const projects = [
    {
      name: "EventZeit",
      image: eventZeit,
      description:
        "A group project that, built in a week. We tried to cram features in like AWS S3, Google Maps, and QR codes.",
      frontend: "React",
      backend: "Flask",
      database: "PostgreSQL",
      liveLink: "https://eventzeit.onrender.com/",
      repoLink: "https://github.com/Patricus/Eventzeit",
    },
    {
      name: "BookFace",
      image: bookFace,
      description:
        "My final capstone project from App Academy. This is the culmination of progress after 6 months.",
      frontend: "React",
      backend: "Flask",
      database: "PostgreSQL",
      liveLink: "https://bookface-frwd.onrender.com/",
      repoLink: "https://github.com/Patricus/BookFace",
    },
    {
      name: "Yummies",
      image: yummies,
      description:
        "This is my first project using React. This was a major learning experience for me.",
      frontend: "React",
      backend: "Express",
      database: "PostgreSQL",
      liveLink: "https://yummies.onrender.com/",
      repoLink: "https://github.com/Patricus/yummies",
    },
  ];
  return (
    <div
      className={`mx-auto grid w-11/12 grid-cols-1 justify-center gap-2 overflow-hidden transition-all duration-500 md:grid-cols-2`}>
      {projects.map((project, index) => (
        <ProjectCard {...project} key={index} />
      ))}
    </div>
  );
}

export default Projects;
