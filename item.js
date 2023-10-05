$(document).ready(function () {

    $.ajax({
        url: 'https://pokeapi.co/api/v2/item?limit=20',
        type: 'GET'
    }).done(function (resp) {
        var totalItems = resp.count;
        var listaItems = resp.results;

        listaItems.forEach(function (item) {
            $.ajax({
                url: item.url,
                type: 'GET'
            }).done(function (objeto) {
                var template = `<div itemid="${objeto.id}" class="btn btn-detail badge rounded-pill col-2 mb-4 ms-5 mt-5"><img src=${objeto.sprites.default}> <p>${objeto.name}</p></div>`;
                $('#lista-items').append(template);
            })

        });

        for (var i = 1; i < totalItems / 20; i++) {
            var template = `<li class="page-item item" idPag="${i}"><spam class="page-link" href="#">${i}</spam></li>`;
            $('#pagination').append(template);
        };




    });

    $(document).on('click', '.item', function () {        
        var pagina = $(this).attr('idPag');        
        $.ajax({
            url: `https://pokeapi.co/api/v2/item?limit=20$offset=${pagina - 1 * 20}`,
            type: 'GET'
        }).done(function (itemPag) {            
            var itemsPag = itemPag.results;
            borrar();
            itemsPag.forEach(function(objeto){
                $.ajax({
                    url: objeto.url,
                    type: 'GET'
                }).done(function(item){                    
                    var template = `<div itemid="${item.id}" class="btn btn-detail badge rounded-pill col-2 mb-4 ms-5 mt-5"><img src=${item.sprites.default}> <p>${item.name}</p></div>`;
                    $('#lista-items').append(template);
                });
                
            });
            
        });
    });

    $(document).on('click', '.btn-detail', function () {
        var itemId = $(this).attr('itemid');
        $.ajax({
            url: `https://pokeapi.co/api/v2/item/${itemId}`,
            type: 'GET'
        }).done(function (item) {

            $('#item-name').html(item.name);
            $('#imgItem').attr('src', item.sprites.default);
            $('#descItem').html(item.flavor_text_entries[0]);
            console.log(item.flavor_text_entries.text)
            $('#itemModal').modal('show');

        })
    });



});

function borrar(){
    $("#lista-items").empty();
}