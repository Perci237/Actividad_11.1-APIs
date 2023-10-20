const listaPokemon = document.getElementById("listaPokemon");
let URL = "https://pokeapi.co/api/v2/pokemon/"; 

for (let i = 1; i <= 151; i++) {
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => mostrarPokemon(data))
}

function mostrarPokemon(pokemon) {
    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
    <div class="pokemon-img">
    <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">
</div>
<div class="pokemon-info">
    <div class="nombre-contenedor">
        <p class="pokemon-id">#${pokemon.id}</p>
        <h2 class="pokemon-name">${pokemon.name}</h2>
    </div>
</div>
    `;
    listaPokemon.append(div)
}


/* <div class="pokemon">
                    <div class="pokemon-img">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="">
                    </div>
                    <div class="pokemon-info">
                        <div class="nombre-contenedor">
                            <p class="pokemon-id">#123</p>
                            <h2 class="pokemon-name"> ESCORIA</h2>
                        </div>
                    </div>
                </div>*/