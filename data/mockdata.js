import { QLink } from "./classes.js";

const baidu = new QLink("baidu", "https://www.baidu.com");
const bilibili = new QLink("bilibili", "https://www.bilibili.com");
const leetcode = new QLink("leetcode", "https://leetcode.cn/");

const QLinks = [];
QLinks.push(baidu, bilibili, leetcode);

export { QLinks };