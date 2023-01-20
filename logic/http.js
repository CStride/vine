import { getShortcutsFromClient } from "./saveData.js";

const HOST = "localhost"
const PORT = "4040"

const url = `http://${HOST}:${PORT}/`


function getShortcuts(resolve, err) {
    let xmlhttp = new XMLHttpRequest();

    const data = "init/shortcuts"

    xmlhttp.onreadystatechange = function () {
        // readyState of 4 indicates: response is complete, and response is ready
        // status of 200 indicates: request is successful
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log("well");
            const parseResult = JSON.parse(xmlhttp.responseText);
            const shortcutList = parseResult.shortcuts;

            resolve(shortcutList);
        }
    }

    xmlhttp.open("get", url + data, true);
    xmlhttp.send();
}


function saveShortcuts() {
    let xmlhttp = new XMLHttpRequest();

    const data = "save/shortcuts"
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            const parseResult = JSON.parse(xmlhttp.responseText);
            // console.log(parseResult);
        }
    }

    xmlhttp.open("post", url + data, true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded"); 
    xmlhttp.send("shortcuts=" + JSON.stringify(getShortcutsFromClient()));
    // xmlhttp.send(JSON.stringify(
    //     {shortcuts:
    //         getShortcutsFromClient()
    //     }
    // ));
}


export { getShortcuts, saveShortcuts };