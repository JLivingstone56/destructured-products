import van from "vanjs-core";
import { TextParser } from "./textParser";
import { allText } from "../SiteText/allText";
import { ContentType, PageSection } from "../CMS/Page";
import { TableParser } from "./tableParser";

interface PageStructureFactory {
    section: PageSection;
}

const { p, div, h2, img } = van.tags;

export const PageStructureFactory = (props: PageStructureFactory): HTMLElement => {
    const basePath = import.meta.env.VITE_API_URL;
    const sec = props.section;
    const needsHeading = sec.heading != null;

    if (sec == null) {
        return div();  // Return an empty div if section is null
    }

    const loadImage = (imageName: string) => {
        const imagePath = `${basePath}/images/${imageName}.png`; // Assuming images are in public/images/static
        return imagePath;
    };

    switch (sec.type) {
        case ContentType.Text:
            const textContent: string = sec.textRef ? allText[sec.textRef] : "";
            if (textContent == null || textContent == "") {
                return div();
            }
            return needsHeading ? 
                div({id: `${sec.heading ?? sec.textRef}`}, h2({ class: 'main-sub-title' }, sec.heading), ...TextParser(textContent, sec.textRef || "")) :
                div({id: `${sec.textRef}`}, ...TextParser(textContent, sec.textRef || ""));
        case ContentType.Table:
            const tableContent = sec.textRef ? allText[sec.textRef] : "";
            if (tableContent == null || tableContent == "") {
                return div();
            }
            return div({id: `${sec.textRef}`}, TableParser(tableContent));
        case ContentType.Image:
            return div(
                {style: 'justify-content: center; display: flex; gap: 20px; flex-wrap: wrap'},
                 sec.image?.map(x => img({ src: loadImage(x), alt: "Local Image", style: `max-height: ${sec?.imageHeight ?? 200}px` })));
        case ContentType.Slides:
            return p("Slides");
        default:
            return div();  // Return an empty div for unknown content types
    }
};
