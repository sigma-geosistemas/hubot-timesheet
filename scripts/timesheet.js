module.exports = function(robot) {
	"use strict";

	robot.brain.on("loaded", function(){
		robot.brain.timesheets = robot.brain.timesheets || {};
	});

	function createEntry(res, userName, timesheet) {

	}

	function listEntries(res, userName, timeframe) {

		// timeframe = today, week, month, year
	}

	robot.respond(/timesheet log (\d+)$/i, function(res){

	});

	robot.respond(/timesheet list (\@w+)/i, function(res){

	});
};