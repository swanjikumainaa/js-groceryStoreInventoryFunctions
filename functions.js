
// You manage a grocery store and need to keep track of the inventory
//  of various items. You will use arrays to store the data
//  and various functions to manipulate and analyze the data. 



// Create an array containing the names of all items in the inventory maximum of 10.
let items = ['avocado', 'banana', 'eggs', 'milk','potatoes','cabbage'];

// Create a separate array with the corresponding stock quantities of each item maximum of 10.
let stock = [10, 5, 7, 8, 6, 9];



// Write a function to add a new item to the inventory, updating both arrays.
function addItem(itemName, quantity) {
  // check if there is room for a new item
  if (items.length < 10) {
    // add the new item and its quantity to the arrays
    items.push(itemName);
    stock.push(quantity);
    console.log(`Added ${quantity} ${itemName}(s) to inventory.`);
  } else {
    console.log('Inventory is full.');
  }
}

// Write a function to update the stock quantity of an existing item
function updateStock(itemName, newQuantity) {
  // find the index of the item in the items array
  let index = items.indexOf(itemName);
  if (index >= 0) {
    // update the corresponding quantity in the stock array
    stock[index] = newQuantity;
    console.log(`Updated ${itemName} stock to ${newQuantity}.`);
  } else {
    console.log(`${itemName} not found in inventory.`);
  }
}

// Write a function to calculate the total number of items in the inventory
function getTotalItems() {
  let total = 0;
  for (let i = 0; i < stock.length; i++) {
    total += stock[i];
  }
  console.log(`Total number of items in inventory: ${total}.`);
}

// Write a function to find the item with the lowest stock quantity
function getLowestStockItem() {
  let minQuantity = Infinity;
  let minItemIndex = -1;
  for (let i = 0; i < stock.length; i++) {
    if (stock[i] < minQuantity) {
      minQuantity = stock[i];
      minItemIndex = i;
    }
  }
  console.log(`Item with lowest stock quantity: ${items[minItemIndex]} (${minQuantity}).`);
}


addItem('milk', 15);
updateStock('banana', 3);
getTotalItems();
getLowestStockItem();
