const node_title = document.createElement("span");
node_title.setAttribute("id", "title");

let node_text = document.createTextNode("VINE");

node_title.appendChild(node_text);

export { node_title }