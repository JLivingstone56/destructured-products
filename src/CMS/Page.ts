import van from "vanjs-core";
import { PageStructureFactory } from "../Services/pageStructureFactory";
// Import the sections

const { div, h2 } = van.tags;

export enum ContentType {
    Text = "text",
    Image = "image",
    Table= "table",
    Slides = "slide"
}

export interface PageSection {
    heading: string;
    type: ContentType;
    textRef?: string;
    image?: string[];
    imageHeight?: number;
    slides?: string[];
}

export interface PageDefinition {
    id: number
    title: string;
    sections: [number, PageSection][];
}

// Make content a reactive state
const contentState = van.state<PageDefinition>({ id:0, title: '', sections: [] });

export const Page = (content: PageDefinition) => {
    contentState.val = content;
    const elementArray = van.derive(() => contentState.val.sections.map(x => PageStructureFactory({ section: x[1] })));

    return div(
        h2({ class: "main-title" }, () => contentState.val.title),
        ...elementArray.val

    );
};