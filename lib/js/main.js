let url = "https://pokeapi.co/api/v2/pokemon/chimchar";

let fluidContainer = document.getElementsByClassName("container-fluid")[0];

function getTypes(pokemonJSON){
    let types = [];
    for (let type of pokemonJSON.types){
        types.push(type.type.name);
    }
    return types
}

function getMoves(pokemonJSON){
    let moves = [];
    for(let move of pokemonJSON.moves){
    moves.push(move.move.name);
    }
    return moves
}

function getAbilities(pokemonJSON){
    let abilities = [];
    for(let ability of pokemonJSON.abilities){
    abilities.push(ability.ability.name);
    }
    return abilities
}

function getRandomImage(pokemonJSON){
    console.log(pokemonJSON)
    var images = [];
    for (var image in pokemonJSON.sprites) {
        if(pokemonJSON.sprites[image] != null){
            images.push(pokemonJSON.sprites[image])
        }
    }
    return images[Math.floor(images.length * Math.random())];
}

function createPokemonElement(pokemon){
    let h1 = document.createElement("h1");
    h1.innerText = pokemon.name
    
    let h2 = document.createElement("h2");
    h2.innerText = pokemon.number;
    
    let p = document.createElement("p")
    for(let type of pokemon.types){
        p.innerText += `${type}`
    }
    
    let moveUL = document.createElement("ul");
    for(let move of pokemon.moves){
        moveUL.innerHTML += `<li>${move}<li>`;
    }
    let abilitiesUL = document.createElement("ul");
    for(let ability of pokemon.moves){
        abilitiesUL.innerHTML += `<li>${ability}<li>`;
    }

    let img = document.createElement("img")
    img.src = pokemon.image
    

    let div = document.createElement("div");
    div.append(h1, h2,img, p, moveUL, abilitiesUL);
    fluidContainer.appendChild(div);
    
}

fetch(url)
.then((response) => response.json())
.then(function(data){
console.log(data)
    let name = data.name;
    let number = data.id;
    let types = getTypes(data);
    let moves = getMoves(data);
    let abilities = getAbilities(data);
    let image = getRandomImage(data);
    let chimchar = new Pokemon(name, number, types, moves, abilities, image);
console.log(chimchar);
createPokemonElement(chimchar);
})
.catch(function(error){
    console.log(error)
})


