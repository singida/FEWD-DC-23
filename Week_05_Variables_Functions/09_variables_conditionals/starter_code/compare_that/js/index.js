$(document).ready(function() {

	var a;
	var b;

	$('#submit').click(compareNumbers);

	function compareNumbers() {
		a = $('#a').val();
		a = parseInt(a);
		b = $('#b').val();
		b = parseInt(b);
		console.log(a);
		console.log(b);
	

		if (a > b) {
			$('#comparison').html('>');
			$('body').removeClass('greenBackground');
			$('body').addClass('pinkBackground');
		} else if (a == b) {
			$('#comparison').html('=');
		} else if (a < b) {
			$('#comparison').html('<');
			$('body').removeClass('pinkBackground');
			$('body').addClass('greenBackground');
		}
		else {
			$('#comparison').html('?');
		}
	}



});