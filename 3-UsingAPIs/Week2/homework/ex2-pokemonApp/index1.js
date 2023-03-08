async function fetchData(url) {
  const response = await fetch(url);
  if(!response.ok)
  throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
  const data = await response.json();
  return data;
}

async function fetchAndPopulatePokemons(data) {
  const select = document.querySelector('select');
  const pokemonNames = data.results.map((result) => result.name);
  
    pokemonNames.forEach((pokemon, index) => {
      const option = document.createElement('option');
      select.appendChild(option);
      option.setAttribute('value', index + 1);
      option.textContent = pokemon;
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

 function main() {
  const button = document.createElement('button');
  button.setAttribute('type', 'submit');
  button.textContent = 'Get Pokemon!';
  document.body.appendChild(button);

  const select = document.createElement('select');
  document.body.appendChild(select);

  document.querySelector('button').addEventListener('click', async () => {

    try{
      await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((data) => fetchAndPopulatePokemons(data))
      .then((data) => fetchImage(data));
    } catch(error){
      console.log(error.message);
    }


  })



}

window.addEventListener('load', main);