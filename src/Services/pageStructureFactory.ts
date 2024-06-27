import van from "vanjs-core";
import { ContentType, Section } from "../CMS/Content";
import { TextParser } from "./textParser";
import { allText } from "../Pages/TextContent/allText";

interface PageStructureFactory {
    section: Section;
}

const { p, div, h2, img } = van.tags;

export const PageStructureFactory = (props: PageStructureFactory): HTMLElement => {
    const sec = props.section;
    const needsHeading = sec.heading != null;

    if (sec == null) {
        return div();  // Return an empty div if section is null
    }

    const loadImage = (imageName) => {
        const imagePath = `/images/${imageName}.png`; // Assuming images are in public/images/static
        return imagePath;
    };

    console.log(allText);

    switch (sec.type) {
        case ContentType.Text:
            const textContent = sec.textRef ? allText[sec.textRef] : "";
            if (textContent == null || textContent == "") {
                return div();
            }
            return needsHeading ? 
                div(h2({ class: 'main-sub-title' }, sec.heading), ...TextParser(textContent)) :
                TextParser(textContent);
        case ContentType.Image:
            return div(
                {style: 'justify-content: center; display: flex; gap: 20px; flex-wrap: wrap'},
                 sec.image?.map(x => img({ src: loadImage(x), alt: "Local Image", style: `max-height: ${sec?.imageHeight ?? 200}px` })));
        case ContentType.Slides:
            return p("Slides");
        case ContentType.Quiz:
            return p("Quiz");
        default:
            return div();  // Return an empty div for unknown content types
    }
};
