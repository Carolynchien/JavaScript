//Q1: Explain what a callback function is and provide a simple example

//ans:
//A callback function is a function that is passed to another function as an argument and is executed after some operation has been completed. Below is an example of a simple callback function that logs to the console after some operations have been completed.

function modufyArray(arr, callback) {
  arr.push(100)
  callback()
}

let arr = [1, 2, 3, 4, 5]

modufyArray(arr, function () {
  console.log('array has been modifiied', arr)
})

//Q2: Given a string, reverse each word in the sentence
//For example Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG

function reverseBySeperator(string, separator) {
  return string.split(separator).reverse().join(separator)
}

let sting = 'i love javascript'

let ans = reverseBySeperator(sting, '')
console.log(ans)

let ans1 = reverseBySeperator(ans, ' ')

console.log(ans1)

//Q3: How to check if an object is an array or not? Provide some code.

let arrayList = [1, 2, 3, 4]

let s1 = ['a', 'b', 'c', 'd']
let s2 = 'string'
function checkArray(param) {
  if (typeof param === 'string') {
    console.log('i m a string')
  } else {
    console.log('its a array')
  }
}
checkArray(s1)
checkArray(s2)

//OR using Object.phototype.toString.call
console.log(Object.prototype.toString.call(s1))

//OR
console.log(Array.isArray(s1))

//Q4: How to empty an array in JavaScript?

let arr2 = [1, 2, 3, 4]

// arr2.length = 0
// arr2.splice(0, arr2.length)
// while (arr2.length) {
//   arr2.pop()
// }
console.log(arr2)

//Q5: How would you check if a number is an integer?
// compare to a decimal or integer

function isInteger(int) {
  return int % 1 === 0
}

let num = 1.2
console.log(isInteger(num))

//Q6: Implement enqueue and dequeue using only two stacks

//Q7: Make this work duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

function duplicate(arr) {
  return arr.concat(arr)
}

let arr3 = [1, 2, 3, 4, 5]
console.log(duplicate(arr3))

//Q8: Write a "mul" function which will properly when invoked as below

function mul(x) {
  return function (y) {
    return function (z) {
      return x * y * z
    }
  }
}
console.log(mul(2)(3)(4)) // output : 24
console.log(mul(4)(3)(4)) // output : 48

//Here mul function accept the first argument and return anonymous function which take the second parameter and return anonymous function which take the third parameter and return multiplication of arguments which is being passed in successive
//In JavaScript function defined inside has access to outer function variable and function is the first class object so it can be returned by function as well and passed as argument in another function.

//Q10: FizzBuzz Challenge
//Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

for (let i = 1, fizz = 0, buzz = 0; i <= 15; i++) {
  fizz++
  buzz++
  if (fizz == 5 && buzz == 3) {
    console.log('FizzBuzz')
    fizz = 0
    buzz = 0
  } else if (fizz == 5) {
    console.log('Fizz')
    fizz = 0
  } else if (buzz == 3) {
    console.log('Buzz')
    buzz = 0
  }
}
