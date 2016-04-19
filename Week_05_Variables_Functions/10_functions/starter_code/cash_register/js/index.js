$(document).ready(function() {
	//This is the total of my register when I load the page.
	var total = 0;
	
	$('#entry').submit(useRegister);

	function useRegister() {
		event.preventDefault();
		//Get what the users entered. It's the value of newEntry
		var newEntry = $('#newEntry').val();
		$('#entries').html('<td>' + newEntry + '</td>');

		newEntry = parseInt(newEntry); //will conver to number
		total = total + newEntry;
		console.log(total);

		$('#total').html(total);
	}

});