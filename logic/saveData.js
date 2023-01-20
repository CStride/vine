
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

function getSearchHistoryFromClient() {
    const searchhistory = document.getElementById("search-history");

    const itemNodes = searchhistory.querySelectorAll(".searchHistory-item");
    const items = Array.from(itemNodes);
    const SH_items = [];

    items.forEach((item) => {
        SH_items.push({
            time: "",
            text: item.querySelector("span").innerText
        })
    }) 

    return SH_items;
}

export { getShortcutsFromClient, getSearchHistoryFromClient }