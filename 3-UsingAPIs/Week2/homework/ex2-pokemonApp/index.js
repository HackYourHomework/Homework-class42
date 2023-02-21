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

async function fetchData(data) {
  try {
    const response = await fetch(data);
    if (!response.ok) {
      throw new Error(
        `Something went seriously wrong ${response.status} : ${response.statusText}`
      );
    }
    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchAndPopulatePokemons() {
  // make a button:

  const pageButton = document.createElement('button');
  pageButton.setAttribute('type', 'Submit');

  pageButton.textContent = 'Pick Pokemon';
  document.body.appendChild(pageButton);

  // make a select element:

  const selectPokemon = document.createElement('select');
  selectPokemon.setAttribute('id', 'select-pokemon');
  document.body.appendChild(selectPokemon);

  // add an image
  const pokemonImage = document.createElement('img');
  pokemonImage.src =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png';
  pokemonImage.alt = 'images of pokemons';
  document.body.appendChild(pokemonImage);

  // when the user clicks on the button, they can select a pokemon
  pageButton.addEventListener('click', async function () {
    const pokemons = await fetchData(
      'https://pokeapi.co/api/v2/pokemon?limit=151'
    );
    const pokemonList = pokemons.results;

    pokemonList.forEach((pokemon) => {
      const selection = document.createElement('option');
      selection.setAttribute('id', 'selectList');
      selection.textContent = pokemon.name;
      selection.value = pokemon.url;
      selectPokemon.appendChild(selection);
    });

    // If the user clicks on an option, an image of the pokemon will display.

    selectPokemon.addEventListener('change', async function () {
      const imageUrl = selectPokemon.value;
      await fetchImage(pokemonImage, imageUrl);
    });
  });
}

async function fetchImage(image, url) {
  try {
    const data = await fetchData(url);
    image.src = data.sprites.front_shiny;
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  await fetchAndPopulatePokemons();

}
window.addEventListener('load', main);
