$(function(){

	$(document).ready(function () {
	  $('section').addClass('magictime tinDownIn');
	})



	$('span').click(function(){

		$('.secciones-noticia').toggle('bounce', {times:1, direction: 'left'}, 1000);
	})





    $(document).on('click', '.desplegar', function(){
		$(this).parent().find('.card-info-detail').slideToggle( 'slow' );
	});



	var html = '';

	$.ajax({
		url:'news_mock.json',
		dataType: 'json',
		type: 'get',
		cache: false,
		success: function(data){
			$(data).each(function(index, row){
				console.log(row);

				html += '<div class="secciones-noticia">\
				  <blockquote id="toggle" class="desplegar">\
				    <div class="card-info clearfix">\
				      <div class="col-md-2">\
				        <article>\
				          <img src="'+row.image+'" >\
				        </article>\
				      </div>\
				      <div class="col-md-10">\
				       <p>'+row.title+'</p> \
				      </div> \
				    </div>\
				  </blockquote>\
				  <div class="card-info-detail row" style="display:none">\
				    <div class="card" id="wrapper">\
				      <img class="card-img-top" src="'+row.image+'" alt="Card image cap">\
				      <div class="card-body ">\
				        <h4 class="card-title">News</h4>\
				        <p class="card-text">'+row.content+'</p>\
				        <p class="card-text"><small class="text-muted"></small></p>\
				        <button type="button" name="button" class="btn btn-outline-primary btn-block">Ver mas...</button>\
				      </div>\
				    </div>\
				  </div>\
				</div>';
			});

			$('.card-item').append(html);
		}
	});  
});