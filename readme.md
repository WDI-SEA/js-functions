# Functions - Problem Set

These problems will use your knowledge of looping and conditionals, and we will build functions on top of that.

## Getting Started

* Fork and clone this repository
* Run `npm install` to install dependencies
* Solve the problems below in separate files, located in `js`
* Run `node js/nameOfFile.js` to execute code

---

## Problems

### 1. mean(arr)

Write a function called ```mean```. It should take in an array of numbers and return the average (mean) of all the numbers. Make sure to account for empty arrays!  

---

### 2. sillySum(arr)

Write a function that takes an array of numbers, and returns the sum of each number multiplied by its index. 

`count += (number * index)`

---

### 3. numSquare(max)

Create a function called `numSquare` that will return an array of all perfect square numbers up to and including, but not exceeding a max number. For example:

```js
numSquare(5);
// Prints: 1, 4, 9, 16, 25
```

---

## BONUS

### letterCount(word)

Write a function that takes a string that finds out how many times a character occurs.  For example, the string "apple" would print the following:

```
a - 1
p - 2
l - 1
e - 1
```

**Hint**: There are two parts to this question. 

The first is determining the counts of each letter. To do that, loop through each letter, and increment the value to a key in an object. The key should be the letter, the value is the number of times that the letter was encountered. For example `{ 'a': 1, 'p': 2, 'l': 1, 'e': 1 }`.

The second is then printing out the keys and values inside that object. How can you loop through the keys in an object?

<details>
  <summary>Click to Reveal Answer</summary>
  
  Try out the `for...in` loop. Here's the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in">MDN Article on For...In Loops</a> to get you started.
</details>

**SUPER BONUS**: Make sure that lower case letters and upper case letters count for the same character. Also, ignore spaces and punctuation.


---

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
