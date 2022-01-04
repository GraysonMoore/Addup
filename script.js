/*
var promp = prompt("Enter password");
var pw = 1125;
if (promp === pw) {
	alert("You're in");
} else {
	while(promp !== pw) {
		alert("Incorrect password");
		promp = prompt("Enter password");
	}
}
*/
//calculation

$("#button").click(function(event) {
	var a = Number($("#inputh").val());
	var b = Number($("#inputm").val());
	var answer = a * 120 + b * 3.5;
	$("#answer h1").detach();
	$("p").detach();
	$("#answer").append("<p>Standard Price: </p><h1>$" + answer.toFixed(2) + "</h1>");
	var answer2 = answer * 1.5;
	$("#answer2 h1").detach();
	$("#answer2").append("<p>After Hours Price: </p><h1>$" + answer2.toFixed(2) + "</h1>");
});


