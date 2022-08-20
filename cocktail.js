// comments
//blah
//
//
//
import { getElement } from './utils/drink-functions.js';
const mainEl = getElement('.main');
const drinksEl = getElement('.drinks');
const loadingEl = getElement('.loading');
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';
// drinksEl.textContent = 'im good'

const fetchCockTails = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  const drinks = data.drinks;
  console.log(drinks);

  return drinks;
};
// fetchCockTails();

// drinks and data is drinks array

const displayDrinks = async () => {
  const drinks = await fetchCockTails();
  //   if (false) {
  //     loadingEl.classList.remove('hides-loading');
  //     drinksEl.innerHTMl = null;
  //   }
  const showDrinks = drinks
    .map((drinkItem) => {
      console.log(drinkItem);
      // !destructure
      const {
        idDrink: drink,
        strDrinkThumb: image,
        strDrink: name,
      } = drinkItem;

      return `
        <!-- start of single drink-->
        <a href="./single-drink.html">
        <div class="single-drink">
        <div class="img-0">
        <img src="${image}" alt="" />
        </div>
        <h4 class="sing-drink-title">${name}</h4>
        </div>
        </a>
        <!-- end of single drink -->`;
    })
    .join('');
  console.log(showDrinks);
  mainEl.innerHTML = `<section class="drinks">${showDrinks}</section>`;
};

displayDrinks();
