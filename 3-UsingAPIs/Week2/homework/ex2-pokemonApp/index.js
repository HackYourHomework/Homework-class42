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
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was failed');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      throw error;
    });
}

async function fetchAndPopulatePokemons(url, selectElement) {
  try {
    const pokemonList = await fetchData(url);
    pokemonList.results.forEach((pokemon) => {
      const option = document.createElement('option');
      option.value = pokemon.url;
      option.text = pokemon.name;
      selectElement.add(option);
    });
  } catch (error) {
    console.error('Error fetching Pokemon Data:', error);
  }
}
async function fetchImage(url, imageElement) {
  try {
    const pokemonData = await fetchData(url);
    imageElement.alt = 'pokemon-image';
    imageElement.src = pokemonData.sprites.front_default;
  } catch (error) {
    console.error('Error fetching Pokemon image:', error);
  }
}

function main() {
  const selectPokemon = document.createElement('select');
  selectPokemon.classList.add('select-pokemon');
  const pokemonImage = document.createElement('img');
  pokemonImage.classList.add('pokemon-image');
  pokemonImage.alt = 'pokemon-image';
  pokemonImage.src =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
  document.body.appendChild(selectPokemon);
  document.body.appendChild(pokemonImage);
  fetchAndPopulatePokemons(
    'https://pokeapi.co/api/v2/pokemon?limit=151',
    selectPokemon
  );
  selectPokemon.addEventListener('change', async () => {
    const selectedPokemonUrl = selectPokemon.value;
    await fetchImage(selectedPokemonUrl, pokemonImage);
  });
}

window.addEventListener('load', main);
