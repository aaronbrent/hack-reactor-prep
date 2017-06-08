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

//Write a function called "isEvenLength".
//
//Given a word, "isEvenLength" returns whether the length of the word is even.
//
//var output = isEvenLength('wow');
//console.log(output); // --> false

function isEvenLength(word) {
  return ( word.length % 2 === 0 );
}

//Write a function called "isEvenAndGreaterThanTen".
//
//Given a number, "isEvenAndGreaterThanTen" returns whether it is both even and greater than 10.
//
//var output = isEvenAndGreaterThanTen(13);
//console.log(output); // --> false

function isEvenAndGreaterThanTen(num) {
  return ( num % 2 === 0 && num > 10 );
}

//Write a function called "average".
//
//Given two numbers, "average" returns their average.
//
//var output = average(4, 6);
//console.log(output); // --> 5

function average(num1, num2) {
  return ( (num1 + num2) / 2 );
}

//Write a function called "computeAreaOfATriangle".
//
//Given the base and height of a triangle, "computeAreaOfATriangle" returns its area.
//
//var output = computeAreaOfATriangle(4, 6);
//console.log(output); // --> 12

function computeAreaOfATriangle(base, height) {
  return ( (base * height) / 2);
}

//Write a function called "cube".
//
//Given a number, "cube" returns the cube of that number.
//
//var output = cube(3);
//console.log(output); // --> 27

function cube(num) {
  return ( num * num * num );
}

//Write a function called "square".
//
//Given a number, "square" should return the square of the given number.
//
//var output = square(5);
//console.log(output); // --> 25

function square(num) {
  return ( num * num );
}

//Write a function called "computeAverageLengthOfWords".
//
//Given two words, "computeAverageLengthOfWords" returns the average of their lengths.
//
//var output = computeAverageLengthOfWords('code', 'programs');
//console.log(output); // --> 6

function computeAverageLengthOfWords(word1, word2) {
  return ( (word1.length + word2.length) / 2 );
}

//Write a function called "addFullNameProperty".
//
//Given an object that has a "firstName" property and a "lastName" property, "addFullNameProperty" returns a "fullName" property whose value is a string with the first name and last name separated by a space.
//
//var person = {
//  firstName: 'Jade',
//  lastName: 'Smith'
//};
//addFullNameProperty(person);
//console.log(person.fullName); // --> 'Jade Smith'

function addFullNameProperty(obj) {
  obj.fullName = obj.firstName + ' ' + obj.lastName;
  return obj;
}

//Write a function called "addObjectProperty".
//
//Given two objects and a key, "addObjectProperty" sets a new property on the 1st object at the given key. The value of that new property is the entire 2nd object.
//
//var person1 = {
//  name: 'Joe Blow',
//  role: 'schlub'
//};
//var person2 = {
//  name: 'Mr. Burns',
//  role: 'supervisor'
//};
//addObjectProperty(person1, 'manager', person2);
//console.log(person1.manager); // --> { name: 'Mr. Burns', role: 'supervisor' }

function addObjectProperty(obj1, key, obj2) {
  obj1[key] = obj2;
  return (obj1);
}

//Write a function called "isPersonOldEnoughToDrinkAndDrive".
//
//Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrinkAndDrive" returns whether the given person is old enough to legally drink and drive in the United States.
//
//Notes:
//* The legal drinking age in the United States is 21.
//* The legal driving age in the United States is 16.
//* It is always illegal to drink and drive in the United States.
//
//var obj = {
//  age: 45
//};
//var output = isPersonOldEnoughToDrinkAndDrive(obj);
//console.log(output); // --> false

function isPersonOldEnoughToDrinkAndDrive(person) {
  return false;
}

//Write a function called "isPersonOldEnoughToDrive".
//
//Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrive" returns whether the given person is old enough to drive.
//
//Notes:
//* The legal driving age in the United States is 16.
//
//var obj = {
//  age: 16
//};
//var output = isPersonOldEnoughToDrive(obj);
//console.log(output); // --> true

function isPersonOldEnoughToDrive(person) {
  return ( person.age >= 16 );
}

//Write a function called "isPersonOldEnoughToVote".
//
//Given a "person" object, that contains an "age" property, "isPersonOldEnoughToVote" returns whether the given person is old enough to vote.
//
//Notes:
//* The legal voting age in the United States is 18.
//
//var obj = {
//  age: 19
//};
//var output = isPersonOldEnoughToVote(obj);
//console.log(output); // --> true

function isPersonOldEnoughToVote(person) {
  return ( person.age >= 18 );
}

//Write a function called "isPersonOldEnoughToDrink".
//
//Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrink" returns whether the given person is old enough to drink.
//
//Notes:
//* The legal drinking age in the United States is 21.
//
//var obj = {
//  age: 16
//};
//var output = isPersonOldEnoughToDrink(obj);
//console.log(output); // --> false

function isPersonOldEnoughToDrink(person) {
  return ( person.age >= 21 );
}

//Write a function called "addArrayProperty".
//
//Given an object, a key, and an array, "addArrayProperty" sets a new property on the object at the given key, with its value set to the given array.
//
//var myObj = {};
//var myArray = [1, 3];
//addArrayProperty(myObj, 'myProperty', myArray);
//console.log(myObj.myProperty); // --> [1, 3]

