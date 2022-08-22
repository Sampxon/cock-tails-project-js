import { getElement } from '../utils/drink-functions.js';

import {
  displayDrinks,
  mainEl,
  loadingEl,
  errorEl,
  testUrl,
  fetchCockTails,
} from '../cocktail.js';

const searchEl = getElement('.search-input');
const inputAttribute = getElement('[name="drink"]');

let baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=z';

// displayDrinks(baseUrl);

// searchEl.addEventListener('input', (e) => {
//   e.preventDefault();
//   let value = e.target.value;
//   console.log(value.trim());
//   if (value && value.trim().length > 0) {
//     value = value.trim().toLowerCase;
//     baseUrl =
//       'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + value;
//     console.log(baseUrl);
//     return displayDrinks(baseUrl);
//   } else {
//     console.log('error');
//   }
// });

console.log('search form');
console.log(mainEl);
// https://www.thecocktaildb.com/api/json/v1/1/search.php?s=


// if (value) {
//   console.log(value);
//   value = value.trim();
//   value = value.toLowerCase();
//   let finalUrl = baseUrl + value;
//   errorEl.classList.add('hides-error-msg');
//   return displayDrinks(`${baseUrl}${value}`);
// } else if (!value) {
//   errorEl.classList.remove('hides-error-msg');
//   mainEl.classList.add('hides-loading');
// }
// mainEl.classList.add('hides-loading');
// errorEl.classList.remove('hides-error-msg');

// searchEl.addEventListener('keyup', (e) => {
//   e.preventDefault();
//   let value = e.target.value;
//   console.log(!value);
//   if(!value) return;

// });

// https://www.thecocktaildb.com/api/json/v1/1/search.php?s=
