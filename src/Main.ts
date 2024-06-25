import van from "vanjs-core";
import { Content, ContentSection } from "./CMS/Content";
import { NavBar } from "./CMS/NavBar";
import { Logo } from "./Images/svg/Logo";
import "./Styles/style.css";
import { fetchContent } from "./DataAccess/fetchContent";

const { div, h1, h2 } = van.tags;
const app = document.querySelector<HTMLDivElement>("#app")!;

const Main = () => {
    const content = van.state<ContentSection[]>([]);

    const loadContent = async (fileNames: string[]) => {
        const data = await fetchContent(fileNames);
        content.val = data;
    };

    const mapContent = (items: ContentSection[]) => div(items.map(it => Content(it)));

    const mapNavBar = (items: ContentSection[]) => NavBar({
        rows: items.map(x => ({
            id: x.id, 
            title: x.title, 
            subSections: x.dictionary?.map(section => section[1].heading) || []
        }))
    });

    loadContent(["Introduction"]);  // Load multiple content files

    return div({ class: "page" },
        div(
            { class: "nav-bar" },
            Logo(),
            () => mapNavBar(content.val)
        ),
        div(
            { class: 'content' },
            div(
                { class: 'content-main' },
                h1({ class: "title" }, "Structured Products"),
                () => mapContent(content.val)
            ),
            div(
                { class: 'content-nav' },
                h2({ class: 'title' }, "Navigation")
            )
        )
    );
};

van.add(app, Main());
