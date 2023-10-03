const numPokemons = 20;
const pokemons = [];

$(document).ready(function () { 

    for (var i = 0; i < numPokemons; i++){
        
        $.ajax({
            url: 'https://pokeapi.co/api/v2/pokemon/' + [i+1],
            type: 'GET'
        }).done(function (resp) {
            pokemons.push(resp);

            var template = `<div class="card m-5 border-4 border-warning ${resp.types[0].type.name} carta-sombra">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${resp.id}.png"
                class="card-img-top" alt="..." height="240px">
            <div class="card-body">
                <div class="miniDiv">
                    <p class="text-center pt-2">${resp.name}</p>
                    <button type="button" class="btn-view-pokemon">prueba</button>
                </div>
               
            </div>
        </div>`;
            $('#lista-pokemon').append(template);
            
        });

        // IMPORTANTE: IDENTIFICAR QUE DIVS ES EL QUE SE HA PULSADO Y SACAR SU HTML AL CLICKAR EL BOTON

       
    }
  

    //To Do: ordenar el array para que los pokemons salgan en orden

    //console.log(pokemons);

//     <p class="card-text pt-4">Ataque: ${resp.stats[1].base_stat}
//     <hr>
//     Habilidad: ${resp.abilities[0].ability.name}
// </p>

});


