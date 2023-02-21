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
    const response = await fetch(url);
    if(!response.ok)
    throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
    const data = await response.json();
    return data;
}

async function fetchAndPopulatePokemons(data) {

    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.textContent = 'Get Pokemon!';
    document.body.appendChild(button);
  
    const select = document.createElement('select');
    document.body.appendChild(select);
    const pokemonNames = data.results.map((result) => result.name);
    button.addEventListener('click', () => {
      pokemonNames.forEach((pokemon, index) => {
        const option = document.createElement('option');
        select.appendChild(option);
        option.setAttribute('value', index + 1);
        option.textContent = pokemon;
      });
  
    });
    return data;

 
}

function fetchImage(data) {

    const e = document.querySelector('select');
    const img = document.createElement('img');
    img.setAttribute('alt', 'pokemonImage');
    img.setAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png');
    img.style.visibility = 'hidden';

    document.body.appendChild(img);
    e.addEventListener('change', () =>{
      const index = e.value;
      img.setAttribute('alt', 'pokemonImage');
      img.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${(index)}.png`);
      img.style.visibility = 'visible';

    })

    return data;
}

async function main() {
  try{
    await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((data) => fetchAndPopulatePokemons(data))
    .then((data) => fetchImage(data));
  } catch(error){
    console.log(error.message);
  }

}

window.addEventListener('load', main);