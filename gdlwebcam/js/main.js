
var api = 'AIzaSyD-wl_aH7YF4n-9iED35CGJl4kAVW1ekhs';


      function initMap() {

      	var latLng = {
      		lat:20.6737777,
      		lng:-103.405454
      	};


       var map = new google.maps.Map(document.getElementById('mapa'), {
          'center':latLng ,
          'zoom': 14
        });

       var contenido = '<h2>GDLWEBCAMP</h2>' + '<p>Del 10 al 12 de diciembre</p>' + '<p>¡Visitanos!</p>'

       var informacion = new google.maps.InfoWindow({

       		content: contenido
       });

       var marker = new google.maps.Marker({
      	
      	position: latLng,
      	map: map,
      	title: 'GDLWEBCAMP'
      });

       marker.addListener('click', function(){

       		informacion.open(map, marker);

       });

      }





(function(){

	"use strict";

	var regalo = document.getElementById('regalo');

	document.addEventListener('DOMContentLoaded', function(){

		//campos datos usuarios

		var nombre = document.getElementById('nombre');
		var apellido = document.getElementById('apellido');
		var email = document.getElementById('email');


		//campos pases

		var pase_dia = document.getElementById('pase_dia');
		var pase_dos_dias = document.getElementById('pase_dos_dias');
		var pase_completo = document.getElementById('pase_completo');

		//botones y divs

		var calcular = document.getElementById('calcular');
		var errorDiv = document.getElementById('error');
		var botonRegistro = document.getElementById('btnRegistro');
		var lista_productos = document.getElementById('lista-productos');
		var suma = document.getElementById('suma-total');

		//extras

		var camisas = document.getElementById('camisa_evento');
		var etiquetas = document.getElementById('etiquetas');

		calcular.addEventListener('click', calcularMontos);

		pase_dia.addEventListener('blur', mostrarDias);
		pase_dos_dias.addEventListener('blur', mostrarDias);
		pase_completo.addEventListener('blur', mostrarDias);

		nombre.addEventListener('blur', validarCampos);
			
		apellido.addEventListener('blur', validarCampos);
			
		email.addEventListener('blur', validarCampos);
		email.addEventListener('blur', validarMail);



		function validarCampos(){

			if (this.value === '' ) {
				errorDiv.style.display = 'block';
				errorDiv.innerHTML = "Este campo es obligatorio";
				this.style.border = '1px solid red';
				errorDiv.style.border = '1px solid red';
			}else{
				errorDiv.style.display = 'none';
				this.style.border = '1px solid #cccccc';
			}
		};

		function validarMail(){
			if (this.value.indexOf("@") > -1) {
				errorDiv.style.display = 'none';
				this.style.border = '1px solid #cccccc';
			}else{
				errorDiv.style.display = 'block';
				errorDiv.innerHTML = "Debe tener almenos una @";
				this.style.border = '1px solid red';
				errorDiv.style.border = '1px solid red';
			}
		};

		









		function calcularMontos(event){

			event.preventDefault();
			if (regalo.value === '') {
				alert("Olvidaste elegir tu regalo");
				regalo.focus();
			}else{
				
				var boletosDia = parseInt(pase_dia.value, 10) || 0;
				var boletoDosDias = parseInt(pase_dos_dias.value, 10) || 0;
				var boletoCompleto = parseInt(pase_completo.value, 10) || 0;
				var cantidadCamisas = parseInt(camisas.value, 10) || 0;
				var cantidadEtiquetas = parseInt(etiquetas.value, 10) || 0;

				console.log("boletos dia: "+ boletosDia);
				console.log("boletos para dos dias: "+ boletoDosDias);
				console.log("boletos completo: "+ boletoCompleto);

				var totalPagar = (boletosDia * 30) + (boletoDosDias * 45) + (boletoCompleto * 50) + ((cantidadCamisas * 10) * .93) + (cantidadEtiquetas * 2);
				
				var listadoProductos = [];

				if (boletosDia >= 1) {
					listadoProductos.push(boletosDia + " Pases por dia");
				}if (boletoDosDias >= 1) {
					listadoProductos.push(boletoDosDias + " Pases por dos dias");
				}if (boletoCompleto >= 1) {
					listadoProductos.push(boletoCompleto + " Pase completo");
				}if (cantidadCamisas >= 1) {
					listadoProductos.push(cantidadCamisas + " Camisas");
				}if (cantidadEtiquetas >= 1) {
					listadoProductos.push(cantidadEtiquetas + " Etiquetas");
				}
				
				
				//ingresar resumen en la pantalla del usuario

				 lista_productos.style.display = "block";
				 lista_productos.innerHTML = ''; // esto es para limpiar el html

				for (var i = 0; i < listadoProductos.length; i++) {
					  lista_productos.innerHTML +=   listadoProductos[i] + '<br>';
				}

				suma.innerHTML = "$ " + totalPagar.toFixed(2);//toFixed es para que salgan maximo numeros enteros o maximo dos decimales

			}

		}

		function mostrarDias(){
			var boletosDia = parseInt(pase_dia.value, 10) || 0;
			var boletoDosDias = parseInt(pase_dos_dias.value, 10) || 0;
			var boletoCompleto = parseInt(pase_completo.value, 10) || 0;

			var diasElegidos = [];

			if (boletosDia > 0) {

				diasElegidos.push('viernes');
			}if (boletoDosDias > 0) {

				diasElegidos.push('viernes', 'sabado');
			}if (boletoCompleto > 0) {

				diasElegidos.push('viernes', 'sabado', 'domingo');
			}
			for (var i = 0; i < diasElegidos.length; i++) {
				     
				 document.getElementById(diasElegidos[i]).style.display = 'block';
			}
		}




	}); //DOM CONTENT LOADED
})();



