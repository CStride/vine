// import
import { QLink, Dialog } from "./classes.js";
import { searching } from "./search.js";
import { getQLinkNode } from "./getQLinkNode.js";

var activeQLink = null;



// set addshortcut-dialog's listeners
const dialog_addshortcut = document.getElementById("addshortcut-dialog");
function setAddshortcutDialogListeners() {
    dialog_addshortcut.addEventListener("click", (event) => {
        openAddshortcutDialog();
    })
    
    const cancle = dialog_addshortcut.querySelector(".dialog-cancle");
    const done = dialog_addshortcut.querySelector(".dialog-done");
    
    done.addEventListener("click", (event) => {
        event.stopPropagation();
        const newShortcut = addShortcut();
        closeAddshortcutDialog();
    })
    cancle.addEventListener("click", (event) => {
        event.stopPropagation();
        closeAddshortcutDialog();
    })
}

function openAddshortcutDialog() {
    dialog_addshortcut.style.display = "block";
}

function closeAddshortcutDialog(node) {
    let dialog = node || dialog_addshortcut;

    const input_name =  dialog.querySelector(".dialogInput-name");
    const input_url = dialog.querySelector(".dialogInput-url");

    input_name.value = "";
    input_url.value = "";

    dialog.style.display = "none";
}

function addShortcut() {
    const input_name =  dialog_addshortcut.querySelector(".dialogInput-name");
    const input_url = dialog_addshortcut.querySelector(".dialogInput-url");

    const name = input_name.value;
    const url = input_url.value;

    const node_QLinkList = document.getElementById("QLink-List");
    const node_addshortcut = document.getElementById("addshortcut");

    const shortcut = new QLink(name, url);
    const newNode =  getQLinkNode(shortcut); 
    node_QLinkList.insertBefore(newNode, node_addshortcut);
    return newNode;
}

// set shortcut's listeners
function setShortcutListener(node) {
    const actionmenuTrigger = node.querySelector(".actionmenu-trigger");
    actionmenuTrigger.addEventListener("click", (event) => {
        event.stopPropagation();
        event.preventDefault();
        activeQLink = event.target.parentNode;
        openActionmenu(event);
    });
}

// set action-menu's listeners
const actionmenu = document.getElementById("actionmenu-dialog");
function setActionmenuListeners() {
    const edit = actionmenu.querySelector(".menu-item.edit");
    const remove = actionmenu.querySelector(".menu-item.remove");
    edit.addEventListener("click", (event) => {
        openEditShortcutDialog(activeQLink);
        closeActionmenu();
    })
    remove.addEventListener("click", (event) => {
        removeShortcut(activeQLink);
        closeActionmenu();
        activeQLink = null;
    })    
}

function openActionmenu(event) {
    const trigger = event.target;
    const QLink = trigger.parentNode;
    const relativeX = QLink.offsetLeft;
    const relativeY = QLink.offsetTop;

    const actionmenu = document.getElementById("actionmenu-dialog");
    actionmenu.style.display = "block";
    actionmenu.style.top = relativeY + "px";
    actionmenu.style.left = (relativeX - (actionmenu.offsetWidth - QLink.offsetWidth) / 2) + "px";
}

function closeActionmenu(node) {
    let actionmenu = node || document.getElementById("actionmenu-dialog");
    actionmenu.style.display = "none";
}

function removeShortcut(node) {
    node.remove();
    // const QLinkList = document.getElementById("QLink-List");
    // QLinkList.removeChild(node);
}

function openEditShortcutDialog(node) {
    const name = node.getAttribute("title");
    const url = node.getAttribute("href");
    
    const dialog_editshortcut = document.getElementById("editshortcut-dialog");
    const input_name =  dialog_editshortcut.querySelector(".dialogInput-name");
    const input_url = dialog_editshortcut.querySelector(".dialogInput-url");

    input_name.value = name;
    input_url.value = url;

    dialog_editshortcut.style.display = "block";
}

// set editshortcut-dialog's listeners
const dialog_editshortcut = document.getElementById("editshortcut-dialog");
function setEditshortcutDialogListeners() {
    const cancle = dialog_editshortcut.querySelector(".dialog-cancle");
    const done = dialog_editshortcut.querySelector(".dialog-done");
    done.addEventListener("click", (event) => {
        event.stopPropagation();
        editShortcut(activeQLink);
        closeEditshortcutDialog();
    })
    cancle.addEventListener("click", (event) => {
        event.stopPropagation();
        closeEditshortcutDialog();
    })
}

