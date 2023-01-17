import { QLink } from "./classes.js"
import { getQLinkNode } from "./getQLinkNode.js";
import { getSHistoryNode } from "./getSHistoryNode.js";

function initializeData() {
    initializeQLinks();
    initializeSearchHistory();
}



function initializeQLinks() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        // readyState of 4 indicates: response is complete, and response is ready
        // status of 200 indicates: request is successful
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            const parseResult = JSON.parse(xmlhttp.responseText);
            const shortcutList = parseResult.shortcuts;

            const QLinkNodes = [];
            shortcutList.forEach((shortcut) => {
                QLinkNodes.push(getQLinkNode(new QLink(shortcut.title, shortcut.url)));
            })

            insertQLinksToDom(QLinkNodes);
        }
    }
    xmlhttp.open("get", "./staticdata/shortcuts.json", true);
    xmlhttp.send();

}
function insertQLinksToDom(QLinks) {
    const node_QLinkList = document.getElementById("QLink-List");
    const node_addshortcut = document.getElementById("addshortcut");

    QLinks.forEach((shortcut) => {
        node_QLinkList.insertBefore(shortcut, node_addshortcut);
    });
}

function initializeSearchHistory() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        // readyState of 4 indicates: response is complete, and response is ready
        // status of 200 indicates: request is successful
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            const parseResult = JSON.parse(xmlhttp.responseText);
            const searchHistoryItems = parseResult.searchHistoryItems;

            const searchHistoryItemNodes = [];
            searchHistoryItems.forEach((item) => {
                searchHistoryItemNodes.push(getSHistoryNode(item.text));
            })

            insertSearchHistoryItemsToDom(searchHistoryItemNodes);

        }
    }
    xmlhttp.open("get", "./staticdata/searchHistory.json", true);
    xmlhttp.send();
}
function insertSearchHistoryItemsToDom(searchHistoryItemNodes) {
    const node_searchHistory = document.getElementById("search-history");

    searchHistoryItemNodes.forEach((node) => {
        node_searchHistory.appendChild(node);
    })
}

export { initializeData };

