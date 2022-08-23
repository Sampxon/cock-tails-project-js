// comments
//blah
//

import { getElement } from './utils/drink-functions.js';

// import './utils/searchForm.js';
//
const genEl = getElement('.gen-cocktails');
const mainEl = getElement('.main');
const loadingEl = getElement('.loading');
const errorEl = getElement('.error');
let testUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

const fetchCockTails = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const drinks = data.drinks;
    // console.log(drinks);

    return drinks;
  } catch (error) {
    console.log(error);
  }
};
// fetchCockTails();

// drinks and data is drinks array

const displayDrinks = async (url) => {
  loadingEl.classList.remove('hides-loading');
  const drinks = await fetchCockTails(url);

  if (drinks === null) {
    loadingEl.classList.add('hides-loading');
    // errorEl.classList.remove('hides-error-msg');
    mainEl.classList.add('hides-loading');
    errorEl.classList.remove('hides-error-msg');
  } else {
    mainEl.classList.remove('hides-loading');
    errorEl.classList.add('hides-error-msg');
  }
  const showDrinks = drinks
    .map((drinkItem) => {
      // console.log(drinkItem);
      // !destructure
      const { idDrink: id, strDrinkThumb: image, strDrink: name } = drinkItem;

      return `
        <!-- start of single drink-->
        <a href="./single-drink.html">
        <div class="single-drink" data-id="${id}">
        <div class="img-0">
        <img src="${image}" alt="${name}" />
        </div>
        <h4 class="sing-drink-title">${name}</h4>
        </div>
        </a>
        <!-- end of single drink -->`;
    })
    .join('');

  loadingEl.classList.add('hides-loading');
  mainEl.innerHTML = `<section class="drinks">${showDrinks}</section>`;
};

window.addEventListener('DOMContentLoaded', displayDrinks(testUrl));

// export { displayDrinks, mainEl, loadingEl, errorEl, testUrl, fetchCockTails };

//! SEARCH FORM FUNCTIONALITY

const searchEl = getElement('.search-input');
const inputAttribute = getElement('[name="drink"]');

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

searchEl.addEventListener('keyup', (e) => {
  e.preventDefault();
  let value = inputAttribute.value.toLowerCase().trim();
  if (!value) return;

  displayDrinks(`${baseUrl}${value}`);
  console.log(value);
});
console.log('debugging.....');
