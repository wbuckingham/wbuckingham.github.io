/* this is a comment */ 
//This is also a comment
function askQuestions() {

var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');

var fullName = firstName + ' ' + lastName;
$('h2').text('Hello ' + fullName);


if (firstName.toLowerCase() === 'general' && lastName.toLowerCase() !== 'assembly') {
	console.log('Hello General');
}
	
var faveColour = prompt('What is your favourite colour?').toLowerCase();
if (faveColour == 'red' ||
	faveColour == 'green' ||
	faveColour == 'blue' ||
	faveColour == 'yellow') {
	$('h2').css('background-color', faveColour);
	}

}

//When the page has loaded
$(function() {

	$('img').on('click', askQuestions);

	//Get all the sections
	var sections = $('h3').next();

	//Hide all the sections
	sections.hide();

	//When the user clicks an h3
	$('h3').on('click', function() {

		//Remeber the section the user wants to see
		var thisSection = $(this).next();

		//Hide all the sections except the one the user wants to see
		sections.not(thisSection).slideUp(500);

		//slide toggle the one the user wants to see
		(thisSection).slideToggle(500);
	});
});