function addArrayProperty(obj, key, arr) {
  obj[key] = arr;
  return obj;
}

//Write a function called "getNthElement".
//
//Given an array and an integer, "getNthElement" returns the element at the given integer, within the given array.
//
//Notes:
//* If the array has a length of 0, it should return 'undefined'.
//
//var output = getNthElement([1, 3, 5], 1);
//console.log(output); // --> 3

function getNthElement(array, n) {
  return array[n];
}

//Write a function called "getFirstElement".
//
//Given an array, "getFirstElement" returns the first element of the given array.
//
//Notes:
//* If the given array has a length of 0, it should return undefined.
//
//var output = getFirstElement([1, 2, 3, 4, 5]);
//console.log(output); // --> 1

function getFirstElement(array) {
  return array[0];
}

//Write a function called "getLastElement".
//
//Given an array, "getLastElement" returns the last element of the given array.
//
//Notes:
//* If the given array has a length of 0, it should return 'undefined'.
//
//var output = getLastElement([1, 2, 3, 4]);
//console.log(output); // --> 4

function getLastElement(array) {
  var output = array.pop();
  return output;
}

//Write a function called "addToFront".
//
//Given an array and an element, "addToFront" adds the given element to the front of the given array, and returns the given array.
//
//Notes: 
//* It should be the SAME array, not a new array.
//
//var output = addToFront([1, 2], 3);
//console.log(output); // -> [3, 1, 2]

function addToFront(arr, element) {
  arr.unshift(element);
  return arr;
}

//Write a function called "addToBack".
//
//Given an array and an element, "addToBack" returns the given array with the given element added to the end.
//
//Note: It should be the SAME array, not a new array.
//
//var output = addToBack([1, 2], 3);
//console.log(output); // -> [1, 2, 3]

function addToBack(arr, element) {
  arr.push(element);
  return arr;
}

//Write a function called "computeAreaOfARectangle".
//
//Given the length and width of a rectangle, "computeAreaOfARectangle" returns its area.
//
//var output = computeAreaOfARectangle(4, 8);
//console.log(output); // --> 32

function computeAreaOfARectangle(length, width) {
  return ( length * width );
}

//Write a function called "computePerimeterOfARectangle".
//
//Given a length and a width describing a rectangle, "computePerimeterOfARectangle" returns its perimter.
//
//var output = computePerimeterOfARectangle(5, 2);
//console.log(output); // --> 14

function computePerimeterOfARectangle(length, width) {
  return ( (length * 2 ) + ( width * 2 ) );
}

//Write a function called "computePerimeterOfATriangle".
//
//Given 3 sides describing a triangle, "computePerimeterOfATriangle" returns its perimter.
//
//var output = computePerimeterOfATriangle(6, 4, 10);
//console.log(output); // --> 20

function computePerimeterOfATriangle(side1, side2, side3) {
  return ( side1 + side2 + side3 );
}

//Write a function called "computeTripledAreaOfARectangle".
//
//Given a length and width of a rectangle, "computeTripledAreaOfARectangle" returns the rectangle's area, multiplied by 3.
//
//var output = computeTripledAreaOfARectangle(2, 4);
//console.log(output); // --> 24

function computeTripledAreaOfARectangle(length, width) {
  return ( (length * width) * 3 );
}

//Write a function called "computePerimeterOfACircle".
//
//Given the radius of a circle, "computePerimeterOfACircle" returns its perimeter.
//
//var output = computePerimeterOfACircle(4);
//console.log(output); // --> 25.132741228718345

function computePerimeterOfACircle(radius) {
  return ( (2 * Math.PI) * radius );
}

//Write a function called "computeAreaOfACircle".
//
//Given the radius of a circle, "computeAreaOfACircle" returns its area.
//
//var output = computeAreaOfACircle(4);
//console.log(output); // --> 50.26548245743669

function computeAreaOfACircle(radius) {
  return ( Math.PI * (radius * radius) );
}

//Write a function called "computePower".
//
//Given a number and an exponent, "computePower" returns the given number, raised to the given exponent. 
//
//var output = computePower(2, 3);
//console.log(output); // --> 8

function computePower(num, exponent) {
  return ( Math.pow( num, exponent ) );
}

//Write a function called "computeSquareRoot".
//
//Given a number, "computeSquareRoot" returns its square root.
//
//var output = computeSquareRoot(9);
//console.log(output); // --> 3

function computeSquareRoot(num) {
  return Math.sqrt(num);
}

//Write a function called "doubleSquareRootOf".
//
//Given a number, "doubleSquareRootOf" returns double its square root.
//
//var output = doubleSquareRootOf(121);
//console.log(output); // --> 22

function doubleSquareRootOf(num) {
  return ( ( Math.sqrt(num) ) * 2 );
}

//Write a function called "getLengthOfThreeWords".
//
//Given 3 words, "getLengthOfThreeWords" returns the sum of their lengths.
//
//var output = getLengthOfThreeWords('some', 'other', 'words');
//console.log(output); // --> 14

function getLengthOfThreeWords(word1, word2, word3) {
  return ( word1.length + word2.length + word3.length );
}

