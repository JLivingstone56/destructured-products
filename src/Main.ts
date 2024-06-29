import van from "vanjs-core";
import { Content, ContentSection } from "./CMS/Content";

import "./Styles/style.css";

import { SectionMenu } from "./CMS/SectionMenu";
import { Navigation } from "./CMS/Navigation";
import { fetchContent } from "./Services/fetchContent";

const { div, h1, img } = van.tags;
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
            subSections: x.sections?.map(section => section[1].heading) || []
        }))
    });

    const mapNavigation = (items: ContentSection[]) => div({class: 'content-nav'}, ...items.map(x => Navigation(x, navSection)));
    loadContent(["Introduction", "WhatIsSP", "CallOptions"]);

    return div({ class: "page" },
        div(
            { class: "menu" },
            div({style: 'margin: 0px auto; max-height: 200px'}, img({ src: "/images/SiteHeader.png", alt: "Local Image", style: `height: 200px; ` })),
            () => mapSectionMenu(content.val)
        ),
        div(
            { class: 'content' },
            div(
                { class: 'content-main' },
                h1({ class: "main-title" }, "Structured Products"),
                () => mapContent(content.val.filter(x => x.id === section.val))
            ),
            () => mapNavigation(content.val.filter(x => x.id === section.val))    
        )
    );
};

van.add(app, Main());
