import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Skills from "./Skills";
import Projects from "./Projects";
import AboutMe from "./AboutMe";

function Sections() {
    const [selected, setSelected] = useState<JSX.Element>(<AboutMe />);

    return (
        <section className="grid grid-cols-[85px,1fr]">
            <div>
                <Sidebar selected={selected} setSelected={setSelected} />
            </div>
            <article>{selected}</article>
        </section>
    );
}

export default Sections;
