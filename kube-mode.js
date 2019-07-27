var pattern = "https://www.google.com/search?*";
let isEnabled = false;
function redirect(requestDetails) {
  if (requestDetails.url.indexOf("kubernetes") === -1 && isEnabled) {
    return {
redirectUrl: requestDetails.url + "+kubernetes"
    };
  }
}
function click (tab) {
isEnabled = !isEnabled
    if (isEnabled) {
        browser.browserAction.setIcon({
            path: {
                32: "icons/on.png",
                48: "icons/kubecat48.png"
            }
        });
    } else {
        browser.browserAction.setIcon({
            path: {
                32: "icons/off.png"
            }
        });
    }
  console.log('browserAction clicked');
}
browser.webRequest.onBeforeRequest.addListener(
    redirect,
    {urls:[pattern]},
    ["blocking"]
    );
browser.browserAction.onClicked.addListener(click);
