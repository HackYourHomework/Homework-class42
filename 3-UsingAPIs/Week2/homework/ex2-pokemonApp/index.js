'use strict';

async function fetchData(url) {
  const res = await fetch(url)
  const jsonData = await res.json()
  if(res.ok){
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
  for(let i = 0; i<div.children.length; i++){
    div.removeChild(div.children[i])
  }
  img.className = 'grid'
  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`
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