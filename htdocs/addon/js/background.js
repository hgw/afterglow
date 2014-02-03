/**
 * execute
 */
function onClickButtonHandler(){
  alert("For hours and hours while we surf the web, we mindlessly follow a tiny arrow across the screen. It clicks pages for us and opens doors to worlds we can only access with a Wifi connection. We choose the cursor's every move, but how much choice do we really have? Human Cursor explores our connection and interaction with the web. When you find yourself inside the computer screen, in the “flesh”, would it change your behaviour or how you feel while surfing? ");
}

chrome.browserAction.onClicked.addListener(onClickButtonHandler);