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
      const data = await response.json();
      return data;
    }
    throw new Error('HTTP or network error');
  } catch (error) {
    console.log(error);
  }
}

async function fetchAndPopulatePokemons(url) {
  const selectElement = document.createElement('select');
  document.body.appendChild(selectElement);
  const pokemonData = await fetchData(url);

  const pokemonArray = pokemonData.results.map((pokemonObject, index) => {
    return {
      name: pokemonObject.name,
      imgURL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        index + 1
      }.png`,
    };
  });

  pokemonArray.forEach((pokemonObject) => {
    const optionElement = document.createElement('option');
    optionElement.textContent = pokemonObject.name;
    selectElement.appendChild(optionElement);
  });

  return pokemonArray;
}

async function fetchImage(pokemonArray) {
  const imgElement = document.createElement('img');
  document.body.appendChild(imgElement);
  imgElement.alt = 'pokemon-image';
  imgElement.src =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
  document.querySelector('select').addEventListener('click', (e) => {
    pokemonArray.forEach((pokemonObject) => {
      if (pokemonObject.name === e.target.value) {
        imgElement.src = pokemonObject.imgURL;
      }
    });
  });
}

async function main() {
  try {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    const pokemonArray = await fetchAndPopulatePokemons(url);
    fetchImage(pokemonArray);
  } catch (error) {
    console.log(error);
  }
}
main();
