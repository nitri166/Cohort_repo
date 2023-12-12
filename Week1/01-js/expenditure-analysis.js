/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {

  let obj = {};
  for (let i = 0; i < transactions.length; i++) {
    if (obj.hasOwnProperty(transactions[i].catagory)) {
      obj[transactions[i].catagory] += transactions[i].price;
    }
    else {
      obj[transactions[i].catagory] = transactions[i].price;
    }

  }
  let res = [];
  for (let i in obj) {
    let tempObj = { catagory: i, totalSpent: obj[i] };
    res.push(tempObj);
  }
  return res;
}



module.exports = calculateTotalSpentByCategory; 
