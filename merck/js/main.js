$(document).ready(function(){
    console.log('probando jquery');

    // Estilos del Tag menú
    $(".tag-cachorro-1").click(function(e){
        e.preventDefault();
        $('.nav-item-1').addClass('gris-oscuro');
        $( '.nav-item-2' ).removeClass( 'gris-oscuro' );
        $( '.nav-item-3' ).removeClass( 'gris-oscuro' );
    });
    $(".tag-cachorro-2").click(function(e){
        e.preventDefault();
        $('.nav-item-2').addClass('gris-oscuro');
        $( '.nav-item-1' ).removeClass( 'gris-oscuro' );
        $( '.nav-item-3' ).removeClass( 'gris-oscuro' );
    });
    $(".tag-cachorro-3").click(function(e){
        e.preventDefault();
        $('.nav-item-3').addClass('gris-oscuro');
        $( '.nav-item-2' ).removeClass( 'gris-oscuro' );
        $( '.nav-item-1' ).removeClass( 'gris-oscuro' );
    });

    // Solicitud servicios blog
    const url = "https://26b16a8c.ngrok.io/";

    $.ajax({
        url: url + "api/Blog/BlogsPrincipales",
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            $('#titulo-solicitado').html('<h4>'+response[0].titulo+'</h4>');
            console.log(response);
        }
    });
    
});