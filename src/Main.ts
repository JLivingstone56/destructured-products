import van from "vanjs-core";
import { PageDefinition, Page } from "./CMS/Page";

import "./Styles/style.css";

import { SectionMenu } from "./CMS/SectionMenu";
import { fetchContent } from "./Services/fetchContent";
import ContentArea from "./CMS/ContentArea";

const { div, img, p } = van.tags;
const app = document.querySelector<HTMLDivElement>("#app")!;

const Main = async () => {
    const basePath = import.meta.env.VITE_API_URL;

    //Define state members for all site content, page you are on & 
    //the section you are at within that.
    const pages = van.state<PageDefinition[]>([]);
    const section = van.state<number>(1);
    const subSection = van.state<number>(1);
    const isLoggedIn = van.state<boolean>(false);
    const isGuest = van.state<boolean>(false);

    //Load site content
    pages.val = await fetchContent(["Introduction", "WhatIsSP", "CallOptions", "PutOptions", "Coupon"]);

    return div({ class: "page" },
        div(
            { class: "menu" },
            div(
                div({ style: 'margin: 0px auto; max-height: 200px' }, img({ src: `${basePath}/images/SiteHeader.png`, alt: "Local Image", style: `height: 200px; `})),
                () => SectionMenu({
                    currentSection: section,
                    rows: pages.val.map(x => ({
                        id: x.id,
                        title: x.title,
                        subSections: x.sections?.map(section => section[1].heading) || []
                    }))
                })
            ),
            div(p("© Jonathan Livingstone 2024"))
        ),
        () => ContentArea(pages, section, subSection, isLoggedIn, isGuest)
    );
};

const init = async () => {
    van.add(app, await Main());
};

init();