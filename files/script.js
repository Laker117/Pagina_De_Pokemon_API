let pokemones = [];
let elementos = 0;

const vaciar = document.getElementById('vaciar');

function vaciarArray() {
    document.getElementById('pokemon-container').innerHTML = '';
    pokemones = [];
    elementos = 0;
    buscar.disabled = false;
    equipo.disabled = true;
    historial.disabled = true;
    vaciar.disabled = true;
}

vaciar.addEventListener('click', vaciarArray);

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
    if(elementos > 0){
        document.getElementById("vaciar").disabled = false;
    }
});

document.getElementById('historial').addEventListener('click', function(){
    const container1 = document.getElementById('pokemon-container1');
    const element1 = document.createElement('div');
    element1.classList.add('page2');
        pokemones.forEach((pokemon1) => {
            element1.innerHTML += `
            <div>
                <div>
                    <strong>Name: </strong>${pokemon1.name}
                    <br>
                    <br>
                    <strong>Type: </strong>${pokemon1.types[0].type.name}
                    <br>
                    <br>
                    <strong>Attack: </strong>${pokemon1.moves[1].move.name}
                    <br>
                    <br>
                    <img src=${pokemon1.sprites.other.showdown.front_default}>
                <div>
            <div>
            `;
            container1.appendChild(element1);
    });
    document.getElementById("historial").disabled = true;
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