import van from "vanjs-core";
import { Content } from "./Content";
import { NavBar } from "./NavBar";
import { Logo } from "./svg/Logo";
import "./style.css";

const { div } = van.tags;
const app = document.querySelector<HTMLDivElement>("#app")!;

const fetchContent = async (fileNames) => {
    try {
        const fetchPromises = fileNames.map(fileName =>
            fetch(`./src/siteContent/${fileName}.json`).then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${fileName}.json: ${response.statusText}`);
                }
                return response.json();
            })
        );
        const data = await Promise.all(fetchPromises);
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

const Main = () => {
    const content = van.state<any[]>([]);

    const loadContent = async (fileNames) => {
        const data = await fetchContent(fileNames);
        content.val = data;
    };

    const mapContent = (items: any[]) => div(items.map(it => Content(it)));

    loadContent(["Introduction"]);  // Load multiple content files

    return div({ class: "page" },
        div(
            { class: "nav-bar" },
            Logo(),
            NavBar({
                rows: [
                    { id: 1, title: "Introduction" },
                    { id: 2, title: "Basics" },
                    { id: 3, title: "What Makes Up a Structured Product", subSections: ["Content", "Summary", "Quiz"] },
                    { id: 4, title: "Categories", subSections: ["Content", "Summary", "Quiz"] },
                    { id: 5, title: "Variations", subSections: ["Content", "Summary", "Quiz"] }
                ]
            }),
        ),
        () => mapContent(content.val)
    );
};

van.add(app, Main());
