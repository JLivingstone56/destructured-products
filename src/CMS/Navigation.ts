import van, { State } from "vanjs-core";
import { ContentSection, Section } from "./Content";

const { div, h2, li, ul} = van.tags;

export const Navigation = (content: ContentSection, selectedSection: State<number>) => {   
    const filtered = content.sections.filter(rf => rf[1].heading != null && rf[1].heading != "");
    const renderRow = (id: number, section: Section) => {        
        return li(
            { class: 'navigation-sub-title', onclick: () => {
                selectedSection.val = id;
                jumpTo(section.heading)
            }},
            section?.heading
        )  
    }

    const jumpTo = (heading: string) => {
        const element = document.getElementById(heading);
        console.log(element);
        if (element != null){
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (div(h2({ class: 'navigation-title' }, "Navigation"),ul(filtered.map(r => renderRow(r[0], r[1])))))
}
