window.addEventListener('load', function(event) {
    const sc = document.createElement("script");
    sc.src = chrome.runtime.getURL("scripts/injectedJS.js");
    sc.setAttribute('extension-id', chrome.runtime.id);
    document.body.appendChild(sc);
});
