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

    // perro 2 gato 1 cachorro 1 adulto 2 senior 3

    //Random
    /*$.ajax({
        url: url + "api/Blog/RandomBlogs",
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            response.forEach(function(post){
                let html = '<h5 class="card-title">'+post.titulo+'</h5>'; 
                $('.random-title').append(html);
            });
            console.log(response);
        }
    });*/

    
    
});



/*yo lo haria poniendole estilos asi
Como
.contenedor-de-items .item:nth-child(1) {   }
esos los del div grande
el primero
le pongo ancho 70%
al segundo esto
.contenedor-de-items .item:nth-child(2) { width: 30%;   }
El tercero que seria el de abajo a la izquierda
.contenedor-de-items .item:nth-child(3) { width: 30%;   }
el 4 tambien
.contenedor-de-items .item:nth-child(4) { width: 35%;   }
a no a los dos de abano 35%
y luego al ultimo que seria el 5to
.contenedor-de-items .item:nth-child(5) { width: 30%;   }
mejor dicho...
.contenedor-de-items .item:nth-child(3) { width: 30%;   }

.contenedor-de-items .item:nth-child(3) { width: 30%;   }   
espera se me fue*/

/*
    // Extra small devices (portrait phones, less than 576px) @media (max-width: 575.98px) { ... }
*/