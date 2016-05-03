// $('#grayButton').click(switchGray);
// $('#whiteButton').click(switchWhite);
// $('#blueButton').click(switchBlue);
// $('#yellowButton').click(switchYellow);
//so instead of above, we do:
$('#switcher li').click(switchColor);

function switchColor() {
	console.log($(this).attr('data-color'));
	//if i want to show anything of the thing i clicked on, always using 'this'
	//getting data color attribute for whatever button
	//gets my color class name from data-color attr
	var bodyColor = $(this).attr('data-color');
	//sets the class name to my body
	$('body').attr('class', bodyColor);

	//now if i add a new color, i don't have to touch JS, just li on html and css
}

// function switchGray() {
//   $('body').attr('class', 'gray');
//   //or can $('body').addClass
//   //attr is better bc otherwise you have to remove class
//   //all buttons are ul and id=switcher
// }

// function switchWhite() {
//   $('body').attr('class', 'white');
// }

// function switchBlue() {
//   $('body').attr('class', 'blue');
// }

// function switchYellow() {
//   $('body').attr('class', 'yellow');
// }


//this is redundant, what if i want 600 buttons?
