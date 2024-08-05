import van, { State }  from "vanjs-core";
import { Navigation } from "./Navigation";
import { PageDefinition, Page } from "../CMS/Page";
const { div, h1 } = van.tags;

const ContentArea = (
    content: State<PageDefinition[]>,
    section: State<number>,
    subSection: State<number>,
    isLoggedIn: State<boolean>,
    isGuest: State<boolean>) => {

    const currentSection = content.val.find(x => x.id === section.val);
    const awaitingLoginDecision = !isLoggedIn.val && !isGuest.val;

    if (currentSection?.title === "Quiz") {
        return div({ class: 'quiz-section' },
            awaitingLoginDecision ? div({ class: 'login-banner' }, "Please login to track progress or close to continue as guest") : null,
            h1("Quiz Section"),
            // Add your quiz-related content here
            div("Quiz Content")
        );
    } else {
        return div({ class: 'content' },
            div(
                { class: 'content-main' },
                h1({ class: "main-title" }, "Structured Products"),
                () => currentSection && Page(currentSection)
            ),
            () => currentSection && Navigation(currentSection, subSection)
        );
    }
};

export default ContentArea;