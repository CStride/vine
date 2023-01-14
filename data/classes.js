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

export { Dialog };