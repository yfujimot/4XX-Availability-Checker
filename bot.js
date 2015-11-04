var request = require("request");
var cheerio = require('cheerio');

// $ = cheerio.load('<h2 class="title">Hello world</h2>');
 
// $('h2.title').text('Hello there!');
// $('h2').addClass('welcome');
 
// $.html();

function getAvailability(course, url) {
	request({
	  uri: url
	}, function(error, response, body) {
		if (error != null) {
			return;
		}
 
		var $ = cheerio.load(body); // Initiate cheerio object

		$('.sections-container .section .section-info-container .seats-info-group .open-seats .open-seats-count').each(function(i, element) {
			console.log(course + ": " + $(this).text());
		})
	});
}

function runScript () {
	var classes = ["CMSC422", "CMSC436"];

    for (var i = 0; i < classes.length; i++) {
    	getAvailability(classes[i], "https://ntst.umd.edu/soc/search?courseId=" + classes[i] + "&sectionId=&termId=201601&_openSectionsOnly=on&courseLevelFilter=ALL&instructor=&teachingCenter=ALL&courseStartCompare=&courseStartHour=&courseStartMin=&courseStartAM=&courseEndHour=&courseEndMin=&courseEndAM=&creditCompare=&credits=&_classDay1=on&_classDay2=on&_classDay3=on&_classDay4=on&_classDay5=on");
    } 
}

setInterval( function(){
	console.log("Open Seats:");
	runScript()
}, 5000);


// var url = "https://ntst.umd.edu/soc/search?courseId=CMSC436&sectionId=&termId=201601&_openSectionsOnly=on&courseLevelFilter=ALL&instructor=&teachingCenter=ALL&courseStartCompare=&courseStartHour=&courseStartMin=&courseStartAM=&courseEndHour=&courseEndMin=&courseEndAM=&creditCompare=&credits=&_classDay1=on&_classDay2=on&_classDay3=on&_classDay4=on&_classDay5=on";

// request({
// 	  uri: url
// 	}, function(error, response, body) {
// 		if (error != null) {
// 			return;
// 		}
 
// 		var $ = cheerio.load(body); // Initiate cheerio object

// 		$('.sections-container .section .section-info-container .seats-info-group .open-seats .open-seats-count').each(function(i, element) {
// 			console.log($(this).text());
// 		})
// 	});

// var $ = cheerio.load(body); // Initiate cheerio object

// $('.sections-container .section').each(function(i, element) {
// 	console.log(element);
// })	

