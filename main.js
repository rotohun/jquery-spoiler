jQuery(document).ready(function($) {

// Hide Spoiler.
$('.spoiler span').hide();

// Add Button.
$('.spoiler').append('<button> Reveal Spoiler!! </button>');
// When button pressed
$('button').click(function() {
	// 1. Show spoiler

	$(this).prev().show();

	// 2. Get rid of button

	$(this).remove();
});


	
});