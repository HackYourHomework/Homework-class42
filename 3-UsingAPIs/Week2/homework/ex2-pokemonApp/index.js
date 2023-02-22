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
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

async function fetchAndPopulatePokemons(url, selectElement) {
  const pokemonList = await fetchData(url);
  pokemonList.results.forEach((pokemon) => {
    const option = document.createElement('option');
    option.value = pokemon.url;
    option.text = pokemon.name;
    selectElement.add(option);
  });
}

async function fetchImage(url, imageElement) {
  const imageData = await fetchData(url);
  imageElement.src = imageData.sprites.front_default;
  imageElement.alt = `Image of ${imageData.name}`;
}

function main() {
  const selectPokemon = document.createElement('select');
  selectPokemon.classList.add('select-pokemon');
  const pokemonImage = document.createElement('img');
  pokemonImage.classList.add('pokemon-image');
  document.body.appendChild(selectPokemon);
  document.body.appendChild(pokemonImage);
  fetchAndPopulatePokemons(
    'https://pokeapi.co/api/v2/pokemon?limit=151',
    selectPokemon
  );
  selectPokemon.addEventListener('change', () => {
    fetchImage(selectPokemon.value, pokemonImage);
  });
}

window.addEventListener('load', main);
