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

const sumDigits = (num) => {
	let numStringArray = [];
	let numIntArray = [];
	let sum = 0;

	let numToString = num.toString();
	let digitsInNum = numToString.length;

	// push num as string to array

	for (let i = 0; i < digitsInNum; i++) {
		numStringArray.push(numToString[i]);
	}
	//console.log(numStringArray);

	// push digits to array

		for (let i = 0; i < digitsInNum; i++) {
			let numInt = 0;
			numInt = parseInt(numStringArray[i], 10);
			numIntArray.push(numInt);
		}
		//console.log(numIntArray);

		// add together

		for (let i = 0; i < digitsInNum; i++) {
			sum += numIntArray[i];
		}
		return sum
}


console.log(sumDigits(42));



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


// Insert Dash

const insertDash = (num2) => {
	let numString = '';
	let numArr = num2.toString().split('');
	for (let i = 0; i < numArr.length; i++) {
		if (numArr[i] % 2 === 1 && numArr[i+1] % 2 === 1) {
			numString += numArr[i] + '-'
		} else {
			numString += numArr[i];
		}
	} return (numString);
}

console.log(insertDash(454793));
