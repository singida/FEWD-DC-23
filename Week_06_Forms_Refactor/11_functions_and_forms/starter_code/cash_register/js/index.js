//step 0 - define total - any assumption you make, start with it first (starts with what user is doing)
//step 1 - click cursor into form
//step 2 - type a number
//step 3 - hit enter or wait for user to submit form
//step 4 - find newEntry field (JS takes over); if you are waiting for a form submit or click or mousing over something, realize that it's an event 
//step 5 - get field value
//step 6 - add value to total
//step 7 - display value to user/show new total
//step 8 - clear the form
//step 9 - show each value the user entered

$(document).ready(function() {

// Define total
var total = 0;

// Wait for the user to submit the form - can use form tag or #entry (IDs are better bc more specific)
$('form#entry').submit(addToTotal); //being hyper specific to say I want the form with ID of entry

// When the user submits the form: everything in this pseudo code happens within the function, so close } below pseudo code
function addToTotal() {
	event.preventDefault();
	// Find new entry field
	// Get field's value
	var entry = $('#newEntry').val(); //.val always has ()afterwards
	entry = parseInt(entry);
	// declaring a new variable called entry and being assigned value of ID newEntry (which is input field)
	// Add the value to total
	total = total + entry;
	// Show new total to the user - whenever you want to show, use jQuery ($)
	$('#total').html(total);
	console.log(total);
	// Clear the form
	$('#newEntry').val(''); //these two quotes set it back to nothing

	// Show the value the user entered
	$('#entries').append('<tr><td>' + entry + '</td></tr>');
	//I want the javascript to go to the selector and replace any of the content in the selector with whats in the ()
}

});


	





