$(document).ready(function(){
    console.log('probando jquery');

    // Estilos del Tag menú
    $(".tag-cachorro-1").click(function(e){
        e.preventDefault();
        $('.nav-item-1').addClass('gris-oscuro');
        $( '.nav-item-2' ).removeClass( 'gris-oscuro' );
        $( '.nav-item-3' ).removeClass( 'gris-oscuro' );
        //parrafos
        $('.p-cachorro').css('font-weight', "bold");
        $('.p-adulto').css('font-weight', "normal");
        $('.p-senior').css('font-weight', "normal");
    });
    $(".tag-cachorro-2").click(function(e){
        e.preventDefault();
        $('.nav-item-2').addClass('gris-oscuro');
        $( '.nav-item-1' ).removeClass( 'gris-oscuro' );
        $( '.nav-item-3' ).removeClass( 'gris-oscuro' );
        //parrafos
        $('.p-cachorro').css('font-weight', "normal");
        $('.p-adulto').css('font-weight', "bold");
        $('.p-senior').css('font-weight', "normal");
    });
    $(".tag-cachorro-3").click(function(e){
        e.preventDefault();
        $('.nav-item-3').addClass('gris-oscuro');
        $( '.nav-item-2' ).removeClass( 'gris-oscuro' );
        $( '.nav-item-1' ).removeClass( 'gris-oscuro' );
        //parrafos
        $('.p-cachorro').css('font-weight', "normal");
        $('.p-adulto').css('font-weight', "normal");
        $('.p-senior').css('font-weight', "bold");
    });
    
});