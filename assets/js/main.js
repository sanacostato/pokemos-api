console.log("Entro al main.js");
const imgPokemon = document.getElementById("imgPokemon");
const nombrePokemon = document.getElementById("nombrePokemon")
const pesoPokemon = document.getElementById("pesoPokemon")


function randomPokemon(){
    console.log("entro a la funcion randomPokemon");
    const pokemon_number = generateRandomNumber(1,151)
    fetch("https://pokeapi.co/api/v2/pokemon/"+ pokemon_number)
    .then(Response => Response.json())
    .then(data => {
        console.log(data);
        imgPokemon.src = data.sprites.other.home.front_default;
        // lo de arriba tambien puede ser como arriba por que la imagen esta adentro de data, sprites imgPokemon.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png";
        nombrePokemon.innerText = data.name;
        pesoPokemon.innerText = data.weight;

    })
    .catch(error => console.log(error))
}

function generateRandomNumber (min = 0, max = 100){
    // find diff
    let difference = max - min;

    //generate random number
    let rand = Math.random();

    //multiply with difference
    rand = Math.floor(rand * difference);

    //add with min value
    rand = rand + min;

    return rand;
}