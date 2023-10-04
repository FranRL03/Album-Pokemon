const numPokemons = 100;
const pokemons = [];

$(document).ready(function () {

    for (var i = 0; i < numPokemons; i++) {
        $.ajax({
            url: 'https://pokeapi.co/api/v2/pokemon/' + [i + 1],
            type: 'GET'
        }).done(function (resp) {
            pokemons.push(resp);

            var template = `<div class="card btn-view-pokemon m-5 border-4 border-warning ${resp.types[0].type.name} carta-sombra" 
            type="button" itemid="${resp.id}">
                <img src= ${resp.sprites.front_default}
                    class="card-img-top" alt="..." height="240px">
                <div class="card-body">
                    <div class="miniDiv ">
                        <p class="text-center pt-3">${resp.name}</p>   
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
                    $('#hp').html('HP: ' + item.stats[0].base_stat);
                    $('#specialAttack').html('SPECIAL ATTACK: ' + item.stats[4].base_stat);
                    $('#uno').html(item.types[0].type.name);
                    //$('#dos').html(item.types[1].type.name);
                    $('#weight').html('WEIGHT: ' + item.weight);
                    $('#height').html('HEIGHT: ' + item.height);
                    $('#ability').html('ABILITY: ' + item.abilities[0].ability.name);


                    switch (item.types[0].type.name) {
                        case 'grass':
                            $('.divType').css("background-color", "green");
                            break;

                        case 'bug':
                            $('.divType').css("background-color", "#045119");
                            break;

                        case 'fire':
                            $('.divType').css("background-color", "red");
                            break;

                        case 'water':
                            $('.divType').css("background-color", "blue");
                            break;

                        case 'electric':
                            $('.divType').css("background-color", "yellow");
                            break;

                        case 'rock':
                            $('.divType').css("background-color", "brown");
                            break;

                        case 'normal':
                            $('.divType').css("background-color", "#D4AED8");
                            break;

                        case 'dark':
                            $('.divType').css("background-color", "#313047");
                            break;

                        case 'dragon':
                            $('.divType').css("background-color", "#23BCC3");
                            break;

                        case 'fairy':
                            $('.divType').css("background-color", "#9E14A5");
                            break;

                        case 'fighting':
                            $('.divType').css("background-color", "#D77C27");
                            break;

                        case 'flying':
                            $('.divType').css("background-color", "#86ACB4");
                            break;

                        case 'ghost':
                            $('.divType').css("background-color", "#9050C6");
                            break;

                        case 'ground':
                            $('.divType').css("background-color", "#A96313");
                            break;

                        case 'ice':
                            $('.divType').css("background-color", "#A4FFFB");
                            break;

                        case 'poison':
                            $('.divType').css("background-color", "#8930C7");
                            break;

                        case 'psychic':
                            $('.divType').css("background-color", "pink");
                            break;

                        case 'steel':
                            $('.divType').css("background-color", "#007881");
                            break;
                    }


                    // var typesPok = item.types;
                    // var nameType ;

                    //alert(typesPok[0].type.name);
                    // alert(typesPok[1].type.name);
                    // if(typesPok.length < 2){
                    //     nameType +=typesPok[0].type.name;
                    // }else{
                    //     nameType +=typesPok[1].type.name;
                    // }

                    // if(typesPok.length < 2){
                    //     $('#uno').html(typesPok[0].type.name);
                    // }else if(typesPok.length == 2){
                    //     $('#uno').html(typesPok[0].type.name);
                    //     $('#dos').html(typesPok[1].type.name);
                    // }

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


