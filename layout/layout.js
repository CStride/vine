import { node_center } from "./center.js"
import { node_top } from "./top.js"

const node_main = document.createElement("div");
node_main.setAttribute("id", "main");

node_main.appendChild(node_top);
node_main.appendChild(node_center);

export { node_main }
