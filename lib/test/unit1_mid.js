// Write a method that doubles each element in an array.

function doubler(array) {
    return array.map((el) => {
        return el *2
    })
}

// Write a method that returns the factors of a number in ascending order.
// Factors are numbers that divide evenly into a number.

function factors(num) {
  let arr =[];
  for(let i = 0; i <= num; i++){
      if(num % i === 0){
          arr.push(i)
      }
  }
  return arr
}

// Write a method that returns the median of elements in an array
// If the length is even, return the average of the middle two elements.

function median(arr) {
    const mid = Math.floor(arr.length / 2),
    nums = arr.sort((a, b) => a - b);
  if (arr.length % 2 !== 0){
    return nums[mid]
  } else {
      return(nums[mid - 1] + nums[mid]) / 2
  }

}

// Write a method that returns the product of all numbers in an array.

function product(arr) {
    let product = 1;
    if(arr.length === 0){ product *= arr.length}
    arr.forEach((el) => {
        product *= el 
    })

    return product
}

// Write a method that returns the largest number in an array.

function largest(arr) {
    let largenum = arr[0]
    arr.forEach((el) => {
        if(largenum > el){
            largenum = largenum
        } else {
            largenum = el
        }
    })
    return largenum
}

// Write a method called 'and' that takes in two arguments. It should check
// return whether or not both arguments have a truthy value.

function and(arg1, arg2) {
    if(arg1 === true && arg2 === true){
        return true
    } else {
        return false
    }
}

// Write a function that takes in an array and a target. Return whether or
// not the array contains the target

function includes(arr, target) {
  return  arr.includes(target)
}

// Write a function that removes all the vowels from a string.

function disemvowel(str) {
    let vowel = "aAeEiIoOuU"
    let disemvowel = ""
    for( let char of str){
        if(!vowel.includes(char)){
            disemvowel += char
        }
    }
    return disemvowel

}

module.exports = { doubler, factors, median, product, largest, and, includes, disemvowel };
