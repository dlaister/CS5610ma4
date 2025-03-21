const express = require('express');
const router = express.Router();
const {v4: uuid} = require('uuid');

// replace this string with your full name
const name = "Derek Laister"

console.log(`My name is ${name}`)

// use this list as your temporary database!
// note that it will reset every time you restart your server
const myPokemon = [{
    id: "fc10b559-872c-43cd-bad2-f02e2e0a2d58", name: "Pikachu", health: 10, level: 1
}];

router.get('/', function (req, res) {
    // return all pokemon
});

router.post('/', (req, res) => {
    // if the pokemon name already exists in the list, return an error
    // randomly generate an id using UUID ["uuid()"]
    // randomly generate a level between 1 and 10, inclusive, if none is given
    // randomly generate a health between 10 and 100, inclusive, if none is given
    // insert your pokemon into the myPokemon list
    // return a 200
});

router.get('/:pokemonId', function (req, res) {
    // return pokemon if one is found matching the pokemonId
    // return a 404 if no pokemon matches that pokemonId
});

router.put('/:pokemonId', function (req, res) {
    // update the pokemon matching the pokemonId
    // based on the req body
    // return a 404 if no pokemon matches that pokemonId  
})

router.delete('/:pokemonId', function (req, res) {
    // delete pokemon if pokemonId matches the id of one
    // return 200 even if no pokemon matches that Id
})

module.exports = router;








// router.{request here}(/url here, function that you define here)


//id
router.get('/:pokemonId', function (request, response) {
    const Id = request.params.pokemonId;

    const responsePokemon = myPokemon[Id];

    // if (!responsePokemon = myPokemon[Id]) {
    //     responsePokemon.status = 404;
    //     response.send('Not Found');
    //     return;
    // }

    response.json(responsePokemon);

})

// querey param example
router.post('/', function (request, response) {
    const pokemonName = request.query.name;

    if (pokemonName) {
        const matchingPokemon = []
        const pokemonList = Object.values(myPokemon)

        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            if (pokemonName === pokemon.name) {
                matchingPokemon.push(pokemon);
            }
        }
    }
})

// install nodemon (https://alecktos.medium.com/intellij-debugging-with-nodemon-4ebd121b18f1):
// npx nodemon --inspect app.js