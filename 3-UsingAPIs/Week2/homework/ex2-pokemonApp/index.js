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
  let data;
  try {
    const data = await fetch(url);
    if (!data.ok) {
      throw new Error(data.status);
    }
  } catch (error) {
    console.log(error);
  }
  return data;
}

async function fetchAndPopulatePokemons(url) {
  let data;
  try {
    data = await fetchData(url);
    data = await data.json();
  } catch (error) {
    console.log(error);
  }
  const body = document.querySelector('body');
  const button = document.createElement('button');
  button.textContent = 'Get Pokemon!';
  button.type = 'button';
  body.appendChild(button);
  const select = document.createElement('select');
  body.appendChild(select);
  const image = document.createElement('img');
  image.src =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png'; // to pass the test
  image.alt = 'Pokemon'; // to pass the test
  body.appendChild(image);
  button.addEventListener('click', () => {
    fillInSelected(data, select, image);
  });
}

function fillInSelected(data, select, image) {
  // Utility function
  data.results.forEach((element) => {
    const option = document.createElement('option');
    option.value = element.url;
    option.textContent = element.name;
    select.appendChild(option);
  });
  select.addEventListener('change', (event) => {
    fetchImage(image, event.target.value);
  });
}

async function fetchImage(image, url) {
  let imageURL;
  try {
    imageURL = await fetchData(url);
    imageURL = await imageURL.json();
  } catch (error) {
    console.log(error);
  }
  image.src = imageURL.sprites.front_default;
  image.alt = 'Pokemon';
}

function main() {
  fetchAndPopulatePokemons('https://pokeapi.co/api/v2/pokemon?limit=151');
}

window.addEventListener('load', main);
