//
//Write a function called "isOldEnoughToDrink".
//
//Given a number, in this case an age, "isOldEnoughToDrink" returns whether a person of this given age is old enough to legally drink in the United States.
//
//Notes:
//* The legal drinking age in the United States is 21.


function isOldEnoughToDrink(age) {
  return (age >= 21);
}
//
//Write a function called "isOldEnoughToDrive".
//
//Given a number, in this case an age, "isOldEnoughToDrive" returns whether a person of this given age is old enough to legally drive in the United States.
//
//Notes:
//* The legal driving age in the United States is 16.

function isOldEnoughToDrive(age) {
  return (age >= 16);
}

//Write a function called "isOldEnoughToVote".
//
//Given a number, in this case an age, 'isOldEnoughToVote' returns whether a person of this given age is old enough to legally vote in the United States.
//
//Notes:
//* The legal voting age in the United States is 18.

function isOldEnoughToVote(age) {
  return (age >= 18);
}

//Write a function called "isOldEnoughToDrinkAndDrive".
//
//Given a number, in this case an age, "isOldEnoughToDrinkAndDrive" returns whether a person of this given age is old enough to legally drink and drive in the United States.
//
//Notes:
//* The legal drinking age in the United States is 21.
//* It is always illegal to drink and drive in the United States.

function isOldEnoughToDrinkAndDrive(age) {
    return false;
}
//
//Write a function called "getProperty".
//
//Given an object and a key, "getProperty" returns the value of the property at the given key. 
//
//Notes:
//* If there is no property at the given key, it should return undefined.

function getProperty(obj, key) {
  for (k in obj){
    if (k == key){
      return obj[key];
    }
  }
}


//Write a function called "addProperty".
//
//Given an object, and a key, "addProperty" sets a new property on the given object with a value of true.
//
//var myObj = {};
//addProperty(myObj, 'myProperty');
//console.log(myObj.myProperty); // --> true

function addProperty(obj, key) {
   obj[key] = true;
   return obj;
}

//Write a function called "removeProperty".
//
//Given an object and a key, "removeProperty" removes the given key from the given object.
//
//var obj = {
//  name: 'Sam',
//  age: 20
//}
//removeProperty(obj, 'name');
//console.log(obj.name); // --> undefined

function removeProperty(obj, key) {
  delete obj[key];
}

//Write a function called "checkAge". 
//
//Given a person's name and age, "checkAge" returns one of two messages:
//
//"Go home, {insert_name_here}!", if they are younger than 21.
//"Welcome, {insert_name_here}!", if they are 21 or older.
//
//Naturally, replace "{insert_name_here}" with the given name. :)
//
//var output = checkAge('Adrian', 22);
//console.log(output); // --> 'Welcome, Adrian!'

function checkAge(name, age) {
  var message = '';
  if (age < 21){
    message = 'Go home, ' + name  + '!';
  } else if (age >= 21){
    message = 'Welcome, ' + name + '!';
  }
  return message;
}

//Write a function called "getFullName".
//
//Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space.
//
//var output = getFullName('Joe', 'Smith');
//console.log(output); // --> 'Joe Smith'

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

//Write a function called "getLengthOfWord".
//
//Given a word, "getLengthOfWord" returns the length of the given word.
//
//var output = getLengthOfWord('some');
//console.log(output); // --> 4

function getLengthOfWord(word) {
  return word.length;
}

//Write a function called "getLengthOfTwoWords".
//
//Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.
//
//var output = getLengthOfTwoWords('some', 'words');
//console.log(output); // --> 9

function getLengthOfTwoWords(word1, word2) {
  return word1.length + word2.length;
}

//Write a function called "isGreaterThanTen".
//
//Given a number, "isGreaterThanTen" returns whether it is greater than 10.
//
//var output = isGreaterThanTen(11);
//console.log(output); // --> true

function isGreaterThanTen(num) {
  return (num > 10);
}

//Write a function called "isLessThan30".
//
//Given a number, "isLessThan30" returns whether the given number is less than 30.
//
//var output = isLessThan30(9);
//console.log(output); // --> true

function isLessThan30(num) {
  return ( num < 30 );
}

//Write a function called "equalsTen".
//
//Given a number, "equalsTen" returns whether or not the given number is 10.
//
//var output = equalsTen(9);
//console.log(output); // --> false

function equalsTen(num) {
  return ( num === 10 );
}

//Write a function called "isLessThan".
//
//Given 2 numbers, "isLessThan" returns whether num2 is less than num1.
//
//var output = isLessThan(9, 4);
//console.log(output); // --> true

function isLessThan(num1, num2) {
  return ( num2 < num1 );
}

//Write a function called "isGreaterThan".
//
//Given 2 numbers, "isGreaterThan" returns whether num2 is greater than num1.
//
//var output = isGreaterThan(11, 10);
//console.log(output); // --> false

function isGreaterThan(num1, num2) {
  return ( num2 > num1 );
}

//Write a function called "isEqualTo".
//
//Given 2 numbers, "isEqualTo" returns whether num2 is equal to num1.
//
//var output = isEqualTo(11, 10);
//console.log(output); // --> false

function isEqualTo(num1, num2) {
  return ( num1 === num2 );
}

//Write a function called "isEven".
//
//Given a number, "isEven" returns whether it is even.
//
//var output = isEven(11);
//console.log(output); // --> false

function isEven(num) {
  return ( num % 2 === 0);
}

//Write a function called "isOdd".
//
//Given a number, "isOdd" returns whether the given number is odd.
//
//var output = isOdd(9);
//console.log(output); // --> true

function isOdd(num) {
  return ( num % 2 !== 0 );
}

//Write a function called "isSameLength".
//
//Given two words, "isSameLength" returns whether the given words have the same length.
//
//var output = isSameLength('words', 'super');
//console.log(output); // --> true

function isSameLength(word1, word2) {
  return ( word1.length === word2.length );
}

//Write a function called "areBothOdd".
//
//Given 2 numbers, "areBothOdd" returns whether or not both of the given numbers are odd.
//
//var output = areBothOdd(1, 3);
//console.log(output); // --> true

function areBothOdd(num1, num2) {
  return ( (num1 % 2 !== 0) && (num2 % 2 !== 0) );
}

//Write a function called "isEitherEven".
//
//Given two numbers, "isEitherEven" returns whether or not either one of the given numbers is even.
//
//var output = isEitherEven(1, 4);
//console.log(output); // --> true

function isEitherEven(num1, num2) {
  return ( num1 % 2 === 0 || num2 % 2 === 0 );
}

//Write a function called "isOddLength".
//
//Given a word, "isOddLength" returns whether the length of the given word is odd.
//
//var output = isOddLength('special');
//console.log(output); // --> true

function isOddLength(word) {
  return ( word.length % 2 !== 0 );
}


