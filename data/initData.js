// const basePath = "./data"

// import QLinks from "./QLinks.json";
import { getQLinkNode } from "../components/QLinkFunc.js"

function initializeData() {
//    const str = JSON.stringify(QLinks);
//    const linkList = JSON.parse(str);
    const linkList = JSON.parse(QLinks);
    
    const node_QLinkList = document.getElementById("QLink-List");

    const node_addshortcut = document.getElementById("addshortcut");

    linkList.forEach((link) => {
        const newNode = getQLinkNode(link.title, link.url, link.url + "/favicon.ico");
        node_QLinkList.insertBefore(newNode, node_addshortcut);
    });
}

export { initializeData }
