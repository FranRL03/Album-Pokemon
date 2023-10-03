$(document).ready(function () {

    $.ajax({
        url: 'https://pokeapi.co/api/v2/item?limit=1000',
        type: 'GET'
    }).done(function (resp) {
        var listaItems = resp.results;
        listaItems.forEach(function (item) {
            $.ajax({
                url: item.url,
                type: 'GET'
            }).done(function (objeto) {
                var template = ``
            })

        });
    });

});


