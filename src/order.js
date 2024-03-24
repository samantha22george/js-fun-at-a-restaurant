//takeOrder
//gonna be another function. 
//2. should add new orders. creates two orders? makes an empty array. oh this is a doozy
//3. incolves adding multiple orders. uhhh
//ok, so it expects a function (takeOrder) to add new orders to a specific list and maintain order of said list
//its not supposed to have more than 3 orders. less than 3 that.
function takeOrder(order, orderList) {
  if (orderList.length < 3) {
    orderList.push(order);
  } else {
    console.log('Order limit reached.');
  }
}


//refundorder
//1. gotta be a function
//2. removed an order? creates three, makes an array??
// it needs an order number to remove said order (makes sense)
//yeah going to have to search this one a lot. 
//a function that removes something from a list, via number, then returns updated list
function refundOrder(orderNumber, deliveryOrders) {
  return deliveryOrders.filter(order => order.orderNumber !== orderNumber);
}
// nope. this doesnt remove the order by number. or remove a different order by order number.

//list items checks if its a function
//it needs to list out the items by name from a list of orders
// make an array called deliveryOrders ?
//lists out the order items by name, should be a concatenated string
function listItems(deliveryOrders) {
  const items = deliveryOrders.map(order => order.item);
  return items.join(", ");
}
// search order
function searchOrder(deliveryOrders, searchTerm) {
  return deliveryOrders.some(order => order.item === searchTerm);
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}