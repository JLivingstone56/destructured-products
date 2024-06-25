import van from "vanjs-core";

const { div, p, ul, li } = van.tags;

interface NavBarConfig {
    rows: NavBarRow[];
}

interface NavBarRow {
    id: number;
    title: string;
    message?: string;
    subSections?: string[];
}

export const NavBar = (config : NavBarConfig) => {
    const List = (items: string[]) => ul(items.map(it => li(it)));
    
    const renderRow = (row: NavBarRow) => { 
        const isExpanded = van.state(false);
        const toggleIcon = (noSubHeadings: boolean) => p({style: 'margin: 0px;'}, (isExpanded.val) ? "" : noSubHeadings ? "" : ">")
        
        return div(
            div({ class: 'nav-title', onclick: () => {isExpanded.val = !isExpanded.val;}},
                p({style: "margin: 0 5px 0 0"}, row?.title),
                () => toggleIcon((row.subSections || [])?.length == 0)
            ),
            div({class: 'nav-subheading', style: () => (`display: ${isExpanded.val ? "block" : "none"}; `)},
                () => List(row.subSections || [])
            )
        )
    }

    return (div(config.rows.map(r => renderRow(r))))
}
