$(document).ready(function () {
    console.log('Hola')
    $.ajax({
        url: 'https://pokeapi.co/api/v2/item?limit=20',
        type: 'GET'
    }).done(function (resp) {
        var listaItems = resp.results;
        listaItems.forEach(function (item) {
            $.ajax({
                url: item.url,
                type: 'GET'
            }).done(function (objeto) {
               var template = `<span class="badge rounded-pill col-2 mb-4 ms-5 mt-5" data-bs-toggle="modal" data-bs-target="#myModal"><img src=${objeto.sprites.default}> <p>${objeto.name}</p></span>`;               
                
                $('#lista-items').append(template);
            })

        });
    });

});