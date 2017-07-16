// Global state of application
var totalOpenWindows = 1;
var startTime;

/* Maintain correct start time for browser action page to pull */

// Initial start time
startTime = new Date();
document.getElementById("startTime").innerHTML = startTime.getTime();

// Keep track of number of open windows so that time is only
// reset once all open windows have been closed
chrome.windows.onCreated.addListener(function(window) {
	totalOpenWindows = totalOpenWindows + 1;
	var options = {type:"basic",title:"test",message:"30 sec have passed"};
	chrome.notifications.create(null, options, function(notificationId){});
})

// Determine whether all windows have been closed and time
// needs to be reset
chrome.windows.onRemoved.addListener(function(windowId) {
	totalOpenWindows = totalOpenWindows - 1;
	if (totalOpenWindows == 0) {
		startTime = new Date();
		document.getElementById("startTime").innerHTML = startTime;
	}
});