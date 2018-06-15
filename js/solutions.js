// 1. Setup
// 2. Parameters are names listed in a function definition while arguments are the real values passed to the function.
// 3. The return statement stops the execution of a function and returns a value to the function caller. console.log is used to display data from Javascript.

// Palindrome

const checkPalindrome = (string) => {
	let lowerCase = string.toLowerCase();
	let reverseString = lowerCase.split('').reverse('').join('');
	if (lowerCase === reverseString) {
		return true
	} else {
		return false
	}
} 

console.log(checkPalindrome("Radar"));

console.log(checkPalindrome("Borscht"));


// Digit Sum

// let num = 0;

// const sumDigits = (num) => {
// 	let stringNum = ""+num;
// 	let digits = [];
// 	console.log(stringNum);
// // 	// for (let i = 0; i < stringNum.length; i += 1) {
// // 	// 	digits.push(stringNum.charAt[i]);
// // 	// 	console.log(digits);
// // 	// }
// }

// // // const sumDigits = (num) => {
// // // 	let digits = num.toString().split('');
// // // 	console.log(digits);

// // // 	for (let i = 0; i < )
// // // }

// console.log(sumDigits(42));

// let count = 10;
let sCount = count.toString();