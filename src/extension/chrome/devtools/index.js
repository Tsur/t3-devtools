
const extensionTitle = "T3";
const extensionIcon = "img/icon.png";
const extensionPage = "devpanel.html";
const panelCallback = panel => {};

chrome.devtools.panels.create(extensionTitle, extensionIcon, extensionPage, panelCallback);