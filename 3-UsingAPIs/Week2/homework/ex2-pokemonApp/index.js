'use strict';

async function fetchData(url) {
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

  const body = document.querySelector('body')
  const button = document.createElement('button')
  button.setAttribute('type','button')
  button.textContent = 'Get Pokemon!'
  button.className = 'grid button'
  const select = document.createElement('select')
  const divForImage = document.createElement('div')
  
  select.className = 'grid'
  divForImage.id = 'div-for-image'

  body.appendChild(button)
  body.appendChild(select)
  body.appendChild(divForImage)
  for(let i = 0; i<data.results.length; i++){
    const option = document.createElement('option');
    option.textContent = data.results[i].name
    option.setAttribute('value',i)

  button.addEventListener('click', () => {
    select.appendChild(option)
  }
  ) 
}
  select.addEventListener('change', () => {
    fetchImage(data, select.value)
  });
}
      


function fetchImage(data, pokemonIndex) {
  const img = document.createElement('img')
  const div = document.getElementById('div-for-image')
  div.innerHTML = '' // how I can get rid of innerHTML. I want to clear div, because if div is not clear it causes the bug
  img.className = 'grid'
  img.src = data.results[pokemonIndex].url
  img.setAttribute('alt',data.results[pokemonIndex].name)
  div.appendChild(img);
}

async function main() {
  try {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
  const data = await fetchData(url)
  fetchAndPopulatePokemons(data)
  } catch(error){
    console.log(error)

  }
  
}

window.addEventListener('load', main)