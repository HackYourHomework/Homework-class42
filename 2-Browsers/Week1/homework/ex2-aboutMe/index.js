'use strict';


const nickname = document.getElementById('nickname');
const favoriteFood = document.getElementById('fav-food');
const hometown = document.getElementById('hometown');
document.querySelector('body').style.fontFamily = 'Arial, sans-serif'; //this line was add to pass unit test. there wasn't such a requirement

nickname.textContent = 'DK';
favoriteFood.textContent = 'sea-food';
hometown.textContent = 'Amsterdam';

const li = document.querySelectorAll('li');
li.forEach(element => element.className = 'list-item')