$(function(){

	//lettering

	$('.nombre-sitio').lettering();

	//menu fijo
	var windowHeight = $(window).height();
	var barraAltura = $('.barra').innerHeight();

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();

		if (scroll > windowHeight) {

			$('.barra').addClass('fixed');
			$('body').css({'margin-top': barraAltura + 'px'});

		}else{
			
			$('.barra').removeClass('fixed');
			$('body').css({'margin-top':'0px'});
		}
		
	});

	//menu responsive

	$('.menu-movil').click(function(){

		$('.navegacion-principal').slideToggle();
	});


	//programa de conferencias

	$('div.ocultar').hide();
	$('.programa-evento .info-curso:first').show();
	$('.menu-programa a:first').addClass('activo');



	$('.menu-programa a ').click(function(){

		$('menu-programa a').removeClass('activo');

		$(this).addClass('activo');

		$('.ocultar').hide();



		var enlace = $(this).attr('href');
		$(enlace).fadeIn(1000);

		//para evitar el brinco
		return false;
	});

	//animaciones de los numeros de contadores

	var resumenLista = jQuery('.resumen-evento');
	if (resumenLista.length > 0) {
		$('.resumen-evento').waypoint(function(){

			$('.resumen-evento li:nth-child(1) p').animateNumber({number: 6}, 1200);
			$('.resumen-evento li:nth-child(2) p').animateNumber({number: 15}, 1200);
			$('.resumen-evento li:nth-child(3) p').animateNumber({number: 3}, 2000);
			$('.resumen-evento li:nth-child(4) p').animateNumber({number: 9}, 1500);
		}, {
			offset: '60%'
		});
	}

	

	//cuenta regresiva
	$('.cuenta-regresiva').countdown('2017/12/31 00:00:00', function(event){
		$('#dias').html(event.strftime('%D'));
		$('#horas').html(event.strftime('%H'));
		$('#minutos').html(event.strftime('%M'));
		$('#segundos').html(event.strftime('%S'));
	});


});