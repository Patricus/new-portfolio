import React from "react";
import Image, { StaticImageData } from "next/image";

function ProjectCard({
    image,
    name,
    description,
    frontend,
    backend,
    database,
    liveLink,
    repoLink,
}: {
    image: StaticImageData;
    name: string;
    description: string;
    frontend: string;
    backend: string;
    database: string;
    liveLink: string;
    repoLink: string;
}) {
    return (
        <div className="relative w-80 overflow-hidden rounded-lg border-2 border-eerieBlack bg-charcoal shadow-inner shadow-eerieBlack">
            <div className="relative h-72">
                <Image className="mb-1 place-self-center" src={image} alt={name} fill />
            </div>
            <div className="mx-2">
                <strong className="text-lg font-bold">{name.toUpperCase()}</strong>
                <p className="text-sm">{description}</p>
                <ul>
                    <li>Frontend: {frontend}</li>
                    <li>Backend: {backend}</li>
                    <li>Database: {database}</li>
                </ul>
                <div>
                    <div>
                        <a href={liveLink} target="_blank" rel="noopener noreferrer">
                            <span>icon</span>
                            <span>LIVE SITE</span>
                        </a>
                    </div>
                    <div>
                        <a href={repoLink} target="_blank" rel="noopener noreferrer">
                            <span>icon</span>
                            <span>REPOSITORY</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
