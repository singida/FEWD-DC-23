$(document).ready(function() {

var foodImages = [
	'images/food1.jpg',
	'images/food2.jpg',
	'images/food3.jpg',
	'images/food4.jpg',
	'images/food5.jpg',
	'images/food6.jpg',
	'images/food7.jpg',
	'images/food8.jpg'
];

var currentIndex = 0;
//bc right off the bat when I load the page, I'm making an assumption that I'm on the first image
//keeps track of what image is being displayed

//Skip button: when you click the button, display the next image in the array.

$('.btn').click(function() {
	var action = $(this).val();
	//this is whatever you click on

	if (action == "Skip") {
		//Go to next image
		if (currentIndex < (foodImages.length - 1)) {
			currentIndex = currentIndex + 1;
		} else {
			currentIndex = 0;
		}
	}

	if (action == "Back") {
		//Go back an image
		if (currentIndex > 0) {
			//Make sure currentIndex is not on the first image
			currentIndex = currentIndex - 1;
		} else {
			currentIndex = foodImages.length - 1;
		}
	}

	$('#image-to-vote-on').attr('src', foodImages[currentIndex]);

});
//my class of button, when I click on it I will create an anonymous function
//have back and skip buttons

});