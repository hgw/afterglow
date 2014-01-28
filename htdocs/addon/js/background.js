/**
 * アドオンを実行
 */
function doExecAddon(){

  console.log("play!!!!!");
  console.log("======================================================", chrome.tabs);

    // jqueryを要求
    chrome.tabs.executeScript(null,{file: "js/libs/jquery.js"},

    function(){
        chrome.tabs.executeScript(null, { file: "js/app.js" }, function() {/*処理の完了時に呼ばれる*/});
    });
}

// ボタンをクリックしたら実行
chrome.browserAction.onClicked.addListener(doExecAddon);

//chrome.tabs.onUpdated.addListener(doExecAddon);


//chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
//	if ( request.method == "getLocalStorage" )
//		sendResponse({data: localStorage[ request.key ]});
//	else
//		sendResponse({});
//});
