var design_challenge_start = new Date("Friday, March 13, 2020 12:00:00");
var design_challenge_end = new Date("Friday, April 3, 2020 23:59:59");
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
	var diff_years = Math.floor(diff_months / 12);

	diff_years = Math.floor(diff_months / 12);
	diff_months = diff_months % 12;
	diff_days = Math.floor(diff_days % 30.4375);
	diff_hours = diff_hours % 24;
	diff_minutes = diff_minutes % 60;
	diff_seconds = Math.floor(diff_seconds % 60);

	if(diff_years > 1){
        time_str += diff_years + " years "
    }
    else if (diff_years == 1){
        time_str += diff_years + " year "
    }
    if(diff_months > 1){
        time_str += diff_months + " months "
    }
    else if (diff_months == 1){
        time_str += diff_months + " month "
    }
    if(diff_days > 1){
        time_str += diff_days + " days "
    }
    else if (diff_days == 1){
        time_str += diff_days + " day "
    }
    if(diff_hours > 1){
        time_str += diff_hours + " hours "
    }
    else if (diff_hours == 1){
        time_str += diff_hours + " hour "
    }
    if(diff_minutes > 1){
        time_str += diff_minutes + " minutes "
    }
    else if (diff_minutes == 1){
        time_str += diff_minutes + " minute "
    }
    if(diff_seconds > 1){
        time_str += diff_seconds + " seconds "
    }
    else if (diff_seconds == 1){
        time_str += diff_seconds + " second "
    }   

	content.innerHTML = time_str + " until reveal";
}
// before interval
var today = new Date();
if(today - design_challenge_start >= 0){
    content.innerHTML = "Topic is being revealed...";
}
else{
    timeDifferenceCalc(design_challenge_start);
}

// refreshing interval
setInterval(() => {
    var today = new Date();
    if(today - design_challenge_start >= 0){
        content.innerHTML = "Topic is being revealed...";
    }
    else{
        timeDifferenceCalc(design_challenge_start);
    }
}, 1000);
