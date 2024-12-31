import React from "react";
import Image, { StaticImageData } from "next/image";
import linkArrow from "../public/images/projects/linkArrow.svg";

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
        <div className="relative flex flex-col gap-1 overflow-hidden rounded-lg border-2 border-eerieBlack bg-airSuperiorityBlue shadow-inner shadow-eerieBlack">
            <div className="relative h-72">
                <Image
                    className="mb-1 place-self-center"
                    src={image}
                    alt={name}
                    fill
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="
                    sizes="(max-width: 767px) 610px,
                                355px"
                />
            </div>
            <div className="mx-1">
                <strong className="text-lg font-bold">{name.toUpperCase()}</strong>
                <hr />
            </div>
            <p className="mx-2 flex-grow text-sm">{description}</p>
            <ul className="mx-1 font-semibold">
                <li>Frontend: {frontend}</li>
                <li>Backend: {backend}</li>
                <li>Database: {database}</li>
            </ul>

            <div className="mx-1 font-semibold">
                <div className="w-fit">
                    <a
                        className="flex gap-1 transition-all hover:gap-3 hover:text-xanthous"
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer">
                        <div className="relative h-6 w-6">
                            <Image src={linkArrow} alt={`${name} repository`} fill />
                        </div>
                        <span>LIVE SITE</span>
                    </a>
                </div>
                <div className="w-fit">
                    <a
                        className="flex gap-1 transition-all hover:gap-3 hover:text-xanthous"
                        href={repoLink}
                        target="_blank"
                        rel="noopener noreferrer">
                        <div className="relative h-6 w-6">
                            <Image src={linkArrow} alt={`${name} repository`} fill />
                        </div>
                        <span>REPOSITORY</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
