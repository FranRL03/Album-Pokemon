$(document).ready(function(){
    $.ajax({
        url: 'https://pokeapi.co/api/v2/berry?',
        type: 'GET'
    }).done(async function(respuesta) {
        var totalBerries = respuesta.count;
        var listaBerries = respuesta.results;
        var i = 1;
    
        for (const item of listaBerries) {
            try {
                const berry = await $.ajax({
                    url: item.url,
                    type: 'GET'
                });
                
                if (i < 9) {
                    var template = `<div itemid="${berry.id}" class="btn btn-detail badge rounded-pill col-2 mb-4 ms-5 mt-5"><img src='https://www.pokencyclopedia.info/sprites/items/berries/i_4_0${i}--${berry.name}-berry.png'> <p>${berry.name}</p></div>`;
                    $('#lista-berrys').append(template);
                }
    
                if (i >= 10) {
                    var template = `<div itemid="${berry.id}" class="btn btn-detail badge rounded-pill col-2 mb-4 ms-5 mt-5"><img src='https://www.pokencyclopedia.info/sprites/items/berries/i_4_${i}--${berry.name}-berry.png'> <p>${berry.name}</p></div>`;
                    $('#lista-berrys').append(template);
                }
    
                i++;
            } catch (error) {
                console.log('Error al obtener la información de la baya:', error);
            }
        }
    });

        /*function url (nombre){
            var img='';
        switch(nombre){
            case 'cheri':
                img = 'https://www.pokencyclopedia.info/sprites/items/berries/i_4_01--cheri-berry.png'
                break;             
            case '':
                img = 'https://www.pokencyclopedia.info/sprites/items/berries/i_4_01--cheri-berry.png'
            break;
        } 
        return img;
    }*/            

    });

    
        
    
});