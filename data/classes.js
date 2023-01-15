class QLink {
    constructor(title, url) {
        this.title = title;
        this.url = url;
        this.icon = url + "/favicon.ico"
    }
}

class Dialog {
    constructor(name, node, openFunc, closeFunc) {
        this.name = name;
        this.node = node;
        this.open = openFunc;
        this.close = closeFunc;
        this.isOpen = function () {
            return this.node.style.display != "none";
        }
    }
}

export { QLink, Dialog };