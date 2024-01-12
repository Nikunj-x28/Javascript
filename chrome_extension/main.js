const magicButton = document.getElementById("magic-button");
magicButton.addEventListener("click", magicButtonHandler);

function magicButtonHandler() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'runMagicScript' });
        // In the above code, the tabs[0].id refers to the ID of the currently active tab. When you send a
        // message using chrome.tabs.sendMessage, it is directed to the content scripts running in that tab.
        // Ensure that your content.js file is specified in the content_scripts section of your manifest.json
        // file.
    });
}
