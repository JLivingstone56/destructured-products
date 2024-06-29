import van from "vanjs-core";

const { p, ul, li, strong, div } = van.tags;


export const TextParser = (text: string, textRef: string): HTMLElement[] => {
    // Replace list markers with <ul> and <li> tags
    const ulPattern = /\[ul\](.*?)\[\/ul\]/gs;
    const liPattern = /\[li\](.*?)\[\/li\]/g;

    let match;
    let ulElements: HTMLElement[] = [];

    while ((match = ulPattern.exec(text)) !== null) {
        let ulContent = match[1];
        let liElements: HTMLElement[] = [];
        let liMatch;
        let liCount = 0;

        while ((liMatch = liPattern.exec(ulContent)) !== null) {
            liElements.push(li({id: `list-${textRef}-${liCount}`}, liMatch[1]));
            liCount++
        }

        ulElements.push(ul(...liElements));
    }

    text = text.replace(ulPattern, () => ulElements?.shift()?.outerHTML || "");
    text = text.replace(/\*\*(.*?)\*\*/g, (_match, p1) => strong(p1).outerHTML);

    // Split text into paragraphs
    return text.split('\n').map((line) => line.includes("<ul>") ? div({id: `list-${textRef}`, innerHTML: line}) : p({ innerHTML: line }));
};