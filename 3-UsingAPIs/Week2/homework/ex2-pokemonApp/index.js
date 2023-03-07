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

const pokemonDiv = document.createElement('div');
pokemonDiv.classList.add('pokemon-select');
document.body.appendChild(pokemonDiv);

const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
const selectElement = document.createElement('select');
selectElement.classList.add('select-element');
pokemonDiv.appendChild(selectElement);

async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Network Error: ', error);
  }
}

async function fetchAndPopulatePokemons() {
  const buttonElement = document.createElement('button');
  buttonElement.setAttribute('id', 'button');
  buttonElement.setAttribute('type', 'submit');
  pokemonDiv.appendChild(buttonElement);
  buttonElement.textContent = 'Get Pokemon';

  const imgElement = document.createElement('img');
  imgElement.src =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png';
  imgElement.alt = '';
  pokemonDiv.appendChild(imgElement);

  buttonElement.addEventListener('click', async () => {
    const pokemons = await fetchData(url);
    const pokemonList = pokemons.results;

    pokemonList.forEach((pokemon) => {
      const option = document.createElement('option');
      option.value = pokemon.url;
      option.textContent = pokemon.name;
      selectElement.appendChild(option);
    });

    selectElement.addEventListener('change', async () => {
      const imageUrl = selectElement.value;
      await fetchImage(imgElement, imageUrl);
    });
  });
}

async function fetchImage(image, url) {
  try {
    const pokemonData = await fetchData(url);
    const imageUrl = pokemonData['sprites']['front_shiny'];
    image.src = imageUrl;
    image.alt = 'pokemon image';
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  await fetchAndPopulatePokemons();
}

window.addEventListener('load', main);
