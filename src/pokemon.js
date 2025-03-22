const express = require('express');
const router = express.Router();
const {v4: uuid} = require('uuid');

// replace this string with your full name
const name = "Derek Laister"

console.log(`My name is ${name}`)

// use this list as your temporary database!
// note that it will reset every time you restart your server
// updated example to look like class example, more readable
const myPokemon = [{
    id: "fc10b559-872c-43cd-bad2-f02e2e0a2d58",
    name: "Pikachu",
    health: 10,
    level: 1
}];

// URL for postman get req: http://localhost:8000/api/pokemon/
// Get all entries from the list
router.get('/', function (req, res) {
    // return all pokemon
    console.log(`Here is your Pokemon inventory: ${JSON.stringify(myPokemon)}`);

    // Serverside response code
    res.status(200).json(myPokemon);
});

// TODO -- post
// Add entry to the list
router.post('/', (req, res) => {
    // if the pokemon name already exists in the list, return an error
    // randomly generate an id using UUID ["uuid()"]
    // randomly generate a level between 1 and 10, inclusive, if none is given
    // randomly generate a health between 10 and 100, inclusive, if none is given
    // insert your pokemon into the myPokemon list
    // return a 200
});

// TODO -- get
// Fetch entry from the list
router.get('/:pokemonId', function (req, res) {
    // return pokemon if one is found matching the pokemonId
    // return a 404 if no pokemon matches that pokemonId
});

// URL for postman put req: http://localhost:8000/api/pokemon/{Id to delete (i.e.: fc10b559-872c-43cd-bad2-f02e2e0a2d58)}
// Update entry from the list
router.put('/:pokemonId', function (req, res) {
    // update the pokemon matching the pokemonId
    // based on the req body
    // return a 404 if no pokemon matches that pokemonId
    const pokemonId = req.params.pokemonId;
    const updatedData = req.body;

    // Find Pokemon by Id using traditional function syntax
    const pokemon = myPokemon.find(function(pokemon) {
        return pokemon.id === pokemonId;
    });

    // Pokemon doesn't exist
    if (!pokemon) {
        console.log(`No Pokemon found with ID: ${pokemonId}`);

        // Serverside response code
        return res.status(404).json({ error: `No Pokemon found with ID: ${pokemonId}` });
    }

    // Update Id with data
    pokemon.name = updatedData.name || pokemon.name;
    pokemon.health = updatedData.health || pokemon.health;
    pokemon.level = updatedData.level || pokemon.level;
    // Added field for practice
    pokemon.type = updatedData.type || pokemon.type;


    // Serverside response code
    res.status(200).json(pokemon);
});

// URL for postman delete req: http://localhost:8000/api/pokemon/{Id to delete (i.e.: fc10b559-872c-43cd-bad2-f02e2e0a2d58)}
// Delete entry from the list
router.delete('/:pokemonId', function (req, res) {
    // delete pokemon if pokemonId matches the id of one
    // return 200 even if no pokemon matches that Id
    const pokemonId = req.params.pokemonId;
    // Find Pokemon by Id
    const index = myPokemon.findIndex(function (pokemon) {
        return pokemon.id === pokemonId;
    });

    // Logic for found/not found
    if (index !== -1) {
        console.log(`Deleted Pokemon ID: ${pokemonId}`);
        // Remove Pokemon
        myPokemon.splice(index, 1);
    } else {
        console.log(`No Pokemon found with ID: ${pokemonId}`);
    }

    // Serverside response code
    res.status(200).json({message: "Pokemon deleted (if existed) from your Pokemon inventory"});
});

module.exports = router;


// MY NOTES, THESE CAN BE IGNORED.

// router.{request here}(/url here, function that you define here)
// install nodemon (https://alecktos.medium.com/intellij-debugging-with-nodemon-4ebd121b18f1):
// npx nodemon --inspect app.js

//id
// router.get('/:pokemonId', function (request, response) {
//     const Id = request.params.pokemonId;
//
//     const responsePokemon = myPokemon[Id];
//
//     // if (!responsePokemon = myPokemon[Id]) {
//     //     responsePokemon.status = 404;
//     //     response.send('Not Found');
//     //     return;
//     // }
//
//     response.json(responsePokemon);
//
// })

// query param example
// router.post('/', function (request, response) {
//     const pokemonName = request.query.name;
//
//     if (pokemonName) {
//         const matchingPokemon = []
//         const pokemonList = Object.values(myPokemon)
//
//         for (let i = 0; i < pokemonList.length; i++) {
//             const pokemon = pokemonList[i];
//             if (pokemonName === pokemon.name) {
//                 matchingPokemon.push(pokemon);
//             }
//         }
//     }
// })
