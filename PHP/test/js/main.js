$(function(){
  
$(document).ready(function () {
  $('section').addClass('magictime tinDownIn');
})


$('#toggle').hide();
$('.boton').click(function(){

	$('#toggle').toggle('bounce', {times:1, direction: 'left'}, 1000);
})

$('#toggle1').hide();
$('.boton').click(function(){

	$('#toggle1').toggle('bounce', {times:1, direction: 'left'}, 1100);
})

$('#toggle2').hide();
$('.boton').click(function(){

	$('#toggle2').toggle('bounce', {times:1, direction: 'left'}, 1200);
})

$('#toggle3').hide();
$('.boton').click(function(){

	$('#toggle3').toggle('bounce', {times:1, direction: 'left'}, 1300);
})

$('#toggle4').hide();
$('.boton').click(function(){

	$('#toggle4').toggle('bounce', {times:1, direction: 'left'}, 1400);
})

$('#toggle5').hide();
$('.boton').click(function(){

	$('#toggle5').toggle('bounce', {times:1, direction: 'left'}, 1500);
})

$('.card-info-detail').hide();
$('.desplegar').click(function(){

	$( ".card-info-detail" ).slideToggle( "slow" );

})

/*$.getJSON('news_mock.json', function(data){
	console.log(data);
}):*/

$.ajax({

	url:'news_mock.json',
	dataType: 'json',
	type: 'get',
	cache: false,
	success: function(data){
		$(data).each(function(index, value){
			console.log(value);
			
		});
	}
});


  
});







