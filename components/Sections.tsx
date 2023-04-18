import React, { useRef, useState } from "react";
import Sidebar from "./Sidebar";
import AboutMe from "./AboutMe";

function Sections() {
    const [section, setSection] = useState<JSX.Element>(<AboutMe />);
    const [transitioning, setTransitioning] = useState<boolean>(false);
    const timer = useRef<NodeJS.Timeout | null>(null);

    const changeSection = (newSection: JSX.Element) => {
        setTransitioning(true);
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            setTransitioning(false);
            setSection(newSection);
        }, 500);
    };

    return (
        <section className="grid grid-cols-[85px,1fr]">
            <div>
                <Sidebar setSection={changeSection} />
            </div>
            <article
                className={`overflow-hidden transition-all duration-500 ${
                    transitioning ? "max-h-0" : "max-h-144"
                }`}>
                {section}
            </article>
        </section>
    );
}

export default Sections;
