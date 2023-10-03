
const numPokemons = 100;
const pokemons = [];

$(document).ready(function () { 

    for (var i = 0; i < numPokemons; i++){
        
        $.ajax({
            url: 'https://pokeapi.co/api/v2/pokemon/' + [i+1],
            type: 'GET'
        }).done(function (resp) {
            pokemons.push(resp);

            var template = `<div class="card m-5 border-4 border-warning" id="carta-sombra" style="width: 18rem;">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${resp.id}.png"
                class="card-img-top" alt="..." height="240px">
            <div class="card-body" id="${resp.types[0].type.name}">
                <div class="miniDiv">
                    <p class="text-center pt-2">${resp.name}</p>
                </div>
                <p class="card-text pt-4">Ataque: ${resp.stats[1].base_stat}
                    <hr>
                    Habilidad: ${resp.abilities[0].ability.name}
                </p>
            </div>
        </div>`;
            $('#lista-pokemon').append(template);
            
        });

    }

    //To Do: ordenar el array para que los pokemons salgan en orden

    //console.log(pokemons);

});