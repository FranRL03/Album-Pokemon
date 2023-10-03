$(document).ready(function () {

    // $.ajax({
    //     url: 'https://pokeapi.co/api/v2/pokemon/',
    //     type: 'GET'
    // }).done(function (resp) {
    //     var listadoPokemons = resp.results;
    //     var idPk = 1;
    //     var color = "";

    $.ajax({
        url: 'https://pokeapi.co/api/v2/type/',
        type: 'GET'
    }).done(function (tipo) {
        var listadoTipos = tipo.results;

        listadoTipos.forEach(function (types) {
            console.log(types.name)

            // if (types.name == 'grass') {
            //     $('.card-body').addClass('.grass');
            // }

            $.ajax({
                url: 'https://pokeapi.co/api/v2/pokemon/',
                type: 'GET'
            }).done(function (resp) {
                var listadoPokemons = resp.results;
                var idPk = 1;
                var color = "";


            });
        });

        listadoPokemons.forEach(function (pokemon) {

            console.log(pokemon)

            // var tipo = pokemon.types[0].type.name;

            // console.log(tipo)



            var template = `<div class="card m-5 border-4 border-warning" id="carta-sombra" style="width: 18rem;">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${idPk}.png"
                class="card-img-top" alt="..." height="240px">
            <div class="card-body" id="${types.name}">
                <div class="miniDiv">
                    <p class="text-center pt-2">${pokemon.name}</p>
                </div>
                <p class="card-text pt-4">Ataque:
                    <hr>
                    Agilidad:
                </p>
            </div>
        </div>`;
            $('#lista-pokemon').append(template);
            idPk++;


        });
    });



});