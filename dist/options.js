
document.querySelector("#extension-page").addEventListener("click", async () => {
    const contexts = await chrome.runtime.getContexts({});
    console.log("Contexts:", contexts);
});

document.querySelector("#background-page").addEventListener("click", async () => {
    await chrome.runtime.sendMessage({
        type: "get-contexts",
    });
});
