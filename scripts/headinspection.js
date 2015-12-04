// JavaScript Document
$( document ).ready(function() {
	
	$('.menu-trigger').on('click', function() {
	  $(this).toggleClass('active');
	  $('.nav-contents, .type-wrapper').toggleClass('active');
	});
	
	 setTimeout(function(){ 
	 	$('.hi-question').first().addClass('active');
		},400);
	
	$('input').click(function(){
		$('.hi-question, .counter-bar').toggleClass('active');
		$('.current').html($('.current').html() === '14' ? '15' : '14');	
	});
	
	$('.back').click(function(){
		$('.hi-question, .counter-bar').toggleClass('active');	
		$('.current').html($('.current').html() === '14' ? '15' : '14');	
	});
	
	//checkbox unchecker
	$('input[type="checkbox"]').on('change', function() {
		$('input[name="' + this.name + '"]').not(this).prop('checked', false);
	});


});