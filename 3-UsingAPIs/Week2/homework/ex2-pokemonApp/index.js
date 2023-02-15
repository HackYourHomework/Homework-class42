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
  // TODO complete this function
  const res = await fetch(url)
  const jsonData = await res.json()
  if(res.ok){
    console.log(jsonData)
    return jsonData
  } else {
    throw new Error('HTTP error')
  }

}

function fetchAndPopulatePokemons(data) {
  // TODO complete this function

  const body = document.querySelector('body')
  const button = document.createElement('button')
  button.setAttribute('type','button')
  button.textContent = 'Get Pokemon!'
  button.className = 'grid button'
  const select = document.createElement('select')
  
  select.className = 'grid'

  body.appendChild(button)
  body.appendChild(select)

  for(const pokemon of data.results){
    const option = document.createElement('option');
    option.textContent = pokemon.name
    option.setAttribute('value',pokemon.name)

  button.addEventListener('click', () => {
          select.appendChild(option)
        }
        )
      }
}

function fetchImage(data) {
  // TODO complete this function
}

async function main() {
  // TODO complete this function
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
  const data = await fetchData(url)
  fetchAndPopulatePokemons(data)
  fetchImage(data)
}

window.addEventListener('load', main)