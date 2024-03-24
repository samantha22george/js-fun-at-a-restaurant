//create retuarant 
//should be a function
//can create another name, or able to be a different name so (name)
// should have menus via object
// should have different types of menus (aka objects)
// is this an array
// i cant figure out why this isnt working 
function createRestaurant(name) {
  return {
    name: name,
    menus: {
      breakfast: [], 
      lunch: [], 
      dinner: [],
    }
  };
}

//addMenuItem
//needs to be a function
//should add an item to the lunch menu. this should use a !
function addMenuIem(restaurant, menuItem) {
  const menuType = menuItem.type;
  if (!restaurant.menus[menuType].find(function(item) {
    return item.name === menuItem.name;
  })) {
    restaurant.menus[menuType].push(menuItem);
  }
}
///remove menu item. 
function removeMenuItem(restaurant, itemName, itemType) {
  const index = restaurant.menus[itemType].findIndex(item => item.name === itemName);
  
  if (index !== -1) {
    const removedItem = restaurant.menus[itemType].splice(index, 1)[0];
    return `No one is eating our ${removedItem.name} - it has been removed from the ${itemType} menu!`;
  } else {
    return `Sorry, we don't sell ${itemName}, try adding a new recipe!`;
  }
}
/// check for food. must start with function of course.
function checkForFood(restaurant, requestedItem) {
  const itemFound = restaurant.menus[requestedItem.type]
    .find(item => item.name === requestedItem.name);
    return itemFound
    ? `Yes, we're serving ${itemFound.name} today!`
    : `Sorry, we aren't serving ${requestedItem.name} today.`;
  }


module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}