import React from "react";

function Projects({ selected }: { selected: boolean }) {
    return (
        <div
            className={`${
                selected ? "max-h-128" : "max-h-0"
            } mx-auto flex w-3/4  flex-wrap justify-center gap-2 overflow-hidden transition-all duration-500`}>
            Projects
        </div>
    );
}

export default Projects;
