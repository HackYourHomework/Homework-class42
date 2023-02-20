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
function fetchData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(`Network error: ${error}`);
    });
}

async function fetchAndPopulatePokemons(selectElement, url) {
  try {
    const data = await fetchData(url);
    data.results.forEach((pokemon) => {
      const option = document.createElement('option');
      option.value = pokemon.url;
      option.textContent = pokemon.name;
      selectElement.appendChild(option);
    });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

async function fetchImage(imgElement, url) {
  try {
    const data = await fetchData(url);
    imgElement.src = data.sprites.front_default;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

async function main() {
  const pokemonSelect = document.getElementById('pokemonSelect');
  const pokemonImage = document.getElementById('pokemonImage');

  await fetchAndPopulatePokemons(
    pokemonSelect,
    'https://pokeapi.co/api/v2/pokemon?limit=150'
  );

  pokemonSelect.addEventListener('change', () => {
    fetchImage(pokemonImage, pokemonSelect.value);
  });
}

window.addEventListener('load', main);
