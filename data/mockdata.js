class QLInk {
    constructor(title, url) {
        this.title = title;
        this.url = url;
        this.icon = url + "/favicon.ico"
    }
}

const baidu = new QLInk("baidu", "https://www.baidu.com");
const bilibili = new QLInk("bilibili", "https://www.bilibili.com");
const leetcode = new QLInk("leetcode", "https://leetcode.cn/");

const QLInks = [];
QLInks.push(baidu, bilibili, leetcode);

export { QLInks };