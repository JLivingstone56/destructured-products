import van from "vanjs-core";
import { DictionaryParser } from "./components/dictionaryParser";
// Import the dictionary

const { div, h1, h2 } = van.tags;

export enum ContentType {
    Text = 1,
    Image = 2,
    Slides = 3,
    Quiz = 4,
}

export interface Section {
    order: number;
    heading: string;
    type: ContentType;
    textRef?: string;
    image?: string;
    slides?: string[];
    quizName?: string;
}

interface ContentSection {
    title: string;
    dictionary: [number, Section][];
}

// Make content a reactive state
const contentState = van.state<ContentSection>({ title: '', dictionary: [] });

export const Content = (content: ContentSection) => {
    contentState.val = content;
    const elementArray = van.derive(() => contentState.val.dictionary.map(x => DictionaryParser({ section: x[1] })));

    return div(
        { class: 'content' },
        div(
            { class: 'content-main' },
            h1({ class: "title" }, () => contentState.val.title),
            ...elementArray.val
        ),
        div(
            { class: 'content-nav' },
            h2({ class: 'title' }, "Navigation")
        )
    );
};