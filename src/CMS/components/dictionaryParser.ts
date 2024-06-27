import van from "vanjs-core";
import { ContentType, Section } from "../Content";
import { textDictionary } from './textDictionary';  // Import the dictionary

interface DictionaryParserProps {
    section: Section;
}

export const DictionaryParser = (props: DictionaryParserProps): HTMLElement => {
    const { p, div, h2, img } = van.tags;
    const sec = props.section;
    const needsHeading = sec.heading != null;

    if (sec == null) {
        return div();  // Return an empty div if section is null
    }

    const loadImage = (imageName) => {
        const imagePath = `/images/${imageName}.png`; // Assuming images are in public/images/static
        return imagePath;
    };

    switch (sec.type) {
        case ContentType.Text:
            const textContent = sec.textRef ? textDictionary[sec.textRef] : "";
            if (textContent == null || textContent == "") {
                return div();
            }
            console.log(textContent);
            return needsHeading ? 
            div(h2({ class: 'main-sub-title' }, sec.heading), ...textContent.split('\n').map(line => p(line))) :
            textContent.split('\n').map(line => p(line));
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
