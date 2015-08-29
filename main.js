$(document).ready(function(){
    $('nav a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top - $('nav').height()
	    }, 500);
	    return false;
	});
});