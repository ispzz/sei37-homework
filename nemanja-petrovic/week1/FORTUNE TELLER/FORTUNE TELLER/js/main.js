function getRandomItemFromArray(items) {
  const randomItemIndex = Math.floor(Math.random() * items.length);

  return items[randomItemIndex];
}

const NUMBER_OF_CHILDREN = [4, 3, 2, 1];
const PARTNER_NAMES = ["Hannah", "Jane", "Sammy", "Kate"];
const LOCATION_NAMES = ["Sydney", "Tokyo", "New York", "London"];
const OCCUPATION = ["Waitress", "Manager", "Web Developer", "Dancer"];

console.log('Fortune Teller');

console.log(getRandomItemFromArray(NUMBER_OF_CHILDREN) + ' kids, and married to ' + getRandomItemFromArray(PARTNER_NAMES));
console.log('Living in ' + getRandomItemFromArray(LOCATION_NAMES) + ' and working as a ' + getRandomItemFromArray(OCCUPATION));
