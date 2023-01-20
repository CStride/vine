import { QLink } from "./classes.js"
import { getQLinkNode } from "./getQLinkNode.js";
import { getSHistoryNode } from "./getSHistoryNode.js";
import { getShortcuts, getSearchHistory } from "./http.js";

function initializeData() {
    getShortcuts(initializeQLinks);
    getSearchHistory(initializeSearchHistory);
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

function initializeSearchHistory(searchHistoryItems) {
    const searchHistoryItemNodes = [];

    searchHistoryItems.forEach((item) => {
        searchHistoryItemNodes.push(getSHistoryNode(item.text));
    })
    insertSearchHistoryItemsToDom(searchHistoryItemNodes);
}
function insertSearchHistoryItemsToDom(searchHistoryItemNodes) {
    const node_searchHistory = document.getElementById("search-history");

    searchHistoryItemNodes.forEach((node) => {
        node_searchHistory.appendChild(node);
    })
}

export { initializeData };

