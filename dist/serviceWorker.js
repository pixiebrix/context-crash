chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
    const contexts = await chrome.runtime.getContexts({});
    console.log("Background Contexts:", contexts);
});

console.log("Background script loaded.");