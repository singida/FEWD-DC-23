$(document).ready(function() {
<<<<<<< HEAD
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
=======
    // This is the total of my register when I load page.
    var total = 0;

    $('#entry').submit(useRegister);

    function useRegister(event) {
        event.preventDefault();

        // Get what the users entered.
        var newEntry = $('#newEntry').val();
        $('#entries').html('<td>' + newEntry + '</td>');

        newEntry = parseInt(newEntry);
        total = total + newEntry;
        console.log(total);

        $('#total').html(total);
    }
>>>>>>> ga-students/master

});