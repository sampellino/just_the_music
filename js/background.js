chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, { file: "js/jquery.min.js" }, function() {
		chrome.tabs.executeScript(null, {file: "js/just_the_music.js"});
	});
});