function editShortcut(node) {
    const input_name =  dialog_editshortcut.querySelector(".dialogInput-name");
    const input_url = dialog_editshortcut.querySelector(".dialogInput-url");

    const name = input_name.value;
    const url = input_url.value;

    node.setAttribute("title", name);
    node.setAttribute("href", url);

    const node_titleContainer = node.querySelector(".titleContainer");
    const node_title = node_titleContainer.querySelector("span");
    node_title.innerText = name;

    const node_icon = node.querySelector(".icon-QLink");
    node_icon.setAttribute("src", QLink.getFavicon(url));
}

function closeEditshortcutDialog(node) {
    let dialog = node || dialog_editshortcut;

    dialog.style.display = "none";
}

// set addshortcut-dialog's listeners
const addshortcutTrigger = document.getElementById("addshortcut");
function setAddshortcutTriggerListeners() {
    addshortcutTrigger.addEventListener("click", (event) => {
        event.stopPropagation();
        openAddshortcutDialog();
    });
}

// set body's listeners
const body_ = document.body;

function clickToCloseDialogListener() {
    const dialogs = [];
    dialogs.push(new Dialog("addshortcut-dialog", document.getElementById("addshortcut-dialog"), 
    openAddshortcutDialog, closeAddshortcutDialog));
    
    dialogs.push(new Dialog("editshortcut-dialog", document.getElementById("editshortcut-dialog"),
    openEditShortcutDialog, closeEditshortcutDialog));
    
    dialogs.push(new Dialog("actionmenu-dialog", document.getElementById("actionmenu-dialog"), 
    openActionmenu, closeActionmenu));

    dialogs.push(new Dialog("searchHistory-dialog", document.getElementById("search-history"),
    openSearchHistory, closeSearchHistory));

    body_.addEventListener("click", (event) => {
        const target = event.target;
        console.log("body has been clicked!");

        if (!isInDialog(target)) {
            dialogs.forEach((dialog) => {
                if (dialog.isOpen()) {
                    dialog.close(dialog.node)
                }
            })
        }
    });
}

// set search-box's listeners
const searchBox = document.getElementById("search-box");
function setSearchListeners() {
    const inputBox = searchBox.querySelector("#input-box");
    const searchButton = searchBox.querySelector("#icon-searching");

    inputBox.addEventListener("keydown", (event) => {
        if (event.keyCode == 13) {
            const word = inputBox.value;
            searching(word);
        }
    });

    inputBox.addEventListener("click", (event) => {
        event.stopPropagation();
        openSearchHistory();
    });

    searchButton.addEventListener("click", (event) => {
        const word = inputBox.value;
        inputBox.value = "";
        searching(word);
    });
}

function openSearchHistory() {
    const searchHistory = document.getElementById("search-history");

    const child = searchHistory.children;
    if (child.length > 0) searchHistory.style.display = "block";
}

function closeSearchHistory() {
    const searchHistory = document.getElementById("search-history");

    searchHistory.style.display = "none";
}

function setSearchHistoryItemListeners(node) {
    node.addEventListener("click", (event) => {
        event.stopPropagation();

        const text = node.querySelector("span").innerText;

        const searchInput = document.getElementById("input-box");

        searchInput.value = text;
    });

    const remove = node.querySelector("button");
    remove.addEventListener("click", (event) => {
        event.stopPropagation();

        node.remove();

        if (document.getElementById("search-history").children.length == 0) {
            closeSearchHistory();
        }
    });

}

function setInitListeners() {
    const node_QLinkList = document.getElementById("QLink-List");
    const ListItems = Array.from(node_QLinkList.children);
    
    const QLinks = [];

    ListItems.forEach((item) => {
        const classList = item.classList;
        if (classList.contains("QLink")) QLinks.push(item);
    })
    QLinks.forEach((shortcut) => {
        setShortcutListener(shortcut);
    })
}

function setListeners() {
    setInitListeners();

    clickToCloseDialogListener();

    setAddshortcutDialogListeners();
    setEditshortcutDialogListeners();
    setActionmenuListeners();
    setAddshortcutTriggerListeners();
    setSearchListeners();
}


function isInDialog(node) {
    if (node.tagName.toLowerCase() == "body") return false;

    const classList = node.classList;
    if (classList.contains("dialog")) return true;
    else {
        return isInDialog(node.parentNode);
    }
}



export { setShortcutListener, setSearchHistoryItemListeners, setListeners };
