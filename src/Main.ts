import van from "vanjs-core";
import { Content, ContentSection, Section } from "./CMS/Content";

import { Logo } from "./Images/svg/Logo";
import "./Styles/style.css";
import { fetchContent } from "./DataAccess/fetchContent";
import { SectionMenu } from "./CMS/SectionMenu";
import { Navigation } from "./CMS/Navigation";

const { div, h1, h2 } = van.tags;
const app = document.querySelector<HTMLDivElement>("#app")!;

const Main = () => {
    const content = van.state<ContentSection[]>([]);
    const section = van.state<number>(1);
    const navSection = van.state<number>(1);

    const loadContent = async (fileNames: string[]) => {
        const data = await fetchContent(fileNames);
        content.val = data;
    };

    const mapContent = (items: ContentSection[]) => div(items.map(it => Content(it)));

    const mapSectionMenu = (items: ContentSection[]) => SectionMenu({
        currentSection: section,
        rows: items.map(x => ({
            id: x.id, 
            title: x.title, 
            subSections: x.dictionary?.map(section => section[1].heading) || []
        }))
    });

    const mapNavigation = (items: ContentSection[]) => div({class: 'content-nav'}, ...items.map(x => Navigation(x, navSection)));
    loadContent(["Introduction", "WhatIsSP", "SPMakeup"]);

    return div({ class: "page" },
        div(
            { class: "menu" },
            Logo(),
            () => mapSectionMenu(content.val)
        ),
        div(
            { class: 'content' },
            div(
                { class: 'content-main' },
                h1({ class: "title" }, "Structured Products"),
                () => mapContent(content.val.filter(x => x.id === section.val))
            ),
            () => mapNavigation(content.val.filter(x => x.id === section.val))    
        )
    );
};

van.add(app, Main());
