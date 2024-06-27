import van, { State } from "vanjs-core";
import { ContentSection, Section } from "./Content";

const { div, h2, li, ul} = van.tags;

export const Navigation = (content: ContentSection, selectedSection: State<number>) => {   
    const filtered = content.dictionary.filter(rf => rf[1].heading != null && rf[1].heading != "");
    const renderRow = (id: number, section: Section) => {        
        return li(
            { class: 'navigation-title', onclick: () => {selectedSection.val = id}},
            section?.heading
        )  
    }

    return (div(h2({ class: 'title' }, "Navigation"),ul(filtered.map(r => renderRow(r[0], r[1])))))
}
