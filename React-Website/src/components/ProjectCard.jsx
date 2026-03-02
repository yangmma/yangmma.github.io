import ProjectCardA from "./ProjectCardA";
import ProjectCardB from "./ProjectCardB";
import ProjectCardC from "./ProjectCardC";


/* Need to do the following:

1. Create a card that can hold:
    a. An image of the project
    b. A brief description
    c. Up to 3 links
    d. A list of tools used (up to 10)
2. Ensure that the card can tilt
3. Ensure that the card maintains constant size

*/

const variants = {
    A: ProjectCardA,
    B: ProjectCardB,
    C: ProjectCardC,
};

export default function ProjectCard({ data }) {
    const Component = variants[data.variant] ?? ProjectCardA; // fallback to A
    return <Component data={data} />;
}
