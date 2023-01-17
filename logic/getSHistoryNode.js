import { setSearchHistoryItemListeners } from "./setListeners.js"

function getSHistoryNode(content) {
    const newNode = document.createElement("div");
    newNode.setAttribute("class", "searchHistory-item");

    const time = document.createElement("img");

    const text = document.createElement("span");
    text.innerText = content;

    const deleteButton = document.createElement("button");

    newNode.appendChild(time);
    newNode.appendChild(text);
    newNode.appendChild(deleteButton);

    setSearchHistoryItemListeners(newNode);

    return newNode;
}

export { getSHistoryNode };