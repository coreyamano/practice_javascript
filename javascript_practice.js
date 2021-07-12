// # Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

function selectEvenItems(strings) {
  var evens = [];
  var i = 0;
  while (i < strings.length) {
    if (i % 2 === 0) {
      evens.push(strings[i]);
    }
    i++;
  }
  return evens;
}

console.log(selectEvenItems(["a", "b", "c", "d", "e", "f"]));

// # Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

function findMaxNum(nums) {
  var maxNum = nums[0];
  var i = 0;
  while (i < nums.length) {
    if (nums[i] > maxNum) {
      maxNum = nums[i];
    }
    i++;
  }
  return maxNum;
}

console.log(findMaxNum([5, 4, 8, 1, 2]));

// # Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function factorial(number) {
  var total = 1
  var num = number
  while (num > 0) {
    total = num * total
    num = num - 1
  }
  return total
}

console.log(factorial(5))

// # Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built into Ruby.

function changeOrder(numbers) {
  var reversed = [];
  var i = numbers.length - 1;
  while (i >= 0) {
    reversed.push(numbers[i]);
    i--;
  }
  return reversed;
}

console.log(changeOrder([1, 3, 5, 7]));

// # Write a method that accepts two arrays of numbers, and returns an array of every sum of every combination of single numbers from the first and second array. For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should return this array: [101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

// function sumCombos(nums1, nums2) {
//   var first = 0
//   var second = 0
//   var sum = 0
//   var sums = []
//   nums1.forEach(function (num1) {
//     nums2.forEach(function (num2) {
//       sum = num1 + num2
//       sums.push = sum
//     }
//   return sums;
// }

// console.log(sumCombos([1, 5, 10], [100, 500, 1000]))


// 1. Write a function that takes in an array of numbers and returns its sum.

function sum(nums) {
  var total = 0;
  nums.forEach(function (num) {
    total = total + num;
  });
  return total;
}

console.log(sum([77, 80, 100, 1000]));


//  2. Write a function that takes in an array of strings and returns the smallest string.

function shortestString(words) {
  var shortest = words[0];
  words.forEach(function (word) {
    if (word.length < shortest.length) {
      shortest = word;
    }
  });
  return shortest;
}

console.log(shortestString(["hello", "salutations", "hey", "greetings"]));

// 3. Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.

function reversed(numbers) {
  var reversed = [];
  var i = numbers.length - 1;
  while (i >= 0) {
    reversed.push(numbers[i]);
    i--;
  }
  return reversed;
}

console.log(reversed([45, 55, 65, 75, 95, 85]));

// 4. Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.

function findAWords(words) {
  var count = 0;
  words.forEach(function (word) {
    if (word[0] === "a") {
      count++;
    }
  });
  return count;
}

console.log(findAWords(["apple", "banana", "avocado", "kiwi", "apricot"]));

// 5. Write a function that takes in an array of strings and joins them together to make a single string separated by commas.

function joinStringsWithCommas(strings) {
  var final = "";
  strings.forEach(function (string) {
    final += string;
    final += ",";
  });
  return final;
}

console.log(joinStringsWithCommas(["apple", "orange", "banana"]));

// 6. Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other). 

function product(numbers) {
  var product = 1
  numbers.forEach(function (num) {
    product *= num
  })
  return product;
}

console.log(product([4, 15, 3, 10]));

// 7. Write a function that takes in an array of numbers and returns the two smallest numbers.

function findTwoSmallest(numbers) {
  var twoSmallest = [];
  var sorted = numbers.sort();
  twoSmallest.push(sorted[0]);
  twoSmallest.push(sorted[1]);
  return twoSmallest;
}

console.log(findTwoSmallest([88, -1, 44, -87, 100]));

// 8. Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.
// 9. Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.
// 10. Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.
// (solutions to half of the ruby problems: https://gist.github.com/peterxjang/a9a3827be5077abe008b62f6f9900d71)
// BONUS PROBLEMS
// Write a function that accepts a string and returns whether it’s a palindrome. 
// Write a function to generate/print/store the first “n” prime numbers.
// Given a tic-tac-toe board (matrix of 3 x 3), write a function that can check to see whether X or O won.