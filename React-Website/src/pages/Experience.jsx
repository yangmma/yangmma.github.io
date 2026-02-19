import React from "react";
import TitleCard from "../components/TitleCard";
import SubtitleCard from "../components/SubtitleCard";
import BodyCard from "../components/BodyCard";
import ProjectsCard from "../components/ProjectsCard";

const work1title = "Auckland Council"
const work1subtitle = "Technology Services Intern"
const work1date = "Nov. 2025 - Feb 2026"

const work2title = "Teletrac Navman"
const work2subtitle = "Software Engineering Intern"
const work2date = "Nov. 2024 - Feb 2025"

export default function Page2() {
    return (
        <>
            {/* Work Experience Section */}
            <TitleCard>Work</TitleCard>
            <SubtitleCard heading1={work1title} heading2={work1subtitle} heading3={work1date}/>
            <BodyCard/>
            <SubtitleCard heading1={work2title} heading2={work2subtitle} heading3={work2date}/>
            <BodyCard/>

            {/* Projects Experience Section */}
            <TitleCard>Projects</TitleCard>
            <ProjectsCard/>
        </>
        
    );
}