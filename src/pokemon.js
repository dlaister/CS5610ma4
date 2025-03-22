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

// TODO -- get
router.get('/', function (req, res) {
    // return all pokemon
    console.log(`Here are all your Pokemon: ${JSON.stringify(myPokemon)}`);
    res.status(200).json(myPokemon);
});

// TODO -- post
// Add entery to the list
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

// TODO -- put
// Update entry from the list
router.put('/:pokemonId', function (req, res) {
    // update the pokemon matching the pokemonId
    // based on the req body
    // return a 404 if no pokemon matches that pokemonId  
})

// Delete entry from the list
router.delete('/:pokemonId', function (req, res) {
    // delete pokemon if pokemonId matches the id of one
    // return 200 even if no pokemon matches that Id
    const pokemonId = req.params.pokemonId;
    const index = myPokemon.findIndex(function (pokemon) {
        return pokemon.id === pokemonId;
    });

    if (index !== -1) {
        console.log(`Deleting Pokemon with ID: ${pokemonId}`);
        myPokemon.splice(index, 1);
    } else {
        console.log(`No Pokemon found with ID: ${pokemonId}`);
    }

    res.status(200).json({message: "Pokemon deleted (if existed)"});
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
