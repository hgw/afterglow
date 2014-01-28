/**
 * アドオンを実行
 */
function doExecAddon(){

    chrome.tabs.executeScript(null,{file: "js/libs/jquery.js"},

    function(){
        chrome.tabs.executeScript(null, { file: "js/afterglow.js" }, function() {});
    });
}

chrome.browserAction.onClicked.addListener(doExecAddon);