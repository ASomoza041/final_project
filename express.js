var express = require('express');
var app = express();
var fetch = require('node-fetch');
var path = require('path');
var boot = require('bootstrap');




app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// app.get('/poke',(req,res)=>res.send("something"))

app.get('/poke/:pokemonName', async(req, response) => {
    
    try{
        pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${req.params.pokemonName}`);

        const json = await pokemonData.json();
        console.log(json.sprites.back_default);

        const {...sprites} =json.sprites;
        console.log("sprites", sprites);

        response.render('poke', {
            name: json.name,
            img: sprites.front_default
        })
    } catch(error) {
        console.log(error)
    }

});

// app.get('/', async (req, res) => {
//     const mudkipFetch = await fetch('https://pokeapi.co/api/v2/pokemon/mudkip');
//     mudkip = await mudkipFetch.json();

//     const cuboneFetch = await fetch('https://pokeapi.co/api/v2/pokemon/cubone');
//     cubone = await cuboneFetch.json();

//     const squirtleFetch = await fetch('https://pokeapi.co/api/v2/pokemon/squirtle');
//     squirtle = await squirtleFetch.json();

//     const snorlaxFetch = await fetch('https://pokeapi.co/api/v2/pokemon/snorlax');
//     snorlax = await snorlaxFetch.json();
    
    
//     res.render('index', {
//         title: "Home",
//         mudkipData: mudkip,
//         cuboneData: cubone,
//         squirtleData: squirtle,
//         snorlaxData: snorlax
//     })
// });

app.get('/', (req, response) => {
    response.render('index', {
    title: "Pokémon Fandom"
    });
});


app.listen(3000)