
var createSidebarPane = chrome.devtools.panels.create;
//var createSidebarPane = chrome.devtools.panels.elements.createSidebarPane;
var extensionTitle = "T3";
var extensionPage = "pane.html";

//createSidebarPane(extensionTitle, function(sidebar) {
//    // sidebar initialization code here
//    sidebar.setPage(extensionPage);
//});

createSidebarPane(extensionTitle, "icon.png", extensionPage, function(sidebar) {});