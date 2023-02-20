/* eslint-disable no-restricted-syntax */
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
  .then(response => {
    if(!response.ok){
      throw new Error('HTTP error')
    }
    const jsonData = response.json();
    return jsonData
  })
  .then(data =>{
    return data
  })
  .catch(error => {
    console.error(`Network error!`);
    throw error;
  })
}

  function fetchAndPopulatePokemons(elements) {
  
  const{results} = elements
  const select = document.createElement('select');
  select.classList='select-box'
  
   
  results.forEach(pokemon => {
    const option = document.createElement('option');
    option.classList = 'option-box';
    option.textContent = pokemon.name
    select.appendChild(option)
    document.getElementById('pokemon-container').appendChild(select);
    option.style.background = '#716F71';
  })
  

  document.getElementById('get-pokemon').addEventListener('click',openButton);
  function openButton(){
    select.style.width = '18vh';
  }


  select.onchange = function () {
    const selectedOption = this.options[this.selectedIndex];
    console.log(selectedOption);
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selectedOption.index +1}.png`;
    fetchImage(imgUrl);
  };

}

async function fetchImage(imgUrl) {
  const imgPokemon = document.createElement('img');
  imgPokemon.src= imgUrl;

  const container =document.getElementById('img-container');
  container.innerHTML = '';
  container.appendChild(imgPokemon);
}




async function main() {
  try {
    await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(data=>{ 
        fetchAndPopulatePokemons(data)
      })
  } catch(error){
    console.log(error);
  }
}

window.addEventListener('load', main);