import van, { State } from "vanjs-core";

const { div, p, } = van.tags;

interface SectionMenuConfig {
    currentSection: State<number>;
    rows: SectionMenuRow[];
}

interface SectionMenuRow {
    id: number;
    title: string;
}

export const SectionMenu = (config : SectionMenuConfig) => {   
    const renderRow = (row: SectionMenuRow) => {        
        return div({ class: 'content-nav' },
            div({ class: 'nav-title', onclick: () => {config.currentSection.val = row.id}},
                p({style: "margin: 0"}, row?.title),
                () => p({style: 'margin: 0'}, config.currentSection.val === row.id ? ">" : "")
            ),
        )
    }

    return (div(config.rows.map(r => renderRow(r))))
}
