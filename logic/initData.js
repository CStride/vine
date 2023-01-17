import { QLink } from "./classes.js"
import { getQLinkNode } from "./getQLinkNode.js";

function initializeData() {
    initializeQLinks();
}



function initializeQLinks() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        // readyState of 4 indicates: response is complete, and response is ready
        // status of 200 indicates: request is successful
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            const shortcutList = JSON.parse(xmlhttp.responseText);

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

export { initializeData };

