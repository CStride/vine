
function getShortcutsFromClient() {
    const QLinkList = document.getElementById("QLink-List");

    const QLinkNodes = QLinkList.querySelectorAll(".QLink");
    const QLinks = Array.from(QLinkNodes);
    const shortcuts = [];

    QLinks.forEach((qlink) => {
        shortcuts.push({
            title: qlink.getAttribute("title"),
            url: qlink.getAttribute("href")
        })
    })

    return shortcuts;
}

export { getShortcutsFromClient }