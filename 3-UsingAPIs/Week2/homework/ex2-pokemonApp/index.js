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
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

function fetchAndPopulatePokemons(data) {
  const selectedList = document.querySelector('.select');
  const { results } = data;

  results.forEach((result) => {
    const option = document.createElement('option');
    option.value = result.url;
    option.text = result.name;

    selectedList.appendChild(option);
  });
}

async function fetchImage(url) {
  const imgDiv = document.querySelector('.img-div');
  imgDiv.textContent = '';

  const data = await fetchData(url);

  const {
    sprites: {
      other: {
        dream_world: { front_default: imgUrl },
      },
    },
  } = data;

  const image = document.createElement('img');
  image.src = imgUrl;
  imgDiv.appendChild(image);
}

async function main() {
  const selectedList = document.querySelector('.select');
  const btn = document.querySelector('.btn');

  const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');

  btn.addEventListener('click', async () => {
    fetchAndPopulatePokemons(data);
    selectedList.onchange = (e) => {
      fetchImage(e.target.value);
    };
  });
}

window.addEventListener('load', main);
