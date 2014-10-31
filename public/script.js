$(document).ready(function() {
    $('#email').hover(function() {
    	$('.image>img').hide();
    	$('#james').show();
    });

    $('#city').hover(function() {
    	$('.image>img').hide();
    	$('#seattle').show();
    });

    $('#tinker').hover(function() {
    	$('.image>img').hide();
    	$('#tinkerpic').show();
    });

    $('#coffee').hover(function() {
    	$('.image>img').hide();
    	$('#coffeepic').show();
    });
});