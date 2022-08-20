// comments
//blah
//
//
//
import { getElement } from './utils/drink-functions.js';
const mainEl = getElement('.main');
const drinksEl = getElement('.drinks');
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

// data is drinks array

const displayDrinks = async () => {
  const data = await fetchCockTails();
  for (let index = 0; index < data.length; index++) {
    const drinkObjects = data[index];
    console.log(drinkObjects);

    // !destructure
    const { strDrink: name } = drinkObjects;
    console.log(name);
  }
  //   console.log(data[5].strDrink);
  //   const {strDrink: name} = data
};
displayDrinks();
