import van from "vanjs-core";

const { p, ul, li, strong, table, tr, td, img } = van.tags;

export const TextParser = (text) => {
           const parseBoldText = (content) => {
            const parts = content.split(/\*\*(.*?)\*\*/);
            return parts.map((part, index) => 
                index % 2 === 1 ? strong(part) : part
            );
        };

        // Replace list markers with <ul> and <li> tags
        const ulPattern = /\[ul\](.*?)\[\/ul\]/gs;
        const liPattern = /\[li\](.*?)\[\/li\]/g;

        let match;
        let ulElements: HTMLElement[] = [];

        while ((match = ulPattern.exec(text)) !== null) {
            let ulContent = match[1];
            let liElements: HTMLElement[] = [];
            let liMatch;

            while ((liMatch = liPattern.exec(ulContent)) !== null) {
                liElements.push(li(liMatch[1]));
            }

            ulElements.push(ul(...liElements));
        }

        text = text.replace(ulPattern, () => ulElements?.shift()?.outerHTML);

        // Replace table markers with <table>, <tr>, and <td> tags
        const tablePattern = /\[table\](.*?)\[\/table\]/gs;
        const trPattern = /\[tr\](.*?)\[\/tr\]/g;
        const tdPattern = /\[td\](.*?)\[\/td\]/g;

        let tableMatch;
        let tableElements: HTMLElement[] = [];

        while ((tableMatch = tablePattern.exec(text)) !== null) {
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

            tableElements.push(table(...trElements));
        }

        text = text.replace(tablePattern, () => tableElements?.shift()?.outerHTML);
        text = text.replace(/\*\*(.*?)\*\*/g, (match, p1) => strong(p1).outerHTML);

        // Split text into paragraphs
        return text.split('\n').map(line => p({ innerHTML: line }));
    };