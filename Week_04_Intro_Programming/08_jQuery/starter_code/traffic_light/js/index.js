$(document).ready(function() {
//Implement the red light using jQuery. Don't forget to add the script tags.


var stopButtonId = '#stopButton';


$('#stopButton').click(colorStopLight);
$('#slowButton').click(colorSlowLight);
$('#goButton').click(colorGoLight);

function colorStopLight() {
	$('#stopLight').css('backgroundColor', 'red');
	$('#slowLight, #goLight').css('backgroundColor', 'black');
}

function colorSlowLight() {
	$('#stopLight, #goLight').css('backgroundColor', 'black');
	$('#slowLight').css('backgroundColor', 'yellow');
}

function colorGoLight() {
	$('#stopLight, #slowLight').css('backgroundColor', 'black');
	$('#goLight').css('backgroundColor', 'green');
}

colorStopLight();

setInterval(function() {
	colorStopLight();

	setTimeout(function() {
	colorGoLight();

	setTimeout(function() {
	colorSlowLight();
	}, 2000);
}, 3000);
}, 6000);

});
