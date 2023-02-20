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
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  if(!response.ok)
  throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
  const data = await response.json();
  console.log(data);
  return data;

}
fetchData()

async function fetchAndPopulatePokemons(data) {
  try {
  //Create button Get Pokemon!
  const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');
  const button = document.createElement('button');
  button.textContent = 'Get Pokemon!';
  document.body.append(button);
  //Create Select
  const select = document.createElement('select');
  select.setAttribute('id', 'select-menu');
  document.body.append(select);
  const pokemonNames = data.results.map((result) => result.name);
  button.addEventListener('click', () => {
    pokemonNames.forEach((pokemon) => {
      const option = document.createElement('option');
      select.appendChild(option);
      option.setAttribute('value', pokemon);
      option.textContent = pokemon;
    });
  });
} catch (err) {
  return console.log(err)
}
}
fetchAndPopulatePokemons();

async function fetchImage(data) {
  try {
  const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');
  const imgData = data.results.map((result) => result.url);
  const imgUrl = imgData["sprites"]["front_shiny"];
  const img = document.createElement('img');
  img.src = imgUrl;
  document.body.appendChild(img);



} catch (err) {
  return console.log(err)
}
  
}
fetchImage()
function main() {
  // TODO complete this function
}
