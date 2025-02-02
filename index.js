function hasTargetSum(array, target) {
  // Write your algorithm here
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j=i+1; j < array.length; j++) {
      sum = array[i] + array[j];
      if (sum === target) {
        return true;
      }
    }
  }return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n²)
*/

/* 
  Add your pseudocode here
  use two nested for loops to sum up the array elements
  compare the sum with the target value and return true if they match and false if they don't
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
