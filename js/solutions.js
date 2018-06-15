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

// // let count = 10;
// let sCount = count.toString();


// Pythagoras

const calculateSide = (sideA, sideB) => {
	let sideC = Math.hypot(sideA, sideB);
	return sideC
}

console.log(calculateSide(8, 6));


// Sum Array

const sumArray = (arr) => {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	} return sum
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));


// Prime Numbers

// Step One

const checkPrime = (num) => {
	for (i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

console.log(checkPrime(2));
console.log(checkPrime(3));
console.log(checkPrime(5));
console.log(checkPrime(7));
console.log(checkPrime(11));
console.log(checkPrime(4));
console.log(checkPrime(6));
console.log(checkPrime(8));
console.log(checkPrime(9));
console.log(checkPrime(10));
console.log(checkPrime(12));

// Step Two

const printPrimes = (limit) => {
	for (x = 2; x <= limit; x++) {
		if (checkPrime(x) === true) {
			console.log(x);
		}
	}
}

printPrimes(5);

// Is there a way to adjust the scope so that I could use i in my for loop on printPrimes? Right now, it gives an infinite loop.