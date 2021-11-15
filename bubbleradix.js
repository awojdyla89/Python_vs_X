/* Python Vs X */

/* JavaScript - Bubble Sort - Radix Sort */

/*
This project explores the Algorithms Bubble Sort and Radix Sort 
from assignment 2 with Python and Javascript to gain an understanding 
of the time complexity behavior using benchmarking techniques 
and Canvas JS for graph visualiztion. 
 */

/* 
Bubble Sort Function takes in 1 argument: array 
Double for loop to compare the element to element + 1 compares and swaps 
returns a sorted array of elements 
*/
function bubbleSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

/* 
Helper function to randomize elements in array for benchmarking 
*/
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/* 
Takes a number from array and returns number to sort based on 10's place. 
If the number doesn't exist a 0 is put in place as a buffer for 10's place. 
EX: num = 1342 index = 2 returns 4 
Ex: num = 5 index = 0 returns 0 in place of 05 
*/
function getNum(num, index) {
  const numToString = String(num);
  let strLength = numToString.length - 1;
  const numFound = numToString[strLength - index];
  if (numFound === undefined) {
    return 0;
  } else return numFound;
}

/* 
Radix Sort Function takes in 1 argument: array 
Uses the spread operator and map function to return the max length of a number 
Returns a 1D array of sorted elements 
*/
function radixSort(arr) {

  let maxLength = Math.max(...arr.map((el) => el.toString().length));

  for (let i = 0; i < maxLength; i++) {
    let buckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < arr.length; j++) {
      let num = getNum(arr[j], i);

      if (num !== undefined) {
        buckets[num].push(arr[j]);
      }
    }
    arr = buckets.flat();
  }
  return arr;
}

// create 10 random arrays for benchmarking
let numOfRuns = 10;
let list1 = shuffleArray([...Array(100).keys()]);
let list2 = shuffleArray([...Array(500).keys()]);
let list3 = shuffleArray([...Array(1000).keys()]);
let list4 = shuffleArray([...Array(2500).keys()]);
let list5 = shuffleArray([...Array(5000).keys()]);
let list6 = shuffleArray([...Array(7500).keys()]);
let list7 = shuffleArray([...Array(10000).keys()]);
let list8 = shuffleArray([...Array(20000).keys()]);
let list9 = shuffleArray([...Array(30000).keys()]);
let list10 = shuffleArray([...Array(40000).keys()]);

let lists = [list1, list2, list3, list4, list5, list6, list7, list8, list9, list10];

// Loop through each array 10 times and take the average per size list.
lists.forEach((element) => {
  startTime = performance.now();
  for (let i = 0; i < numOfRuns; i++) {
    bubbleSort(element);
  }
  endTime = performance.now();
  totalTime = endTime - startTime;
  avgTime = totalTime / numOfRuns;
  console.log(
    `Total Time: 10 iterations size - ${element.length}: ${
      totalTime / 1000
    } seconds`
  );
  console.log(
    `Bubble Sort Avg per iteration size - ${element.length}: ${
      avgTime / 1000
    } seconds`
  );
});
console.log("\n\n");

lists.forEach((element) => {
  startTime = performance.now();
  for (let i = 0; i < numOfRuns; i++) {
    radixSort(element);
  }
  endTime = performance.now();
  totalTime = endTime - startTime;
  avgTime = totalTime / numOfRuns;
  console.log(
    `Total Time: 10 iterations size - ${element.length}: ${
      totalTime / 1000
    } seconds`
  );
  console.log(
    `Radix Sort Avg per iteration size - ${element.length}: ${
      avgTime / 1000
    } seconds`
  );
});
