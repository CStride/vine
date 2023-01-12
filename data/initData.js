// const basePath = "./data"

// import QLinks from "/data/QLinks.json";
import { QLInks } from "./mockdata.js"
import { getQLinkNode } from "../components/QLinkFunc.js"

function initializeData() {
    
    const node_QLinkList = document.getElementById("QLink-List");

    const node_addshortcut = document.getElementById("addshortcut");

    QLInks.forEach((link) => {
        const newNode = getQLinkNode(link);
        node_QLinkList.insertBefore(newNode, node_addshortcut);
    });
}

export { initializeData }