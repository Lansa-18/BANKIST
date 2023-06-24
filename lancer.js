'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// Array Methods are methods that we can attach to all arrays in javscript.

// let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE METHOD
// console.log(arr.slice(2)); // Returns a new array with the extracted part. It does not MUTATE the actual ARRAY.
// console.log(arr.slice(2,4)); // like in strings, the end parameter would not be included.
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice()); // also creates a shallow copy of the array.

// SPLICE METHOD

// It performs the same function as the slice method, just that the 'splice' method mutates the array.
// console.log(arr.splice(2));
// arr.splice(-1)
// console.log(arr);
// arr.splice(1, 2); // the second parameter specifies the amount of items to be deleted a.k.a the DELETE COUNT.
// console.log(arr);
// Most times, what we are interested in is removing some elements from an array and since the 'splice' method mutates the array, we often use it to achieve that goal.

// REVERSE METHOD
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f']
// console.log(arr2.reverse()); // The Reverse method also mutates the original array.
// console.log(arr2);

// CONCAT METHOD
// const letters = arr.concat(arr2);  // this can also be done using the spread operators.
// console.log(letters);

// JOIN METHOD
// console.log(letters.join(' - '));

// THE NEW (AT) METHODS
// const arr = [23,11,64];
// console.log(arr[0]);
// console.log(arr.at(0)); // returns the value at the index position that was specified.

// traditional methods of getting the last array elements.
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);

// A new ES6 method that we can use tpo get the last element of the array. Helpful in METHOD CHAINING AS WELL
// console.log(arr.at(-1));
// console.log('lancer'.at(3));

/////////////// LOOPING ARRAYS USING THE FOR EACH METHOD

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Looping using the for Of method.
// for (const movement of movements){
// if(movement > 0){
//   console.log(`You deposited ${movement}`);
// } else {
//   // the Math.abs removes the negative sign in a number.
//   console.log(`You withdrew ${Math.abs(movement)}`);
// }
// }

// Looping using the forEach method
// movements.forEach((mov, i, arr) => {
//   if (mov > 0) {
//     console.log(`Movements ${i + 1}: You deposited ${mov}`);
//   } else {
//     // the Math.abs removes the negative sign in a number.
//     console.log(`Movements ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// The forEach method can take in three arguments in this order,
// the current element
// the index
// the entire array being looped over

// WHEN SHOULD YOU USE THE FOROF OR THE FOREACH LOOP
// You can't continue or break out of a forEach loop, if you need to break out of a loop, use the for of loop.
// Apart from that, it comes down to your personal reference.

// Using the forEach on Maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

// Using the forEach on Sets.
const currenciesUnique = new Set (['USD', 'GBP', 'EUR', 'USD', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

// It is important to note that a set doesn't have keys in them, so in a forEach Method, there is no index to assign a value to. A set just makes use of the values.