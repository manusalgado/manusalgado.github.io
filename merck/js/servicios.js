$(document).ready(function(){
    console.log('probando jquery');

    // Solicitud servicios blog

    // Principales
    const url = "https://26b16a8c.ngrok.io/";

    $.ajax({
        url: url + "api/Blog/BlogsPrincipales",
        type: 'GET',
        dataType: 'json',
        success: function (response) {

            response.forEach(function(post){
                let html = 
                '<div class="card item"><div class="card-body"><h4>'
                +post.titulo+
                '</h4> <a href="interna.html"><img src="'
                +post.imagen+
                '" class="card-img-top" alt="Card image"></a></div></div>';
                
                $('#titulo-solicitado').append(html);
            });
            console.log(response);
        }
    });

    // Recientes
    $.ajax({
        url: url + "api/Blog/Recientes",
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            response.forEach(function(post){
                let html = '<li><a href="#">'+post.titulo+'</a></li>';
                $('#recientes').append(html);
            });
            console.log(response);
        }
    });

    // Mejores calificados
    $.ajax({
        url: url + "api/Blog/MejorCalificados",
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            response.forEach(function(post){
                let html = '<li><a href="#">'+post.titulo+'</a></li>';
                $('#mejores-calificados').append(html);
            });
            console.log(response);
        }
    });

     // Filtros
     $.ajax({
        url: url + "api/Blog/FiltroBlogs",
        type: 'POST',
        data:{
            "idTipo":1,
            "idCategoria":2,
            "skip":0,
            "take":2
        },
        dataType: 'json',
        success: function (response) {
            
            console.log(response);
        }
    });

    // url's
    //http://26b16a8c.ngrok.io/Home/Api

    // perro 2 gato 1 cachorro 1 adulto 2 senior 3
    
});
