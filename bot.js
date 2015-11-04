var request = require("request");
var cheerio = require('cheerio');

function getAvailability(course, url) {
	request({
	  uri: url
	}, function(error, response, body) {
		if (error != null) {
			return;
		}
 
		var $ = cheerio.load(body); // Initiate cheerio object

		var seats = 0;

		$('.sections-container .section .section-info-container .seats-info-group .open-seats .open-seats-count').each(function(i, element) {
			seats += parseInt($(this).text())
		})	

		console.log(course + ": " + seats);
	});
}

function runScript () {
	var classes = ["CMSC422", "CMSC436", "CMSC412", "CMSC414", "CMSC417", "CMSC421", "CMSC424", "CMSC430", "CMSC433", "CMSC434"];

    for (var i = 0; i < classes.length; i++) {
    	getAvailability(classes[i], "https://ntst.umd.edu/soc/search?courseId=" + classes[i] + "&sectionId=&termId=201601&_openSectionsOnly=on&courseLevelFilter=ALL&instructor=&teachingCenter=ALL&courseStartCompare=&courseStartHour=&courseStartMin=&courseStartAM=&courseEndHour=&courseEndMin=&courseEndAM=&creditCompare=&credits=&_classDay1=on&_classDay2=on&_classDay3=on&_classDay4=on&_classDay5=on");
    } 
}

setInterval( function(){
	console.log("Total open Seats:");
	runScript()
}, 60000);
