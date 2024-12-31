import React from "react";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Skills from "./Skills";

function Sidebar({ setSection }: { setSection: (newSection: JSX.Element) => void }) {
    const [selection, setSelection] = React.useState<string>("about");
    const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const target = e.target as HTMLLIElement;
        switch (target.id) {
            case "about":
                setSelection("about");
                setSection(<AboutMe />);
                break;
            case "skills":
                setSelection("skills");
                setSection(<Skills />);
                break;
            case "projects":
                setSelection("projects");
                setSection(<Projects />);
                break;
            default:
                setSelection("about");
                setSection(<AboutMe />);
                break;
        }
    };
    return (
        <div className="sticky top-1">
            <ul className="flex flex-col gap-1">
                <li
                    className={`duration-250 cursor-pointer  border-b border-xanthous transition-all hover:text-xanthous ${
                        selection === "about" && "font-bold text-xanthous"
                    }`}
                    id="about"
                    onClick={handleClick}>
                    ABOUT ME
                </li>
                <li
                    className={`duration-250 cursor-pointer  border-b border-xanthous transition-all hover:text-xanthous ${
                        selection === "skills" && "font-bold text-xanthous"
                    }`}
                    id="skills"
                    onClick={handleClick}>
                    SKILLS
                </li>
                <li
                    className={`duration-250 cursor-pointer  border-b border-xanthous transition-all hover:text-xanthous ${
                        selection === "projects" && "font-bold text-xanthous"
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
