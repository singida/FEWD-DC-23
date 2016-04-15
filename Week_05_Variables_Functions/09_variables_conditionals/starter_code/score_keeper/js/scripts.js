$(document).ready(function() {

	var score = 0;

$('#add5').click(addFive);

function addFive() {
	score = score + 5; 
	$('#result').html(score);
	}// html is changing 0, change html between open and close tag

$('#add10').click(addTen);

function addTen() {
	score = score + 10;
	$('#result').html(score);
}

$('#sub1').click(subOne);

function subOne() {
	score = score - 1;
	$('#result').html(score);
}

$('#zero').click(reset);

function reset() {
	score = 0;
	$('#result').html(score);
}

});

//'Snow is "fun"'

//"I can't go out"

//'I love "Charlotte\'s Web"
//"I love \"Charlotte's Web\""




