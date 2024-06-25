import van from "vanjs-core";
import { ContentType, Section } from "../Content";
import { textDictionary } from './textDictionary';  // Import the dictionary

interface DictionaryParserProps {
    section: Section;
}

export const DictionaryParser = (props: DictionaryParserProps): HTMLElement => {
    const { p, div, h2 } = van.tags;
    const sec = props.section;
    const needsHeading = sec.heading != null;

    if (sec == null) {
        return div();  // Return an empty div if section is null
    }

    switch (sec.type) {
        case ContentType.Text:
            const textContent = sec.textRef ? textDictionary[sec.textRef] : "";
            console.log(textContent);
            return needsHeading ? div(h2(sec.heading), ...textContent.split('\n').map(line => p(line))) : textContent.split('\n').map(line => p(line));
        case ContentType.Image:
            return p("Image");
        case ContentType.Slides:
            return p("Slides");
        case ContentType.Quiz:
            return p("Quiz");
        default:
            return div();  // Return an empty div for unknown content types
    }
}
