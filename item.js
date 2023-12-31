$(document).ready(function () {

    $.ajax({
        url: 'https://pokeapi.co/api/v2/item?limit=20&offset=0',
        type: 'GET'
    }).done(function (resp) {
        var totalItems = resp.count;
        var listaItems = resp.results;

        listaItems.forEach(function (item) {
            $.ajax({
                url: item.url,
                type: 'GET'
            }).done(function (objeto) {
                var template = `<div itemid="${objeto.id}" class="btn btn-detail badge rounded-pill col-2 mb-4 ms-5 mt-5 fw-bold">
                    <img src=${objeto.sprites.default}> <p>${objeto.name.toUpperCase()}</p></div>`;
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
        getItemsWithOffset((pagina - 1) * 20);
    });

    $(document).on('click', '.btn-detail', function () {
        var itemId = $(this).attr('itemid');
        $.ajax({
            url: `https://pokeapi.co/api/v2/item/${itemId}`,
            type: 'GET'
        }).done(function (item) {

            $('#item-name').html(item.name.toUpperCase());
            $('#imgItem').attr('src', item.sprites.default);
            $('#descItem').html((item.flavor_text_entries[0].text).toUpperCase());
            console.log(item.flavor_text_entries.text)
            $('#itemModal').modal('show');

        })
    });

    //Metodo para obtener los pokemons paginados utilizando el offset
    function getItemsWithOffset(offset) {
        $.ajax({
            url: `https://pokeapi.co/api/v2/item?limit=20&offset=${offset}`,
            type: 'GET'
        }).done(function (itemPag) {
            var itemsPag = itemPag.results;
            borrar();
            itemsPag.forEach(function (objeto) {
                $.ajax({
                    url: objeto.url,
                    type: 'GET'
                }).done(function (item) {
                    var template = `<div itemid="${item.id}" class="btn btn-detail badge rounded-pill col-2 mb-4 ms-5 mt-5 fw-bold">
                        <img src=${item.sprites.default}> <p>${item.name.toUpperCase()}</p></div>`;
                    $('#lista-items').append(template);
                });

            });

        });
    }
});

function borrar() {
    $("#lista-items").empty();
}