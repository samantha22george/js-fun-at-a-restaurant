function nameMenuItem(food) {
  return "Delicious " + food;

//test is the nameMenuItem is a function
//test if calling the nameMenuItem function with the argument pizza returns the dtring "delicious pizza"
}
//create menu item
function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type
  };
}
  //should be a function
  //should create menu item object
//add ingredients
function addIngredients(ingredient, existingIngredients) {
  if (!existingIngredients.includes(ingredient)) {
    existingIngredients.push(ingredient);
  }
  return existingIngredients;
}

// make a function that adds ingredients to an array
//it should be able to add ingredients to an array that already contains ingredients
// it should only add unique ingredients
// three ingredients?
//definitely needed to research that one. might come back to that, maybe there's a better way.
//it passes though


//format price
//1 should be a function. 
//test 2 should add a dollar sign in front of the price.
// should also add a dollar sign but on a different price
// so we need a function that takes a number (price) parameter and returns the price with a dollar sign. 
function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}
//whoooo we did it ok next. googled that.

//should be a function.
//should decrease price by 10% (ew more math)
//checks if the updated price is correct after decrease?
function decreasePrice(price) {
  return price - (price * 0.10);
}

// next up is createRecipie
//obvs a function again
//should "return recipe object". this looks more complicated. (title, ingredients, type)
function createRecipe(title, ingredients, menuItemType) {
  return {
    title: `Delicious ${title}`,
    ingredients: ingredients,
    menuItemType: any
  };
}
//ok that one doesnt work. :/ needs to return a recipe object

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


