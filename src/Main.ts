import van from "vanjs-core";
import { Content, ContentSection } from "./CMS/Content";

import "./Styles/style.css";

import { SectionMenu } from "./CMS/SectionMenu";
import { Navigation } from "./CMS/Navigation";
import { fetchContent } from "./Services/fetchContent";

const { div, h1, img } = van.tags;
const app = document.querySelector<HTMLDivElement>("#app")!;

const Main = async () => {
    const basePath = import.meta.env.VITE_API_URL;
    //Define state members for all site content, page you are on & 
    //the section you are at within that.
    const content = van.state<ContentSection[]>([]);
    const section = van.state<number>(1);
    const subSection = van.state<number>(1);

    //Load site content
    content.val = await fetchContent(["Introduction", "WhatIsSP", "CallOptions", "PutOptions", "Coupon"]);

    //define functions for rendering content
    const mapContent = (item: ContentSection) => div(() => Content(item));
    const mapSectionMenu = (items: ContentSection[]) => SectionMenu({
        currentSection: section,
        rows: items.map(x => ({
            id: x.id,
            title: x.title,
            subSections: x.sections?.map(section => section[1].heading) || []
        }))
    });
    const mapNavigation = (item: ContentSection) => div({ class: 'content-nav' }, () => Navigation(item, subSection));

    return div({ class: "page" },
        div(
            { class: "menu" },
            div({ style: 'margin: 0px auto; max-height: 200px' }, img({ src: `${basePath}/images/SiteHeader.png`, alt: "Local Image", style: `height: 200px; ` })),
            () => mapSectionMenu(content.val)
        ),
        div(
            { class: 'content' },
            div(
                { class: 'content-main' },
                h1({ class: "main-title" }, "Structured Products"),
                () => mapContent(content.val.filter(x => x.id === section.val)[0])
            ),
            () => mapNavigation(content.val.filter(x => x.id === section.val)[0])
        )
    );
};

const init = async () => {
    van.add(app, await Main());
};

init();
