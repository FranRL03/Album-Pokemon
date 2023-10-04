$(document).ready(function () {
    console.log('Hola')
    $.ajax({
        url: 'https://pokeapi.co/api/v2/item?limit=40',
        type: 'GET'
    }).done(function (resp) {
        var listaItems = resp.results;
        listaItems.forEach(function (item) {
            $.ajax({
                url: item.url,
                type: 'GET'
            }).done(function (objeto) {
                var template = `<div itemid="${objeto.id}" class="btn-detail badge rounded-pill col-2 mb-4 ms-5 mt-5"><img src=${objeto.sprites.default}> <p>${objeto.name}</p></div>`;

                $('#lista-items').append(template);
            })

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
    })



});