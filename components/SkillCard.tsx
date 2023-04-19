import React from "react";
import Image from "next/image";

function SkillCard({ skill, image }: { skill: string; image: string }) {
    return (
        <div className="grid-row-2 grid w-28 rounded-lg border-2 border-eerieBlack bg-charcoal px-1 shadow-inner shadow-eerieBlack">
            <strong className="place-self-center">{skill}</strong>
            <Image
                className="mb-1 place-self-center"
                src={image}
                alt={skill}
                width={72}
                height={72}
            />
        </div>
    );
}

export default SkillCard;
