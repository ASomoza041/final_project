var express = require('express');
var app = express();
var fetch = require('node-fetch');
var path = require('path');
// var boot = require('bootstrap')




app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// app.get('/poke',(req,res)=>res.send("something"))

// app.get('/poke/:pokemonName', async(req, response) => {
    
//     try{
//         pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${req.params.pokemonName}`);

//         const json = await pokemonData.json();
//         console.log(json.sprites.back_default);

//         const {...sprites} =json.sprites;
//         console.log("sprites", sprites);

//         response.render('poke', {
//             name: json.name,
//             img: sprites.front_default
//         })
//     } catch(error) {
//         console.log(error)
//     }

// });
app.get('/', (req, response) => {
    response.render('index', {
    title: "Home"
    });
});

app.get('/poke', async (req, response) => {
    const pikaFetch = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    pika = await pikaFetch.json();


    response.render('poke', {
        title: "Pokémon Fandom",
        pikaData: pika,
    })
});

app.get('/potter', async (req, response) => {
    const sortingHat = await fetch('https://www.potterapi.com/v1/sortingHat');
    sort = await sortingHat.json();

    response.render('poke', {
        title: "Harry Potter Fandom",
        hatData: sort
    })
});



app.listen(3000)