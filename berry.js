$(document).ready(function(){
    $.ajax({
        url: 'https://pokeapi.co/api/v2/berry?limit=20&offset=0',
        type: 'GET'
    }).done(async function(respuesta) {
        var totalBerries = respuesta.count;
        var listaBerries = respuesta.results;
        
    
        for (const item of listaBerries) {
            try {
                const berry = await $.ajax({
                    url: item.url,
                    type: 'GET'
                });
                
                if (berry.id < 9) {
                    var template = `<div berryId="${berry.id}" class="btn btn-detail badge rounded-pill col-2 mb-4 ms-5 mt-5"><img src='https://www.pokencyclopedia.info/sprites/items/berries/i_4_0${berry.id}--${berry.name}-berry.png'> <p>${berry.name}</p></div>`;
                    $('#lista-berrys').append(template);
                }
    
                if (berry.id >= 10) {
                    var template = `<div berryId="${berry.id}" class="btn btn-detail badge rounded-pill col-2 mb-4 ms-5 mt-5"><img src='https://www.pokencyclopedia.info/sprites/items/berries/i_4_${berry.id}--${berry.name}-berry.png'> <p>${berry.name}</p></div>`;
                    $('#lista-berrys').append(template);
                }
    
                
            } catch (error) {
                console.log('Error al obtener la información de la baya:', error);
            }
        }
        for (var i = 1; i < totalBerries / 20; i++) {
            var template = `<li class="page-item item" idPag="${i}"><spam class="page-link" href="#">${i}</spam></li>`;
            $('#pagination').append(template);
        };
    });

    $(document).on('click', '.item', function () {
        var pagina = $(this).attr('idPag');
        gestBerryOffset((pagina - 1) * 20);
    });


    function gestBerryOffset(offset){
        $.ajax({
            url: `https://pokeapi.co/api/v2/berry?limit=20&offset=${offset}`,
            type: 'GET'
        }).done(async function(respuesta){
            var listaBerries = respuesta.results;
            var j = 1;
            borrar();
            for (const item of listaBerries) {
                try {
                    const berry = await $.ajax({
                        url: item.url,
                        type: 'GET'
                    });
                    
                    if (berry.id < 9) {
                        var template = `<div berryId="${berry.id}" class="btn btn-detail badge rounded-pill col-2 mb-4 ms-5 mt-5"><img src='https://www.pokencyclopedia.info/sprites/items/berries/i_4_0${berry.id}--${berry.name}-berry.png'> <p>${berry.name}</p></div>`;
                        $('#lista-berrys').append(template);
                    }
        
                    if (berry.id >= 10) {
                        var template = `<div berryId="${berry.id}" class="btn btn-detail badge rounded-pill col-2 mb-4 ms-5 mt-5"><img src='https://www.pokencyclopedia.info/sprites/items/berries/i_4_${berry.id}--${berry.name}-berry.png'> <p>${berry.name}</p></div>`;
                        $('#lista-berrys').append(template);
                    }
        
                    i++;
                } catch (error) {
                    console.log('Error al obtener la información de la baya:', error);
                }
            }
        })

    }


    $(document).on('click', '.btn-detail', function(){
        var idBerry = $(this).attr('berryId');
        $.ajax({
            url: `https://pokeapi.co/api/v2/berry/${idBerry}`,
            type: 'GET'
        }).done(function(berry){
            $('#berry-name').html(berry.name);
            if(berry.id<9){
                $('#imgBerry').attr('src', `https://www.pokencyclopedia.info/sprites/items/berries/i_4_0${berry.id}--${berry.name}-berry.png`);
            }

            if(berry.id>=10){
                $('#imgBerry').attr('src', `https://www.pokencyclopedia.info/sprites/items/berries/i_4_${berry.id}--${berry.name}-berry.png`);
            }
            $('#descBerry').html(berry.flavors[0].flavor.name);
            $('#berryModal').modal('show');
        })
    })

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

    function borrar() {
        $("#lista-berrys").empty();
    }
    
        
    
