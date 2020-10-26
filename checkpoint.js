const fs = require('fs');
const fetch = require('node-fetch');

var data = fs.readFileSync('input.txt')
var pokemons = data.toString().split('\r\n')

pokemons.forEach(pokemon => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(pokeInfo => pokeInfo.json())
    .then(pokeResult => pokeResult.types.map(resultVal => Object.values(resultVal)[1]))
    .then(typeName => typeName.map(types => Object.values(types)[0]))
    .then(result => console.log(`${pokemon.charAt(0).toUpperCase()+pokemon.substr(1)}: ${result.join(', ')}`))
    })




    