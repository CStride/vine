const getQLinkNode = function ({title, url, icon}) {
    const node_QLink = document.createElement("a");
    node_QLink.setAttribute("class", "QLink");
    node_QLink.setAttribute("title", title);
    node_QLink.setAttribute("href", url);

    const node_actionMenu = document.createElement("button");
    node_actionMenu.setAttribute("class", "actionmenu-toggle");

    const node_iconContainer = document.createElement("div");
    node_iconContainer.setAttribute("class", "iconContainer");
    const node_icon = document.createElement("img");
    node_icon.setAttribute("class", "icon-QLink");
    node_icon.setAttribute("src", icon);
    node_iconContainer.appendChild(node_icon);

    const node_titleContainer = document.createElement("div");
    node_titleContainer.setAttribute("class", "titleContainer");
    const node_title = document.createElement("span");
    const textnode_title = document.createTextNode(title);
    node_title.appendChild(textnode_title);
    node_titleContainer.appendChild(node_title);

    node_QLink.appendChild(node_actionMenu);
    node_QLink.appendChild(node_iconContainer);
    node_QLink.appendChild(node_titleContainer);

    return node_QLink;
}


const ADDSHORTCUT = document.createElement("button");
ADDSHORTCUT.setAttribute("id", "addshortcut");
ADDSHORTCUT.setAttribute("title", "add shortcut");

const node_iconContainer = document.createElement("div");
node_iconContainer.setAttribute("class", "iconContainer");
const node_icon = document.createElement("img");
node_icon.setAttribute("id", "icon-addshortcut");
node_icon.setAttribute("src", "../assets/addshortcut.png");
node_iconContainer.appendChild(node_icon);

const node_titleContainer = document.createElement("div");
node_titleContainer.setAttribute("class", "titleContainer");
const node_title = document.createElement("span");
const textnode_title = document.createTextNode("addshortcut");
node_title.appendChild(textnode_title);
node_titleContainer.appendChild(node_title);

ADDSHORTCUT.appendChild(node_iconContainer);
ADDSHORTCUT.appendChild(node_titleContainer);



export { getQLinkNode, ADDSHORTCUT };