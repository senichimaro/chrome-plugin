window.addEventListener('resize', () => {
    console.log("chrome.tabs", chrome.tabs)

    function doResize(size) {
        document.querySelector("#wWidth").innerText = `window width: ${size}px`;
    }

    chrome.tabs.executeScript(
        { code: "window.innerWidth" },
        (result) => { doResize(result) }
    );
});