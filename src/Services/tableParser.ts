import van from "vanjs-core";
const { strong, table, tr, td, div, p } = van.tags;

const parseBoldText = (content: string) => {
    const parts = content.split(/\*\*(.*?)\*\*/);
    return parts.map((part, index) =>
        index % 2 === 1 ? strong(part) : part
    );
};

export const TableParser = (text: string): HTMLElement => {
    // Replace table markers with <table>, <tr>, and <td> tags
    const tablePattern = /\[table\](.*?)\[\/table\]/gs;
    const trPattern = /\[tr\](.*?)\[\/tr\]/g;
    const tdPattern = /\[td\](.*?)\[\/td\]/g;

    
    const tableMatch = tablePattern.exec(text)
    if (tableMatch == null){
        return p(strong("Missing table data"));
    }

    let tableContent = tableMatch[1];
    let trElements: HTMLElement[] = [];
    let trMatch;

    while ((trMatch = trPattern.exec(tableContent)) !== null) {
        let trContent = trMatch[1];
        let tdElements: HTMLElement[] = [];
        let tdMatch;

        while ((tdMatch = tdPattern.exec(trContent)) !== null) {
            tdElements.push(td(...parseBoldText(tdMatch[1])));
        }

        trElements.push(tr(...tdElements));
    }

    text = text.replace(tablePattern, () => table({style: 'table-layout: fixed; width: 800px;'}, ...trElements)?.outerHTML || "");

    return div({ class: 'main-table', innerHTML: text });
}