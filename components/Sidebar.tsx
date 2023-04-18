import React from "react";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Skills from "./Skills";

function Sidebar({
    selected,
    setSelected,
}: {
    selected: JSX.Element;
    setSelected: React.Dispatch<React.SetStateAction<JSX.Element>>;
}) {
    const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const target = e.target as HTMLLIElement;
        switch (target.id) {
            case "projects":
                setSelected(<Projects />);
                break;
            case "about":
                setSelected(<AboutMe />);
                break;
            case "skills":
                setSelected(<Skills />);
                break;
            default:
                setSelected(<AboutMe />);
                break;
        }
    };
    return (
        <div>
            <ul className="flex flex-col gap-1">
                <li
                    className={`duration-250 cursor-pointer  border-b border-emerald transition-all hover:text-emerald ${
                        selected.type.name === "AboutMe" && "font-bold text-emerald"
                    }`}
                    id="about"
                    onClick={handleClick}>
                    ABOUT ME
                </li>
                <li
                    className={`duration-250 cursor-pointer  border-b border-emerald transition-all hover:text-emerald ${
                        selected.type.name === "Skills" && "font-bold text-emerald"
                    }`}
                    id="skills"
                    onClick={handleClick}>
                    SKILLS
                </li>
                <li
                    className={`duration-250 cursor-pointer  border-b border-emerald transition-all hover:text-emerald ${
                        selected.type.name === "Projects" && "font-bold text-emerald"
                    }`}
                    id="projects"
                    onClick={handleClick}>
                    PROJECTS
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
