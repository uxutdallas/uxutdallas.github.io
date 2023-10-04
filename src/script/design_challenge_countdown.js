var design_challenge_start = new Date("Thursday, October 4, 2023 19:30:00");
var design_challenge_end = new Date("Thursday, October 4, 2023 19:30:00");
var content = document.getElementById("time-until-date");

function timeDifferenceCalc(targetDate) {
	var today = new Date();
	var time_str = "";

	var diff = (targetDate-today) / 1000;

	var diff_seconds = diff;
	var diff_minutes = Math.floor(diff_seconds / 60);
	var diff_hours = Math.floor(diff_minutes / 60);
	var diff_days = Math.floor(diff_hours / 24);
	var diff_months = Math.floor(diff_days / 30.4375);

	diff_months = diff_months % 12;
	diff_days = Math.floor(diff_days % 30.4375);
	diff_hours = diff_hours % 24;
	diff_minutes = diff_minutes % 60;
	diff_seconds = Math.floor(diff_seconds % 60);

    if(diff_months > 9){
        time_str += diff_months + " : "
    }
    else if (diff_months > 0){ // 0'd on purpose
        time_str += "0" + diff_months + " : "
    }

    if(diff_days > 9){
        time_str += diff_days + " : "
    }
    else if (diff_days > -1){
        time_str += "0" + diff_days + " : "
    }

    if(diff_hours > 9){
        time_str += diff_hours + " : "
    }
    else if (diff_hours > -1){
        time_str += "0" + diff_hours + " : "
    }

    if(diff_minutes > 9){
        time_str += diff_minutes + " : "
    }
    else if (diff_minutes > -1){
        time_str += "0" + diff_minutes + " : "
    }

    if(diff_seconds > 9){
        time_str += diff_seconds
    }
    else if (diff_seconds > -1){
        time_str += "0" + diff_seconds
    }   

	content.innerHTML = time_str + "";
}
// before interval
var today = new Date();
if(today - design_challenge_end >= 0){
    content.innerHTML = "Submissions are closed.";
}
else{
    timeDifferenceCalc(design_challenge_end);
}

// refreshing interval
setInterval(() => {
    var today = new Date();
    if(today - design_challenge_end >= 0){
        content.innerHTML = "00 : 00 : 00 : 00";
    }
    else{
        timeDifferenceCalc(design_challenge_end);
    }
}, 1000);
