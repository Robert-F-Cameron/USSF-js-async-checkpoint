const fs = require('fs');
const fetch = require('node-fetch');

var data = fs.readFileSync('input.txt')
var content = data.toString().split('\r\n')

fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => response.json())
    .then(poke => {conent.forEach(
        pokemon =>{fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`), 
            {body: JSON.stringify({pokemon.type})}
        })
    })
    .then()
                                             