import { QLInk } from "./classes.js";

const baidu = new QLInk("baidu", "https://www.baidu.com");
const bilibili = new QLInk("bilibili", "https://www.bilibili.com");
const leetcode = new QLInk("leetcode", "https://leetcode.cn/");

const QLInks = [];
QLInks.push(baidu, bilibili, leetcode);

export { QLInks };