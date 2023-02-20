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
    const data = await fetch(url).then((response) => response.json());
    return data;
  } catch (error) {
    console.error(error);
  }
}

function fetchAndPopulatePokemons(data) {
  const select = document.querySelector('select');
  select.innerHTML = '';
  const pokemons = data.results;
  pokemons.forEach((pokemon) => {
    const option = document.createElement('option');
    option.value = pokemon.url;
    option.textContent = pokemon.name;
    select.appendChild(option);
  });
  select.addEventListener('change', (event) => {
    fetchImage(event);
  });
}

async function fetchImage(event) {
  try {
    const selectUrl = event.target.value;
    const img = document.querySelector('img');
    const imgData = await fetchData(selectUrl);
    img.alt = 'Pokemon';
    img.src =
      imgData.sprites['versions']['generation-v']['black-white']['animated'][
        'front_default'
      ];
  } catch (error) {
    console.error(error.message);
  }
}

function main() {
  document.body.innerHTML = `
      <h2><b>Pokemons</b></h2>
      <button id="button">Get Pokemons</button>
      <select id="select">
          <option value="" disabled selected>Press [Get Pokemons] first</option>
      </select>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="Pokemon">
  `;
  const button = document.querySelector('button');
  const select = document.querySelector('select');
  button.addEventListener('click', async () => {
    const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');
    fetchAndPopulatePokemons(data);
  });
  select.addEventListener('change', (event) => {
    fetchImage(event.target.value);
  });
}

window.addEventListener('load', main);
