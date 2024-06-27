import van from "vanjs-core";
import { DictionaryParser } from "./components/dictionaryParser";
// Import the dictionary

const { div, h1, h2 } = van.tags;

export enum ContentType {
    Text = "text",
    Image = "image",
    Slides = "slide",
    Quiz = "quiz",
}

export interface Section {
    order: number;
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
    dictionary: [number, Section][];
}

// Make content a reactive state
const contentState = van.state<ContentSection>({ id:0, title: '', dictionary: [] });

export const Content = (content: ContentSection) => {
    contentState.val = content;
    const elementArray = van.derive(() => contentState.val.dictionary.map(x => DictionaryParser({ section: x[1] })));

    return div(
        h2({ class: "main-title" }, () => contentState.val.title),
        ...elementArray.val

    );
};