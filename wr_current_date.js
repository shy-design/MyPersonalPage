"use strict";

/* Douglas College
    CSIS 3275 Software Engineering - Winter 2021 – Class Section 001
    
    
    Website Title: Meet Kateryna
    Authors: Kateryna Timonina 	
    			
    Date:   01/25/2021
    File: wr_current_date.js
    Description: This JS file is used for setting up current date on the main page of the site.
*/
runClock();
setInterval("runClock()", 1000);

function runClock() {
var currentDate = new Date();
var dateString = currentDate.toLocaleDateString();
var timeString = currentDate.toLocaleTimeString();
document.getElementById("dateCurrent").innerHTML = dateString + "<br />" + timeString;
}