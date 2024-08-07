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
        return div(
            div({
                class: 'menu-title', 
                onclick: () => {
                    config.currentSection.val = row.id;
                    document.body.scrollTop = document.documentElement.scrollTop = 0; }},
                p({style: "margin: 0"}, row?.title),
                () => p({style: 'margin: 0'}, config.currentSection.val === row.id ? ">" : "")
            ),
        )
    }

    return (div(config.rows.map(r => renderRow(r))))
}
