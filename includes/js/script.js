/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/

$(function() {

	$('#alertMe').click(function(e)	{
		
		/* Stop the default behaviour of the element from triggering i.e. page refresh if no href is provided */
		e.preventDefault();
		
		/* Allow the alert section (successAlert) to slide down when the alertMe button is clicked */
		$('#successAlert').slideDown();  
		
	});
	
	$('a.pop').click(function(e)	{
		
		/* Stop the default behaviour of the element from triggering i.e. page refresh if no href is provided */
		e.preventDefault();
		
	});
	
	$('a.pop').popover();
	
	$('[rel="tooltip"]').tooltip();
	
});