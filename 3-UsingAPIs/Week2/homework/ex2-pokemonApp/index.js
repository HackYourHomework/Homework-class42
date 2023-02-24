'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/

async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const dataJson = await response.json();
      return dataJson;
    }
  } catch (e) {
    throw new Error(e);
  }
}

function fetchAndPopulatePokemons(pokemonName, pokemonURL) {
  //imageElement
  const image = document.createElement('img');
  image.src = '';
  document.body.appendChild(image);
  //button
  const getPokemonButton = document.createElement('button');
  getPokemonButton.type = 'button';
  getPokemonButton.textContent = 'Get Pokemon!';
  document.body.appendChild(getPokemonButton);

  //selectElement
  const pokemonList = document.createElement('select');
  document.body.appendChild(pokemonList);

  //on click
  getPokemonButton.addEventListener('click', loadPokemonData(image));
  //event
  function loadPokemonData(image) {
    // pokemon list
    pokemonList.id = 'pokemon-list';
    pokemonName.forEach((pokemon, index) => {
      const opt = document.createElement('option');
      opt.id = 'pokemon-option';
      opt.value = index;
      opt.textContent = pokemon;
      pokemonList.appendChild(opt);
    });

    document.body.appendChild(pokemonList);

    //gettingData

    function gettingPokemonData() {
      const selectPokemon = document.getElementById('pokemon-list');
      selectPokemon.addEventListener('input', getValue);
      function getValue() {
        const pokemonIndex = this.value;
        fetchImage(pokemonURL[pokemonIndex], image);
      }
    }
    gettingPokemonData();
  }
}

function fetchImage(pokemonURL, image) {
  fetchData(pokemonURL).then((pokemon) => {
    const pokemonSprite = pokemon.sprites.back_default;
    image.src = pokemonSprite;
  });
}

function main() {
  fetchData('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((x) => {
      const pokemonArray = x.results;
      const pokemonName = pokemonArray.map((x) => {
        return x.name;
      });
      const pokemonURL = pokemonArray.map((x) => {
        return x.url;
      });

      fetchAndPopulatePokemons(pokemonName, pokemonURL);
    })
    .catch((e) => {
      console.log(e);
    });
}

window.addEventListener('load', main);
