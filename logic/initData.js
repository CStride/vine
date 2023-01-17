function initializeData() {
    var xmlrequest = new XMLHttpRequest();
    xmlrequest.open("get", "./staticdata/shortcuts.json", true);
    xmlrequest.send();
    console.log(xmlrequest.responseText);
}

export { initializeData };

