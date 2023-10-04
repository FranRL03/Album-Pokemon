const numPokemons = 20;
const pokemons = [];

$(document).ready(function () {

    for (var i = 0; i < numPokemons; i++) {
        $.ajax({
            url: 'https://pokeapi.co/api/v2/pokemon/' + [i + 1],
            type: 'GET'
        }).done(function (resp) {
            pokemons.push(resp);

            var template = `<div class="card m-5 border-4 border-warning ${resp.types[0].type.name} carta-sombra">
                <img src= ${resp.sprites.front_default}
                    class="card-img-top" alt="..." height="240px">
                <div class="card-body">
                    <div class="miniDiv">
                        <p class="text-center pt-5">${resp.name}</p>
                        <button type="button" itemid="${resp.id}" class="btn-view-pokemon">prueba</button>
                    </div>

                </div>
            </div>`;
            $('#lista-pokemon').append(template);



            $(document).on('click', '.btn-view-pokemon', function () {
                var pokemonId = $(this).attr('itemid');

                $.ajax({
                    url: `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
                    type: 'GET'
                }).done(function (item) {

                    $('#img').attr('src', item.sprites.front_default)
                    $('#id').html('ID: ' + item.id);
                    $('#move').html('MOVE: ' + item.moves[0].move.name);
                    $('#hp').html('HP: ')

                    $('#pokemonModal').modal('show');
                });



            });
        });

        // IMPORTANTE: IDENTIFICAR QUE DIVS ES EL QUE SE HA PULSADO Y SACAR SU HTML AL CLICKAR EL BOTON


    }





    // EL PRIMER AJAX SOLO TRAES NOMBRE Y URL DEL POKEMON Y DEL SEGUNDO AJAX LE METES LA URL QUE HAS SACADO Y
    // SACAS LA INFO DEL API

    // $.ajax({
    //     url: 'https://pokeapi.co/api/v2/pokemon?limit=10',
    //     type: 'GET'
    // }).done(function (res) {
    //     pokemonList = res.results
    //     pokemonList.forEach(pokemon => {

    //         $.ajax({
    //             url: pokemon.url,
    //             type: 'GET'
    //         }).done(function (poke) {
    //             var template = `<div class="card m-5 border-4 border-warning ${poke.types[0].type.name} carta-sombra">
    //             <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${poke.id}.png"
    //                 class="card-img-top" alt="..." height="240px">
    //             <div class="card-body">
    //                 <div class="miniDiv">
    //                     <p class="text-center pt-2">${poke.name}</p>
    //                     <button type="button" class="btn-view-pokemon">prueba</button>
    //                 </div>

    //             </div>
    //         </div>`;
    //             $('#lista-pokemon').append(template);

    //         })

    //     });
    // })



    //To Do: ordenar el array para que los pokemons salgan en orden

    //console.log(pokemons);

    //     <p class="card-text pt-4">Ataque: ${resp.stats[1].base_stat}
    //     <hr>
    //     Habilidad: ${resp.abilities[0].ability.name}
    // </p>

});


