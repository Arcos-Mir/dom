$(document).ready(function(){
    //encadenar elementos 
//Parent
    // $('#tercera').parent().css({
    //     background: '#1b3d82'
    // });
//Parents
    //$('#tercera').parents();

//children

    //*nos permite filtrar los elementos hijos que tengamos a partir de un contenedor padre
    //$('#padre').children();
    //$('#padre').children().fadeOut(500);

    //$('#padre').children('#tercera').fadeOut(500);

//Find
//nos permite buscar dentro de los niveles los elementos que necesitemos
    //$('#contenedor').find('div.caja').slideUp();

//siblings
    //seleccionar los elementos hermanos y aplicarles una animacion o efecto
    //$('#tercera').siblings().fadeOut();

//next - previ
    //$('#tercera').prev().css({ //seleecciona elemento anterior
        //background: '#000'
    //});

    //$('#tercera').prevAll().css({ //seleecciona odos los elemento anteriores
        //background: '#000'
    //});

    $('#tercera').next().css({ //seleecciona elemento anterior
        background: '#000'
    });

    //$('#tercera').nextAll().css({ //seleecciona odos los elemento posteriores
        //background: '#000'
    //});



});