var SE = "baidu";

class SearchEngine {
    constructor(name, site, prefix) {
        this.name = name;
        this.site = site;
        this.prefix = prefix;
        this.searching = function (word) {
            const url = this.site + prefix + word;
            window.location.href = url;
        }
    }
}

const baidu = new SearchEngine(
    "baidu", 
    "https://www.baidu.com",
    "/s?wd="
);

const google = new SearchEngine(
    "google",
    "https://www.google.com",
    "/search?q="
);

const bing = new SearchEngine(
    "bing",
    "https://cn.bing.com",
    "/search?q=",
);

const supportedSE = ["baidu", "google", "bing"];

const SEMap = {
    "baidu": baidu,
    "google": google,
    "bing": bing
};

function setSearchEngine(se) {
    if (!supportedSE.includes(se)) {
        return false;
    }
    else {
        SE = se;
        return true;
    }
}

function getSearchEngine() {
    return SE;
}

function searching(word) {
    const searchEngine = SEMap[getSearchEngine];

    searchEngine.searching(word);
}

export {
    setSearchEngine, 
    getSearchEngine, 
    searching
};