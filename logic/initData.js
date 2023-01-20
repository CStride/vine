import { QLink } from "./classes.js"
import { getQLinkNode } from "./getQLinkNode.js";
import { getShortcuts } from "./http.js";

function initializeData() {
    getShortcuts(initializeQLinks);
}


function initializeQLinks(shortcutList) {
    const QLinkNodes = [];

    shortcutList.forEach((shortcut) => {
        QLinkNodes.push(getQLinkNode(new QLink(shortcut.title, shortcut.url)))
    })
    insertQLinksToDom(QLinkNodes);

}
function insertQLinksToDom(QLinks) {
    const node_QLinkList = document.getElementById("QLink-List");
    const node_addshortcut = document.getElementById("addshortcut");

    QLinks.forEach((shortcut) => {
        node_QLinkList.insertBefore(shortcut, node_addshortcut);
    });
}


export { initializeData };

