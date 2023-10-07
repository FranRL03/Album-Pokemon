$(document).ready(function(){
    $.ajax({
        url:'https://pokeapi.co/api/v2/berry?limit=20$offset=0',
        type: 'GET'
    }).done(function(respuesta){
        var totalBerries = respuesta.count;
        var listaBerries = respuesta.results;
        

        listaBerries.forEach(item => {            
            $.ajax({
                url: item.url,
                type: 'GET'
            }).done(function(berry){   
                
                var direccion = url(berry.name);
               
                var template = `<div itemid="${berry.id}" class="btn btn-detail badge rounded-pill col-2 mb-4 ms-5 mt-5"><img src='${direccion}'> <p>${berry.name}</p></div>`;               
                
                
                $('#lista-berrys').append(template);
            })

            
        });

        function url (nombre){
        switch(nombre){
            case 'cheri':
                img = 'ttps://www.pokencyclopedia.info/sprites/items/berries/i_4_01--cheri-berry.png'
                break;
            default:
                img='sin'
                break;
        } 
        return img; 
    }            

    });

    
        
    
});