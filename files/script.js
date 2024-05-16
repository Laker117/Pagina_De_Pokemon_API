let pokemones = [];
let elementos = 0;

document.getElementById('buscar').addEventListener('click', function(){
    elementos = elementos+1;
    if(elementos>3){
        swal('Numero maximo de pokemones','Favor de ingresar solo 3 pokemones en el quipo', 'info')
        document.getElementById("buscar").disabled = true;
    } else {
        const pokemonName = document.getElementById('nombre').value;
        displayPokemon(pokemonName);
    }

    if(elementos == 3){
        document.getElementById("historial").disabled = false;
    }
    if(elementos > 0){
        document.getElementById("equipo").disabled = false;
    }
});

document.getElementById('historial').addEventListener('click', function(){
    const container1 = document.getElementById('pokemon-container');
    const element1 = document.createElement('div');
        pokemones.forEach((pokemon1) => {
            element1.innerHTML += `
            <div>
                <div>
                    <strong>Name:</strong> ${pokemon1.name}
                    <img src=${pokemon1.sprites.front_default}>
                    <strong>Type:</strong> ${pokemon1.types[0].type.name}
                <div>
            <div>
            `;
            container1.appendChild(element1);
        });
});

async function displayPokemon(pokemonName){
    const pokemon1 = await getPokemon(pokemonName);
    pokemones.push(pokemon1);
    console.log(pokemon1);
}

async function getPokemon(pokemonName){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    return response.json();
}

document.getElementById('equipo').addEventListener('click', function(){
    const container = document.getElementById('pokemon-container');
    const element = document.createElement('div');
    pokemones.forEach((pokemon) => {
        element.innerHTML += `
        <div>
            <div>
                <strong>Name:</strong> ${pokemon.name}
                <img src=${pokemon.sprites.front_default}>
                <strong>Type:</strong> ${pokemon.types[0].type.name}
            <div>
        <div>
        `;
        container.appendChild(element);
    });
});

async function getPokemon(pokemonName){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    return response.json();
}

async function displayPokemon(pokemonName){
    const pokemon = await getPokemon(pokemonName);
    pokemones.push(pokemon);
    console.log(pokemon);
}
