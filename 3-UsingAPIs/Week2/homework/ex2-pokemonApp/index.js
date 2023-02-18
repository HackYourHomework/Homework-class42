'use strict';

const body = document.body;
const btn = document.querySelector('#button');
const drop_list = document.getElementById('drop-list');
const img_container = document.getElementById('img-container');
console.log(img_container);

async function fetchData(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

async function fetchAndPopulatePokemons(url) {
  const data = await fetchData(url);
  const results = data['results'];
  results.forEach((element) => {
    let item = document.createElement('option');
    item.setAttribute('class', 'option');
    item.innerHTML = `${element['name']}`;
    drop_list.appendChild(item);
  });
  drop_list.addEventListener('change', () => {
    let serch = results.find((e) => e['name'] == drop_list.value);
    fetchImage(serch['url']);
  });
}

async function fetchImage(url) {
  img_container.innerHTML = '';
  const data = await fetchData(url);
  const imgUrl = data['sprites']['front_default'];
  const img = document.createElement('img');
  img.src = imgUrl;
  img_container.appendChild(img);
}

async function main() {
  btn.addEventListener(
    'click',
    () => {
      fetchAndPopulatePokemons('https://pokeapi.co/api/v2/pokemon?limit=151');
    },
    { once: true }
  );
}

window.addEventListener('load', main);
