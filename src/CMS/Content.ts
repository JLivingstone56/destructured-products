import van from "vanjs-core";
import { PageStructureFactory } from "../Services/pageStructureFactory";
// Import the sections

const { div, h1, h2 } = van.tags;

export enum ContentType {
    Text = "text",
    Image = "image",
    Slides = "slide",
    Quiz = "quiz",
}

export interface Section {
    heading: string;
    type: ContentType;
    textRef?: string;
    image?: string[];
    imageHeight?: number;
    slides?: string[];
    quizName?: string;
}

export interface ContentSection {
    id: number
    title: string;
    sections: [number, Section][];
}

// Make content a reactive state
const contentState = van.state<ContentSection>({ id:0, title: '', sections: [] });

export const Content = (content: ContentSection) => {
    contentState.val = content;
    const elementArray = van.derive(() => contentState.val.sections.map(x => PageStructureFactory({ section: x[1] })));

    return div(
        h2({ class: "main-title" }, () => contentState.val.title),
        ...elementArray.val

    );
};