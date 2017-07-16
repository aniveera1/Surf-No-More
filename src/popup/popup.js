var MS_YEAR = 31536000000;
var MS_MONTH = 2592000000;
var MS_DAY = 86400000;
var MS_HOUR = 3600000;
var MS_MINUTE = 60000;
var MS_SECOND = 1000;

// Pull start time from background process and create new
// date object from it in order to calculate diff
var backgroundWindow = chrome.extension.getBackgroundPage();
var startTime = new Date(backgroundWindow.document.getElementById("startTime").innerHTML);
var currentTime = new Date();
var diff = Number(currentTime.getTime() - startTime.getTime());

// Parse milliseconds for user friendly output
var timeSpent;
var yearString = "";
var monthString = "";
var dayString = "";
var hourString = "";
var minString = "";
var secString = "";
if (diff >= MS_YEAR) {		// Milliseconds in a year
	var years = Math.floor(diff / MS_YEAR);
	diff = diff - (years * MS_YEAR);

	yearString = years.toString();
	if (years > 1)
		yearString = yearString + " yrs ";
	else
		yearString = yearString + " yr ";
}
if (diff >= MS_MONTH) {	// Milliseconds in a month
	var months = Math.floor(diff / MS_MONTH);
	diff = diff - (months * MS_MONTH);

	if (months > 1)
		monthString = months.toString() + " mons ";
	else
		monthString = months.toString() + " mon ";

}
if (diff >= MS_DAY) {		// Milliseconds in a day
	var days = Math.floor(diff / MS_DAY);
	diff = diff - (days * MS_DAY);

	if (days > 1)
		dayString = days.toString() + " days ";
	else
		dayString = days.toString() + " day ";
}
if (diff >= MS_HOUR) {		// Milliseconds in a hour
	var hours = Math.floor(diff / MS_HOUR);
	diff = diff - (hours * MS_HOUR);

	if (hours > 1)
		hourString = hours.toString() + " hrs ";
	else
		hourString = hours.toString() + " hr ";
}
if (diff >= MS_MINUTE) {		// Milliseconds in a minute
	var minutes = Math.floor(diff / MS_MINUTE);
	diff = diff - (minutes * MS_MINUTE);

	if (minutes > 1)
		minString = minutes.toString() + " mins ";
	else
		minString = minutes.toString() + " min ";
}
if (diff >= MS_SECOND) {		// Milliseconds in a second
	var seconds = Math.floor(diff / MS_SECOND);

	if (seconds > 1)
		secString = seconds.toString() + " secs";
	else
		secString = seconds.toString() + " sec";
}

// Update view
timeSpent = yearString + monthString + dayString + hourString + minString + secString;
document.getElementById("timeSpent").innerHTML = timeSpent;



















