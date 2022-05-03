"use strict";

////////////////////////////// THE BELOW IS FOR THE EASY (1) SECTION OF THE ASSIGNMENT
//// DRIVER: LEE     NAVIAGATOR: BELLUL

// Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even 
// numbers.
// Example:
// Input: [2, 4, 7, 11, 15, 16]
// Output: Even numbers: [2, 4, 16]
//   Odd Numbers: [7, 11, 15]


const ranNum = [2, 3, 4, 5, 33, 33, 212, 11, 33];

const evenOddFunction = function (ranNum) {

    for (var i = 0; i < ranNum.length; i++) {

        if ((ranNum[i] % 2) != 1) {
            evens.push(ranNum[i]);
            console.log(evens);
        } else {
            odds.push(ranNum[i]);
            console.log(odds);
        }

    }
}


// evenOddFunction(ranNum)
// console.log(evens);
// console.log(odds);

const evens = [];
const odds = [];

///////////////////////////////// BELOW IS THE EASY (2) SECTION OF THE ASSIGNMENT
//// DRIVER: BELLUL     NAVIAGATOR: LEE

// EASY (2)
// Create a function that checks an array for prime numbers then inserts any pimes into a new array.                               
// Example 1:                                                                                                                                       
// Input: numArray = [1,2,3,4,5,6,7,8,9,10]
// Output: primeArray = [2,3,5,7]
// Example 2:
// Input: numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83] 
// Output: primeArray = [19 ,29 ,47 , 83]

let num = [3, 11, 29, 82, 4, 84, 36, 53, 47]

const checkPrime = num.filter(function (number) {
    if (number <= 1) {
        return false;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
});

console.log(checkPrime)

///////////////////////////////// BELOW IS THE MEDIUM (1) SECTION OF THE ASSIGNMENT
//// DRIVER: LEE     NAVIAGATOR: BELLUL

// MEDIUM(1)
// Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input
// is a vowel
// Example 1:
// Input: vowelChecker(‘b’)
// Output: ‘This is not a vowel’
// Example 2:
// Input: vowelChecker(‘a’)
// Output: ‘This is a vowel’

// function isVowel(str) {
//     const value = ["a", "e", "i", "o", "u"].indexOf(str.toLowerCase()) !== -1

//     if (value) {
//         return console.log(`This letter: ${str} is a vowel`);

//     } else {
//         return console.log(`This letter: ${str} is NOT a vowel`);
//     }
// }

// isVowel("o");

///////////////////////////////// BELOW IS THE MEDIUM (2) SECTION OF THE ASSIGNMENT
//// DRIVER: BELLUL     NAVIAGATOR: LEE

// MEDIUM (2)
// Create a function that accepts two strings, then determines whether or not the first string is an anagram of the 
// second string by returning a boolean. 
// Example:
// Input: String 1: So dark the con of man
//  String 2: Madonna of the Rocks
// Output: True
// Input: String 1: Things are good
//   String 2: Dogs eat ants
// Output: False

// const anagram = function (str1, str2) {
//     // let len1 = str1.length;
//     // let len2 = str2.length;
//     // if(len1 !== len2) {
//     //     console.log('Invalid Input')
//     //     return
//     // }
//     let string1 = str1.split('').sort().join('');
//     let string2 = str2.split('').sort().join('');
//     if (string1 === string2) {
//         console.log('True');
//     } else {
//         console.log('False');
//     }
// }

// anagram('indian', 'ndiian')


///////////////////////////////// BELOW IS THE MEDIUM (3) SECTION OF THE ASSIGNMENT //////////////////////////
//// DRIVER: Lee     NAVIAGATOR: BELLUL

// MEDIUM(3)
// Write a function that takes in two numbers and determines the largest positive integer that divides the two
// numbers without a remainder.
// Example 1:
// Input: gdc_two_numbers(336,360)
// Output: 24
// Example 2:
// Input: gdc_two_numbers(78,126)
// Output: 6


const biggestRemainder = function (num1, num2) {

    var x = Math.abs(num1);
    var y = Math.abs(num2);


    if ((typeof x !== "number") || (typeof y != "number")) {
        return false;
    }

    while (y) {
        var e = y;
        y = x % y;
        x = e
    }

    return x

}

console.log(biggestRemainder(336, 360));