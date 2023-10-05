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


        });




        //HACER UN PAGINADOR CON UN FOR. 

        // EN LA API HAY UN PARÁMETRO QUE ES EL OFFSET QUE SIRVE PARA QUE  A LA HORA DE HACE LA PAGINACIÓN AL CLICKAR LA 
        //PÁGINA 3 SE SALTE LOS 20 PRIMEROS Y LOS 20 SEGUNDO.

        //(PAGE - 1) * 20
    }

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
            $('#weight').html('WEIGHT: ' + item.weight);
            $('#height').html('HEIGHT: ' + item.height);
            $('#ability').html('ABILITY: ' + item.abilities[0].ability.name);

            var typesPok = item.types;


            if (typesPok[1] == null) {
                $('#uno').html(item.types[0].type.name);
                $('#dos').hide();
                //$('#dos').html(' ');
            } else {
                $('#uno').html(item.types[0].type.name);
                $('#dos').html(item.types[1].type.name);
                $('#dos').show();

            }

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
                    $('.divType').css("background-color", "#D1BE00");
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



            $('#pokemonModal').modal('show');
        });

    });

});


