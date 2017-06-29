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

//Write a function called "joinArrays".
//
//Given two arrays, "joinArrays" returns an array with the elements of "arr1" in order, followed by the elementsin "arr2". 
//
//var output = joinArrays([1, 2], [3, 4]);
//console.log(output); // --> [1, 2, 3, 4]

function joinArrays(arr1, arr2) {
  var output = arr1.concat(arr2);
  return output;
}

//Write a function called "getElementsAfter".
//
//Given an array and an index, "getElementsAfter" returns a new array with all the elements after (but not including) the given index.
//
//var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
//console.log(output); // --> ['d', 'e']

function getElementsAfter(array, n) {
 var output = array.slice(n + 1);
 return output;
}

//Write a function called "getElementsUpTo".
//
//Given an array and a index, "getElementsUpTo", returns an array with all the elements up until, but not including, the element at the given index.
//
//Notes:
//* In order to do this you should be familiar with the 'slice' method.
//
//var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
//console.log(output); // --> ['a', 'b', 'c']

function getElementsUpTo(array, n) {
  var output = array.slice(0, n);
  return output;
}

//Write a function called "getAllElementsButFirst".
//
//Given an array, "getAllElementsButFirst" returns an array with all the elements but the first.
//
//var input = [1, 2, 3, 4];
//var output = getAllElementsButFirst(input);
//console.log(output); // --> [2, 3, 4]

function getAllElementsButFirst(array) {
  var output = array.slice(1);
  return output;
}

//Write a function called "getAllElementsButLast".
//
//Given an array, "getAllElementsButLast" returns an array with all the elements but the last.
//
//var input = [1, 2, 3, 4];
//var output = getAllElementsButLast(input);
//console.log(output); // --> [1, 2 , 3]

function getAllElementsButLast(array) {
  var output = array.splice(0, array.length -1);
  return output;
}

//Write a function called "removeFromFront".
//
//Given an array, "removeFromFront" returns the given array with its first element removed.
//
//Notes:
//* You should be familiar with the method 'shift'.
//
//var output = removeFromFront([1, 2, 3]);
//console.log(output); // --> [2, 3]

function removeFromFront(arr) {
 arr.shift();
 return arr;
}

//Write a function called "removeFromBackOfNew".
//
//Given an array, "removeFromBackOfNew" returns a new array containing all but the last element of the given array.
//
//Notes:
//* You should be familiar with the 'slice' method.
//
//var arr = [1, 2, 3];
//var output = removeFromBackOfNew(arr);
//console.log(output); // --> [1, 2]
//console.log(arr); // --> [1, 2, 3]

function removeFromBackOfNew(arr) {
  var output = arr.slice(0, arr.length -1);
  return output;
}

//Write a function called "removeFromFrontOfNew".
//
//Given an array, "removeFromFrontOfNew" returns a new array containing all but the first element of the given array.
//
//Notes:
//* You should be familiar with the 'slice' method.
//
//var arr = [1, 2, 3];
//var output = removeFromFrontOfNew(arr);
//console.log(output); // --> [2, 3]
//console.log(arr); // --> [1, 2, 3]

function removeFromFrontOfNew(arr) {
  var output = arr.slice(1, arr.length);
  return output;
}

//Write a function called "countCharacter".
//
//Given a string input and a character, "countCharacter" returns the number of occurences of a given character in the given string.
//
//var output = countCharacter('I am a hacker', 'a');
//console.log(output); // --> 3

function countCharacter(str, char) {
  var count = 0;
  for (var i = 0; i < str.length; i++){
    if (str[i] === char) {
      count++;
    } 
  }
  return count;
}

//Write a function called "getAllLetters".
//
//Given a word, "getAllLetters" returns an array containing every character in the word. 
//
//Notes:
//* If given an empty string, it should return an empty array.
//
//var output = getAllLetters('Radagast');
//console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']

function getAllLetters(str) {
  var output = str.split('');
  return output;
}

//Write a function called "getAllWords".
//
//Given a sentence, "getAllWords" returns an array containing every word in the sentence. 
//
//Notes:
//* If given an empty string, it should return an empty array.
//
//var output = getAllWords('Radagast the Brown');
//console.log(output); // --> ['Radagast', 'the', 'Brown']

function getAllWords(str) {
  var output = [];
  if (str.length > 0) { 
    output = str.split(' ');
  }
  return output;
}

//Write a function called "countWords".
//
//Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in th given  string. 
//
//Notes:
//* If given an empty string, it should return an empty object.
//
//var output = countWords('ask a bunch get a bunch'); 
//console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}

function countWords(str) {
  var arr = str.split(' ');
  var obj = { };
  for (var i = 0, j = arr.length; i < j; i++) {
    if (arr.length > 1) {
      obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    }
  }
  return obj;
}

//Write a function called "removeFromBack".
//
//Given an array, "removeFromBack" returns the given array with its last element removed.
//
//Notes:
//* You should be familiar with the method 'pop'.
//
//var output = removeFromBack([1, 2, 3]);
//console.log(output); // --> [1, 2]

function removeFromBack(arr) {
  arr.pop();
  return arr;
}

//Write a function called "or".
//
//Given 2 boolean expressions, "or" returns true or false, corresponding to the || operator.
//
//Notes:
//* Do not use the || operator.
//* Use ! and && operators instead.
//
//var output = or(true, false);
//console.log(output); // --> true;

function or(expression1, expression2) {
  if (!expression1 && expression2){
    return true;
  }else if (expression1 && !expression2){
    return true;
  }else if (expression1 && expression2){
    return true;
  }
  return false;
}

//Write a function called "isEitherEvenOrAreBoth7".
//
//Given two numbers, 'isEitherEvenOrAreBoth7' returns whether at least one of them is even, or, both of them are 7.
//
//var output = isEitherEvenOrAreBoth7(3, 7);
//console.log(output); // --> false
//
//var output = isEitherEvenOrAreBoth7(2, 3);
//console.log(output); // --> true

function isEitherEvenOrAreBoth7(num1, num2) {
  if(num1 % 2 === 0 || num2 % 2 === 0){
    return true;
  }else if (num1 === 7 && num2 === 7){
    return true;
  }
  return false;
}

//Write a function called "isEitherEvenAndLessThan9".
//
//Given two numbers, 'isEitherEvenAndLessThan9' returns whether at least one of them is even, and, both of them are less than 9.
//
//var output = isEitherEvenAndLessThan9(2, 4);
//console.log(output); // --> true
//
//var output = isEitherEvenAndLessThan9(72, 2);
//console.log(output); // --> false

function isEitherEvenAndLessThan9(num1, num2) {
  if ( (num1 < 9 && num2 < 9) && (num1 % 2 === 0 || num2 % 2 === 0) ){
    return true;
  }
  return false;
}

//Write a function called "extend".
//
//Given two objects, "extend" adds properties from the 2nd object to the 1st object.
//
//Notes:
//* Add any keys that are not in the 1st object.
//* If the 1st object already has a given key, ignore it (do not overwrite the property value).
//* Do not modify the 2nd object at all.
//
//var obj1 = {
//  a: 1,
//  b: 2
//};
//var obj2 = {
//  b: 4,
//  c: 3
//};
//
//extend(obj1, obj2);
//
//console.log(obj1); // --> {a: 1, b: 2, c: 3}
//console.log(obj2); // --> {b: 4, c: 3}

function extend(obj1, obj2) {
  for (var key in obj2){
    if (!obj1[key]){
      obj1[key] = obj2[key];
    }
  }
  return obj1;
}

//Write a function called "removeNumbersLargerThan".
//
//Given a number and an object, "removeNumbersLargerThan" removes any properties whose values are numbers greater than the given number.
//
//var obj = {
//  a: 8,
//  b: 2,
//  c: 'montana'
//}
//removeNumbersLargerThan(5, obj);
//console.log(obj); // --> { b: 2, c: 'montana' }

function removeNumbersLargerThan(num, obj) {
  for (var key in obj){
    if (obj[key] > num){
      delete obj[key]
    }
  }
  return obj;
}

//Write a function called "removeNumbersLessThan".
//
//Given a number and an object, "removeNumbersLessThan" removes any properties whose values are numbers less than the given number.
//
//var obj = {
//  a: 8,
//  b: 2,
//  c: 'montana'
//}
//removeNumbersLessThan(5, obj);
//console.log(obj); // --> { a: 8, c: 'montana' }

function removeNumbersLessThan(num, obj) {
  for (var key in obj){
    if (obj[key] < num){
      delete obj[key];
    }
  }
  return obj;
}

//Write a function called "removeStringValuesLongerThan".
//
//Given an number and an object, "removeStringValuesLongerThan" removes any properties on the given object whose values are strings longer than the given number.
//
//var obj = {
//  name: 'Montana',
//  age: 20,
//  location: 'Texas'
//};
//removeStringValuesLongerThan(6, obj);
//console.log(obj); // { age: 20, location: 'Texas' }

function removeStringValuesLongerThan(num, obj) {
  for (var key in obj){
    if (obj[key].length > num){
      delete obj[key];
    }
  }
  return obj;
}

//Write a function called "removeEvenValues".
//
//Given any object, "removeEvenValues" removes any properties whose values are even numbers.
//
//Do this in place and return the original object, do not construct a cloned object that omits the properties.
//
//var obj = {
//  a: 2,
//  b: 3,
//  c: 4
//};
//removeEvenValues(obj);
//console.log(obj); // --> { b: 3 }

function removeEvenValues(obj) {
  for (var key in obj){
    if (obj[key] % 2 === 0){
      delete obj[key];
    }
  }
  return obj;
}

//Write a function called "countNumberOfKeys".
//
//Given an object, "countNumberOfKeys" returns how many properties the given object has.
//
//var obj = {
//  a: 1,
//  b: 2,
//  c: 3
//};
//var output = countNumberOfKeys(obj);
//console.log(output); // --> 3

function countNumberOfKeys(obj) {
  return Object.keys(obj).length
}

//Write a function called "removeOddValues".
//
//Given an object, "removeOddValues" removes any properties whose valuse are odd numbers.
//
//var obj = {
//  a: 2,
//  b: 3,
//  c: 4
//};
//removeOddValues(obj);
//console.log(obj); // --> { a: 2, c: 4 }

function removeOddValues(obj) {
  for (var key in obj){
    if (obj[key] % 2 !== 0){
      delete obj[key];
    }
  }
  return obj;
}

//Write a function called "removeArrayValues".
//
//Given an object, "removeArrayValues" removes any properties whose values are arrays.
//
//var obj = {
//  a: [1, 3, 4],
//  b: 2,
//  c: ['hi', 'there']
//}
//removeArrayValues(obj);
//console.log(obj); // --> { b: 2 }

function removeArrayValues(obj) {
  for (var key in obj){
    if (Array.isArray(obj[key])){
      delete obj[key];
    }
  }
  return obj;
}

//Write a function called "removeNumberValues".
//
//Given an object, "removeNumberValues" removes any properties whose valuse are numbers.
//
//var obj = {
//  a: 2,
//  b: 'remaining',
//  c: 4
//};
//removeNumberValues(obj);
//console.log(obj); // --> { b: 'remaining' }

function removeNumberValues(obj) {
  for (var key in obj){
    if (typeof obj[key] === 'number'){
      delete obj[key];
    }
  }
  return obj;
}

//Write a function called "removeStringValues".
//
//Given an object, "removeStringValues" removes any properties on the given object whose values are strings.
//
//var obj = {
//  name: 'Sam',
//  age: 20
//}
//removeStringValues(obj);
//console.log(obj); // { age: 20 }

function removeStringValues(obj) {
  for (var key in obj){
    if (typeof obj[key] === 'string'){
      delete obj[key];
    }
  }
  return obj;
}

//Write a function called "convertDoubleSpaceToSingle".
//
//Given a string, "convertDoubleSpaceToSingle" returns the passed in string, with all the double spaces converted to single spaces.
//
//var output = convertDoubleSpaceToSingle("string  with  double  spaces");
//console.log(output); // --> "string with double spaces"

function convertDoubleSpaceToSingle(str) {
  var strArr = str.split("  ");
  var output = strArr.join(" ");
  return output;
}

//Write a function called "joinThreeArrays".
//
//Given three arrays, "joinThreeArrays" returns an array with the elements of "arr1" in order followed by the elements in "arr2" in order followed by the elements of "arr3" in order.
//
//var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
//console.log(output); // --> [1, 2, 3, 4, 5, 6]

function joinThreeArrays(arr1, arr2, arr3) {
  var numbers = arr1.concat(arr2);
  var outputnumbers = numbers.concat(arr3);
  return(outputnumbers);
}

var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output);

//Write a function called "addToFrontOfNew".
//
//Given an array and an element, "addToFrontOfNew" returns a new array containing all the elements of the given array, with the given element added to the front.
//
//Important: It should be a NEW array instance, not the original array instance.
//
//var input = [1, 2];
//var output = addToFrontOfNew(input, 3);
//console.log(output); // --> [3, 1, 2];
//console.log(input); --> [1, 2]

function addToFrontOfNew(arr, element) {
  var numbers = [];
  numbers.push(element);
  var output = numbers.concat(arr);
  return output;
}

//Write a function called "addToBackNew".
//
//Given an array and an element, "addToBackNew" returns a clone of the given array, with the given element added to the end.
//
//Important: It should be a NEW array instance, not the original array instance.
//
//var input = [1, 2];
//var output = addToBackOfNew(input, 3);
//console.log(input); // --> [1, 2]
//console.log(output); // --> [1, 2, 3]

function addToBackOfNew(arr, element) {
  var output = arr.concat(element);
  return output;
}

//Write a function called "getAllElementsButNth".
//
//Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.
//
//var output = getAllElementsButNth(['a', 'b', 'c'], 1);
//console.log(output); // --> ['a', 'c']

function getAllElementsButNth(array, n) {
  var output = [];
  for (var i = 0; i < array.length; i++){
    if (i !== n){
      output.push(array[i]);
    }
  }
  return output;
}

//Write a function called "areValidCredentials".
//
//Given a name and a password, "areValidCredentials", returns true if the name is longer than 3 characters, AND, the password is at least 8 characters long. Otherwise it returns false.
//
//var output = areValidCredentials('Ritu', 'mylongpassword')
//console.log(output); // --> true

function areValidCredentials(name, password) {
  return ( name.length > 3 && password.length > 8 );
}

//Write a function called "getIndexOf".
//
//Given a character and a string, "getIndexOf" returns the first position of the given character in the given string.
//
//Notes:
//* Strings are zero indexed, meaning the first character in a string is at position 0.
//* When a string contains more than one occurrence of a character, it should return the index of its first occurrence.
//* If the character does not exist in the string, it should return -1.
//* Do not use the native indexOf function in your implementation.
//
//var output = getIndexOf('a', 'I am a hacker');
//console.log(output); // --> 2

function getIndexOf(char, str) {
  var output = -1;
  for (var i = 0; i < str.length; i++){
    if (str[i] === char){
      output = i;
      return output;
    }
  }
  return output;
}

//Write a function called "findMinLengthOfThreeWords".
//
//Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.
//
//var output = findMinLengthOfThreeWords('a', 'be', 'see');
//console.log(output); // --> 1

function findMinLengthOfThreeWords(word1, word2, word3) {
  var lengths = [word1.length, word2.length, word3.length];
  lengths.sort();
  var output = lengths[0];
  return output;
}

//Write a function called "findMaxLengthOfThreeWords".
//
//Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest word.
//
//var output = findMaxLengthOfThreeWords('a', 'be', 'see');
//console.log(output); // --> 3

function findMaxLengthOfThreeWords(word1, word2, word3) {
  var lengths = [word1.length, word2.length, word3.length];
  lengths.sort().reverse();
  return lengths[0];
}

//Write a function called "getElementsThatEqual10AtProperty".
//
//Given an object and a key, "getElementsThatEqual10AtProperty" returns an array containing all the elements of the array located at the given key that are equal to ten.
//
//Notes:
//* If the array is empty, it should return an empty array.
//* If the array contains no elements equal to 10, it should return an empty array.
//* If the property at the given key is not an array, it should return an empty array.
//* If there is no property at the key, it should return an empty array.
//
//var obj = {
//  key: [1000, 10, 50, 10]
//};
//var output = getElementsThatEqual10AtProperty(obj, 'key');
//console.log(output); // --> [10, 10]

function getElementsThatEqual10AtProperty(obj, key) {
  var output = [];
  for (var k in obj){
    if (k === key){
      for (var i = 0; i < obj[k].length; i++){
        if (obj[k][i] === 10){
          output.push(obj[k][i]);
        }
      }
    }
  }
  return output
}

//Write a function called "select".
//
//Given an array and an object, "select" returns a new object whose properties are those in the given object AND whose keys are present in the given array. 
//
//Notes:
//* If keys are present in the given array, but are not in the given object, it should ignore them. 
//* It does not modify the passed in object.
//
//
//var arr = ['a', 'c', 'e'];
//var obj = {
//  a: 1,
//  b: 2,
//  c: 3,
//  d: 4
//};
//var output = select(arr, obj);
//console.log(output); // --> { a: 1, c: 3 }

function select(arr, obj) {
  var output = {};
  for (var i = 0; i < arr.length; i++){
    for (var key in obj){
      if (arr[i] === key){
        output[arr[i]] = obj[key];
      }
    }
  }
  return output;
}

//Write a function called "getElementsLessThan100AtProperty".
//
//Given an object and a key, "getElementsLessThan100AtProperty" returns an array containing all the elements of the array located at the given key that are less than 100.
//
//Notes:
//* If the array is empty, it should return an empty array.
//* If the array contains no elements less than 100, it should return an empty array.
//* If the property at the given key is not an array, it should return an empty array.
//* If there is no property at the key, it should return an empty array.
//
//var obj = {
//  key: [1000, 20, 50, 500]
//};
//var output = getElementsLessThan100AtProperty(obj, 'key');
//console.log(output); // --> [20, 50]

function getElementsLessThan100AtProperty(obj, key) {
  var output = [];
  for (var k in obj){
    if (k === key){
      for (var i = 0; i < obj[key].length; i++){
        if (obj[k][i] < 100){
          output.push(obj[k][i])
        }
      }
    }
  }
  return output;
}

//Write a function called "countAllCharacters".
//
//Given a string, "countAllCharacters" returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.
//
//Notes:
//* If given an empty string, countAllCharacters should return an empty object.
//
//var output = countAllCharacters('banana');
//console.log(output); // --> {b: 1, a: 3, n: 2}

function countAllCharacters(str) {
  var object = {};
  for (var i = 0; i < str.length; i++){
    object[str[i]] = str.split(str[i]).length - 1;   
  }
  return object;
}

//Write a function called "getElementsGreaterThan10AtProperty".
//
//Given an object and a key, "getElementsGreaterThan10AtProperty" returns an array containing the elements within the array, located at the given key, that are greater than 10.
//
//Notes:
//* If the array is empty, it should return an empty array.
//* If the array contains no elements greater than 10, it should return an empty array.
//* If the property at the given key is not an array, it should return an empty array.
//* If there is no property at the key, it should return an empty array. 
//
//var obj = {
//  key: [1, 20, 30]
//};
//var output = getElementsGreaterThan10AtProperty(obj, 'key');
//console.log(output); // --> [20, 30]

function getElementsGreaterThan10AtProperty(obj, key) {
  var numbers = [];
  for (var k in obj){
    if (k === key){
      for (var i = 0; i < obj[k].length; i++){
        if (obj[k][i] > 10){
          numbers.push(obj[k][i]);
        } 
    }
   }
  }
  return numbers;
}

//Given an array of elements, and a "discarder" parameter, "removeElement" returns an array containing the items in the given array that do not match the "discarder" parameter.
//
//Notes:
//* If all the elements match, it should return an empty array.
//* If an empty array is passed in, it should return an empty array.
//
//var output = removeElement([1, 2, 3, 2, 1], 2);
//console.log(output); // --> [1, 3, 1]

function removeElement(array, discarder) {
  var outputs = [];
  for (var i = 0; i < array.length; i++){
    if (array[i] !== discarder){
      outputs.push(array[i]);
    }
  }
  return outputs;
}

//Write a function called "getFirstElementOfProperty".
//
//Given an object and a key, "getFirstElementOfProperty" returns the first element of the array located at the given key. 
//
//Notes:
//* If the array is empty, it should return undefined.
//* If the property at the given key is not an array, it should return undefined.
//* If there is no property at the key, it should return undefined.
//
//
//var obj = {
//  key: [1, 2, 4]
//};
//var output = getFirstElementOfProperty(obj, 'key');
//console.log(output); // --> 1

function getFirstElementOfProperty(obj, key) {
  
  for (var k in obj){
    if (k === key && Array.isArray(obj[k])){
      var output = obj[k][0];
      return output;
      }
    }
}
//
//Write a function called "getNthElementOfProperty".
//
//Given an object and a key, "getNthElementOfProperty" returns the nth element of an array located at the given key.
//
//Notes:
//* If the array is empty, it should return undefined.
//* If n is out of range, it should return undefined.
//* If the property at the given key is not an array, it should return undefined.
//* If there is no property at the key, it should return undefined.
//
//var obj = {
//  key: [1, 2, 6]
//};
//var output = getNthElementOfProperty(obj, 'key', 1);
//console.log(output); // --> 2

function getNthElementOfProperty(obj, key, n) {
  for (var k in obj){
    if (k === key){
      return obj[k][n];
    }
  }
}

//Write a function called "getLastElementOfProperty".
//
//Given an object and a key, "getLastElementOfProperty" returns the last element of an array located at the given key.
//
//Notes:
//* If the array is empty, it should return undefined.
//* if the property at the given key is not an array, it should return undefined.
//* If there is no property at the key, it should return undefined.
//
//var obj = {
//  key: [1, 2, 5]
//};
//var output = getLastElementOfProperty(obj, 'key');
//console.log(output); // --> 5

function getLastElementOfProperty(obj, key) {
  for (var k in obj){
    if (k === key && Array.isArray(obj[k])){
      var output = obj[k].reverse();
      return output[0];
    }
  }
}

//Write a function called "keep".
//
//Given an array and a keeper element, "keep" returns an array containing the items that match the given keeper element.
//
//Notes:
//* If no elements match, "keep" should return an empty array.
//
//var output = keep([1, 2, 3, 2, 1], 2) 
//console.log(output); --> [2, 2]

function keep(array, keeper) {
  var outputs = [];
  for (var i = 0; i < array.length; i++){
    if (array[i] === keeper){
      outputs.push(array[i]);
    }
  }
  return outputs;
}

//Write a function called "getOddLengthWordsAtProperty".
//
//Given an object and a key, "getOddLengthWordsAtProperty" returns an array containing all the odd length word elements of the array located at the given key. 
//
//Notes:
//* If the array is empty, it should return an empty array.
//* If it contains no odd length elements, it should return an empty array.
//* If the property at the given key is not an array, it should return an empty array.
//* If there is no property at the given key, it should return an empty array.
//
//var obj = {
//  key: ['It', 'has', 'some', 'words']
//};
//var output = getOddLengthWordsAtProperty(obj, 'key');
//console.log(output); // --> ['has', 'words']

function getOddLengthWordsAtProperty(obj, key) {
  var outputs = [];
  for (var k in obj){
    if (key === k && Array.isArray(obj[k])){
      for (var i = 0; i < obj[k].length; i++){
        if (obj[k][i].length % 2 !== 0){
          outputs.push(obj[k][i]);
        }
      }
    }
  }
  return outputs;
}

//Write a function called "computeAverageOfNumbers".
//
//Given an array of numbers, "computeAverageOfNumbers" returns their average. 
//
//Notes:
//* If given an empty array, it should return 0.
//
//var input = [1,2,3,4,5];
//var output = computeAverageOfNumbers(input);
//console.log(output); // --> 3

function computeAverageOfNumbers(nums) {
  var output = 0;
  if (nums.length > 0){
    for (var i = 0; i < nums.length; i++){
      output += nums[i];
    }
    return output / nums.length; 
  }
  return output;
}

//Write a function called "getAverageOfElementsAtProperty".
//
//Given an object and a key, "getAverageOfElementsAtProperty" returns the average of all the elements in the array located at the given key. 
//
//Notes:
//* If the array at the given key is empty, it should return 0.
//* If the property at the given key is not an array, it should return 0.
//* If there is no property at the given key, it should return 0.
//
//
//var obj = {
//  key: [1, 2, 3]
//};
//var output = getAverageOfElementsAtProperty(obj, 'key');
//console.log(output); // --> 2

Write a function called "getAverageOfElementsAtProperty".

Given an object and a key, "getAverageOfElementsAtProperty" returns the average of all the elements in the array located at the given key. 

Notes:
* If the array at the given key is empty, it should return 0.
* If the property at the given key is not an array, it should return 0.
* If there is no property at the given key, it should return 0.


var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2

//Write a function called "getEvenLengthWordsAtProperty".
//
//Given an object and a key, "getEvenLengthWordsAtProperty" returns an array containing all the even length word elements of the array located at the given key.
//
//Notes:
//* If the array is empty, it should return an empty array.
//* If it contains no even length elements, it should return an empty array.
//* If the property at the given key is not an array, it should return an empty array.
//* If there is no property at the key, it should return an empty array.
//
//var obj = {
//  key: ['a', 'long', 'game']
//};
//var output = getEvenLengthWordsAtProperty(obj, 'key');
//console.log(output); // --> ['long', 'game']

function getEvenLengthWordsAtProperty(obj, key) {
  var outputs = [];
  for (var k in obj){
    if (k === key){
      for (var i = 0; i < obj[k].length; i++){
        if (obj[k][i].length % 2 === 0){
          outputs.push(obj[k][i]);
        }
      }  
    }
  }
  return outputs;
}

//Write a function called "filterOddLengthWords".
//
//Given an array of string, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers.
//
//var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
//console.log(output); // --> ['there', "now']

function filterOddLengthWords(words) {
  var outputs = [];
  for (var i = 0; i < words.length; i++){
    if (words[i].length % 2 !== 0){
      outputs.push(words[i]); 
    }
  }
  return outputs;
}

//Write a function called "getSquaredElementsAtProperty".
//
//Given an object and a key, "getSquaredElementsAtProperty" returns an array containing all the squared elements of the array located at the given key. 
//
//Notes:
//* If the array is empty, it should return an empty array.
//* If the property at the given key is not an array, it should return an empty array.
//* If there is no property at the key, it should return an empty array.
//
//var obj = {
//  key: [2, 1, 5]
//};
//var output = getSquaredElementsAtProperty(obj, 'key');
//console.log(output); // --> [4, 1, 25]

function getSquaredElementsAtProperty(obj, key) {
  var outputs = [];
  for (var k in obj){
    if (k === key && Array.isArray(obj[k])){
      for (var i = 0; i < obj[k].length; i++){
        outputs.push(obj[k][i]*obj[k][i]);
      }
    }
  }
  return outputs;
}

//Given an object and a key, "getOddElementsAtProperty" returns an array containing all the odd elements of the array located at the given key. 
//
//Notes:
//* If the array is empty, it should return an empty array.
//* If it contains no odd elements, it should return an empty array.
//* If the property at the given key is not an array, it should return an empty array.
//* If there is no property at the key, it should return an empty array.
//
//var obj = {
//  key: [1, 2, 3, 4, 5]
//};
//var output = getOddElementsAtProperty(obj, 'key');
//console.log(output); // --> [1, 3, 5]

function getOddElementsAtProperty(obj, key) {
  var outputs = [];
  for (var k in obj){
    if (k === key && Array.isArray(obj[k])){
      for (var i = 0; i < obj[k].length; i++){
        if (obj[k][i] % 2 !== 0){
          outputs.push(obj[k][i]);
        }
      }  
    }   
  }
  return outputs;
}

//Given an object and a key, "getEvenElementsAtProperty" returns an array containing all the even elements of the array located at the given key.
//
//Notes:
//* If the array is empty, it should return an empty array.
//* If the array contains no even elements, it should return an empty array.
//* If the property at the given key is not an array, it should return an empty array.
//* If there is no property at the given key, it should return an empty array.
//
//var obj = {
//  key: [1000, 11, 50, 17]
//};
//var output = getEvenElementsAtProperty(obj, 'key');
//console.log(output); // --> [1000, 50]

function getEvenElementsAtProperty(obj, key) {
  var outputs = [];
  for (var k in obj){
    if (k === key && Array.isArray(obj[k])){
      for (var i = 0; i < obj[k].length; i++){
        if (obj[k][i] % 2 === 0){
          outputs.push(obj[k][i]);
        }
      }
    }
  }
  return outputs;
}

//Write a function called "filterEvenLengthWords".
//
//Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.
//
//var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
//console.log(output); // --> ['word', 'word']

function filterEvenLengthWords(words) {
  var outputs = [];
  for (var i = 0; i < words.length; i++){
    if (words[i].length % 2 === 0){
      outputs.push(words[i]);
    }
  }
  return outputs;
}

//Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array.
//
//Notes:
//* It should return 0 if the array is empty.
//
//var output = getLengthOfLongestElement(['one', 'two', 'three']);
//console.log(output); // --> 5

function getLengthOfLongestElement(arr) {
  var largest = 0;
  for (var i = 0; i < arr.length; i++){
    if (arr[i].length > largest){
      largest = arr[i].length;
    }
  }
  return largest;
}

//Write a function called "getSmallestElementAtProperty".
//
//Given an object and a key, "getSmallestElementAtProperty" returns the smallest element in the array located at the given key. 
//
//Notes:
//* If the array is empty, it should return undefined.
//* If the property at the given key is not an array, it should return undefined. 
//* If there is no property at the key, it should return undefined.
//
//var obj = {
//  key: [2, 1, 5]
//};
//var output = getSmallestElementAtProperty(obj, 'key');
//console.log(output); // --> 1

function getSmallestElementAtProperty(obj, key) {
  
  for (var k in obj){
    if (k === key && Array.isArray(obj[k])){
      var smallest = obj[k][0];
      for (var i = 0; i < obj[k].length; i++){
        if (obj[k][i] < smallest){
          smallest = obj[k][i];
        }
      }
    }
  }
  return smallest;
}

//Write a function called "getLargestElementAtProperty".
//
//Given an object and a key, "getLargestElementAtProperty" returns the largest element in the array located at the given key.
//
//Notes:
//* If the array is empty, it should return undefined.
//* If the property at the given key is not an array, it should return undefined.
//* If there is no property at the key, it should return undefined.
//
//var obj = {
//  key: [1, 2, 4]
//};
//var output = getLargestElementAtProperty(obj, 'key');
//console.log(output); // --> 4

function getLargestElementAtProperty(obj, key) {
  for (var k in obj){
    if (k === key && Array.isArray(obj[k])){
      var largest = obj[k][0];
      for (var i = 0; i < obj[k].length; i++){
        if (obj[k][i] > largest){
          largest = obj[k][i];
        }
      }  
    }
  }
  return largest;
}

//Write a function called "getAllButLastElementOfProperty".
//
//Given an object and a key, "getAllButLastElementOfProperty" returns an array containing all but the last element of the array located at the given key.
//
//Notes:
//* If the array is empty, it should return an empty array.
//* If the property at the given key is not an array, it return an empty array.
//* If there is no property at the key, it should return an empty array. 
//
//var obj = {
//  key: [1, 2, 3]
//};
//var output = getAllButLastElementOfProperty(obj, 'key');
//console.log(output); // --> [1,2]

function getAllButLastElementOfProperty(obj, key) {
  var outputs = [];
  for (var k in obj){
    if (k === key && Array.isArray(obj[k])){
      for (var i = 0; i < obj[k].length - 1; i++){
        outputs.push(obj[k][i]);
      }
    }
  }
  return outputs;
}

//Write a function called "getElementOfArrayProperty".
//
//Given an object, a key, and a numerical index, "getElementOfArrayProperty" returns the value of the element at the given index of the array located within the given object at the given key.
//
//Notes:
//* If the array is empty, it should return undefined.
//* If the given index is out of range of the array located at the given key, it should return undefined.
//* If the property at the given key is not an array, it should return undefined.
//* If there is no property at the key, it should return undefined. 
//
//var obj = {
// key: ['Jamil', 'Albrey']
//};
//var output = getElementOfArrayProperty(obj, 'key', 0); 
//console.log(output); // --> 'Jamil'

function getElementOfArrayProperty(obj, key, index) {
  for (var k in obj){
    if (k === key && Array.isArray(obj[k])){
      var output = obj[k][index];
    }
  }
  return output;
}

//Write a function called "squareElements".
//
//Given a array of numbers, "squareElements" should return a new array where each element is the square of the element of the given array.
//
//var output = squareElements([1, 2, 3]);
//console.log(output); // --> [1, 4, 9]

function squareElements(arr) {
  var outputs = [];
  for (var i = 0; i < arr.length; i++){
    outputs.push(arr[i] * arr[i]);
  }
  return outputs;
}

//Write a function called "filterOddElements".
//
//Given an array of numbers, "filterOddElements" returns an array containing only the odd numbers of the given array.
//
//var output = filterOddElements([1, 2, 3, 4, 5]);
//console.log(output); // --> [1, 3, 5]

function filterOddElements(arr) {
  var outputs = [];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] % 2 !== 0){
      outputs.push(arr[i]);
    }
  }
  return outputs;
}

//Write a function called "computeProductOfAllElements".
//
//Given an array of numbers, "computeProductOfAllElements" returns the products of all the elements in the given array.
//
//Notes:
//* If given array is empty, it should return 0.
//
//var output = computeProductOfAllElements([2, 5, 6]);
//console.log(output); // --> 60

function computeProductOfAllElements(arr) {
  var output = 0;
  if (arr.length > 0){
    output = 1;
    for (var i = 0; i < arr.length; i++){
      output *= arr[i];
    }
  }
  return output;
}

//Write a function called "filterEvenElements".
//
//Given an array of numbers, "filterEvenElements" returns an array containing only the even numbers of the given array.
//
//var output = filterEvenElements([2, 3, 4, 5, 6]);
//console.log(output); // --> [2, 4, 6]

function filterEvenElements(arr) {
  var evens = [];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
      evens.push(arr[i]);
    }
  }
  return evens;
}

//Write a function called "getLengthOfShortestElement".
//
//Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.
//
//Notes:
//* It should return 0 if the array is empty.
//
//var output = getLengthOfShortestElement(['one', 'two', 'three']);
//console.log(output); // --> 3

function getLengthOfShortestElement(arr) {
  var length = 0;
  if (arr.length > 0){
    length = arr[0].length;
    for (var i = 0; i < arr.length; i++){
      if (arr[i].length < length){
        length = arr[i].length;
      }
    }
  }
  return length;
}

//Write a function called "getLongestElement".
//
//Given an array, "getLongestElement" returns the longest string in the given array.
//
//Notes:
//* If there are ties, it returns the first element to appear.
//* If the array is empty, it should return an empty string.
//
//var output = getLongestElement(['one', 'two', 'three']);
//console.log(output); // --> 'three'

function getLongestElement(arr) {
  var longest = '';
  if (arr.length > 0){
    longest = arr[0];
    for (var i = 0; i < arr.length; i++){
      if (arr[i].length > longest.length){
        longest = arr[i];
      }
    }
  }
  return longest;
}

//Write a function called "findSmallestElement".
//
//Given an array of numbers, "findSmallestElement" returns the smallest number within the given array.
//
//Notes:
//* If the given array is empty, it should return 0.
//
//var output = findSmallestElement([4, 1, 9, 10]);
//console.log(output); // --> 1

function findSmallestElement(arr) {
  var smallest = 0;
  if (arr.length > 0){
    smallest = arr[0];
    for (var i = 0; i < arr.length; i++){
      if (arr[i] < smallest){
        smallest = arr[i];
      }
    }
  }
  return smallest;
}

//Write a function called "findShortestElement".
//
//Given an array, "findShortestElement" returns the shortest string within the given array.
//
//Notes:
//* If there are ties, it should return the first element to appear.
//* If the given array is empty, it should return an empty string.
//
//var output = findShortestElement(['a', 'two', 'three']);
//console.log(output); // --> 'a'

function findShortestElement(arr) {
  var shortest = '';
  if (arr.length > 0){
    shortest = arr[0];
    for (var i = 0; i < arr.length; i++){
      if (arr[i].length < shortest.length){
        shortest = arr[i]; 
      }
    }
  }
  return shortest;
}

//Write a function called "getLargestElement".
//
//Given an array, "getLargestElement" returns the largest number in the given array.
//
//Notes:
//* It should return 0 if the array is empty.
//
//var output = getLargestElement([5, 2, 8, 3]);
//console.log(output); // --> 8;

function getLargestElement(arr) {
  var largest = 0;
  if (arr.length > 0){
    largest = arr[0];
    for (var i = 0; i < arr.length; i++){
      if (arr[i] > largest){
        largest = arr[i];
      }
    }
  }
  return largest;
}

//Write a function called "computeSumOfAllElements".
//
//Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array.
//
//var output = computeSumOfAllElements([1, 2, 3])
//console.log(output); // --> 6

function computeSumOfAllElements(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++){
    sum += arr[i]; 
  }
  return sum;
}

//Write a function called "calculateBillTotal".
//
//Given the pre tax and pre tip amount of a meal, "calculateBillTotal" returns the total amount due after tax and tip.
//
//Notes:
//* Assume that sales tax is 9.5% and tip is 15%.
//* Do NOT tip on the sales tax, only on the pre tip amount.
//
//var output = calculateBillTotal(20);
//console.log(output); // --> 24.9

function calculateBillTotal(preTaxAndTipAmount) {
  var total = (preTaxAndTipAmount * 1.095) + (preTaxAndTipAmount * 0.15);
  return total;
}

//Write a function called "getStringLength".
//
//Given a string, "getStringLength" returns the length of the given string.
//
//Notes:
//* Do NOT use any native 'length' methods.
//* You might consider using 'substring' or 'slice' as alternatives.
//
//var output = getStringLength('hello');
//console.log(output); // --> 5

function getStringLength(string) {
  var result = 0;
  while (string[result] !== undefined){
    result++;
  }
  return result;
}

//Write a function called "joinArrayOfArrays".
//
//Given an array of arrays, "joinArrayOfArrays" returns a single array containing the elements of the nested arrays.
//
//var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
//console.log(output); // --> [1, 4, true, false, 'x', 'y']

function joinArrayOfArrays(arr) {
  var joinedArray = [];
  for (var i = 0; i < arr.length; i++){
    joinedArray = joinedArray.concat(arr[i]);
  }
  return joinedArray;
}

//Write a function called "getProductOfAllElementsAtProperty".
//
//Given an object and a key, "getProductOfAllElementsAtProperty" returns the product of all the elements in the array located at the given key. 

function getProductOfAllElementsAtProperty(obj, key) {
  var product = 0;
  for (var k in obj){
    if (obj[k].length > 0 && k === key && Array.isArray(obj[k])){
      product = obj[k][0];
      for (var i = 0; i < obj[k].length; i++){
        product *= obj[k][i];
      }
    }
  }
  return product;
}

//Write a function called "sumDigits".
//
//Given a number, "sumDigits" returns the sum of all its digits.
//
//var output = sumDigits(1148);
//console.log(output); // --> 14
//
//If the number is negative, the first digit should count as negative.
//
//var output = sumDigits(-316);
//console.log(output); // --> 4

Write a function called "sumDigits".

Given a number, "sumDigits" returns the sum of all its digits.

var output = sumDigits(1148);
console.log(output); // --> 14

If the number is negative, the first digit should count as negative.

var output = sumDigits(-316);
console.log(output); // --> 4

//Write a function called "getSumOfAllElementsAtProperty".
//
//Given an object and a key, "getSumOfAllElementsAtProperty" returns the sum of all the elements in the array located at the given key. 
//
//Notes:
//* If the array is empty, it should return 0.
//* If the property at the given key is not an array, it should return 0.
//* If there is no property at the key, it should return 0.
//
//var obj = {
//  key: [4, 1, 8]
//};
//var output = getSumOfAllElementsAtProperty(obj, 'key');
//console.log(output); // --> 13

function getSumOfAllElementsAtProperty(obj, key) {
  var sum = 0;
  for (var k in obj){
    if (k === key && Array.isArray(obj[k])){
      for (var i = 0; i < obj[k].length; i++){
        sum += obj[k][i];
      }
    }
  }
  return sum;
}

//Write a function called "findShortestWordAmongMixedElements".
//
//Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.
//
//Notes:
//* If there are ties, it should return the first element to appear in the given array.
//* Expect the given array to have values other than strings.
//* If the given array is empty, it should return an empty string.
//* If the given array contains no strings, it should return an empty string.
//
//var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
//console.log(output); // --> 'two'

function findShortestWordAmongMixedElements(arr) {
  var shortestWord = '';
  var strArr = [];
  for (var i = 0; i < arr.length; i++){
    if (typeof arr[i] === 'string'){
        strArr.push(arr[i]) ; 
      }
  }
  if (strArr.length > 0){
    shortestWord = strArr[0];
  }
  for (var j = 0; j < strArr.length; j++){
    if (strArr[j].length < shortestWord.length){
      shortestWord = strArr[j];
    }
  }
  return shortestWord;
}

//Write a function called "findSmallestNumberAmongMixedElements".
//
//Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.
//
//Notes:
//* If the given array is empty, it should return 0.
//* If the array contains no numbers, it should return 0.
//
//var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
//console.log(output); // --> 4

function findSmallestNumberAmongMixedElements(arr) {
  var numArr = [];
  var smallestNum = 0;
  for (var i = 0; i < arr.length; i++){
    if (typeof arr[i] === 'number'){
      numArr.push(arr[i]);
    }
  }
  if (numArr.length > 0){
    smallestNum = numArr[0];
  }
  for (var j = 0; j < numArr.length; j++){
    if (numArr[j] < smallestNum){
      smallestNum = numArr[j];
    }
  }
  return smallestNum;
}

//Write a function called "getLongestWordOfMixedElements".
//
//Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.
//
//Notes:
//* If the array is empty, it should return an empty string (""). 
//* If the array contains no strings; it should return an empty string.
//
//var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
//console.log(output); // --> 'word'

function getLongestWordOfMixedElements(arr) {
  var strings = [];
  var longest = '';
  for (var i = 0; i < arr.length; i++){
    if (typeof arr[i] === 'string'){
      strings.push(arr[i]); 
    }
  }
  if (strings.length > 0){
    longest = strings[0];
  }
  for (var j = 0; j < strings.length; j++){
    if (strings[j].length > longest.length){
      longest = strings[j];
    }
  }
  return longest;
}

//Write a function called "getLargestNumberAmongMixedElements". 
//
//Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.
//
//Notes:
//* The array might contain values of a type other than numbers.
//* If the array is empty, it should return 0.
//* If the array contains no numbers, it should return 0.
//
//var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
//console.log(output); // --> 5

function getLargestNumberAmongMixedElements(arr) { 
  var largest = 0;
  var nums = [];
  for (var i = 0; i < arr.length; i++){
    if (typeof arr[i] === 'number'){
      nums.push(arr[i]);
    }
  }
  if (nums.length > 0){
    largest = nums[0];
  }
  for (var j = 0; j < nums.length; j++){
    if (nums[j] > largest){
      largest = nums[j];
    }
  }
  return largest;
}

//Write a function called "computeSummationToN".
//
//Given a number, "computeSummationToN" returns the sum of sequential numbers leading up to the given number, beginning at 0.
//
//Notes:
//* If n = 4, it should calculate the sum of 1 + 2 + 3 + 4, and return 10.
//
//var output = computeSummationToN(6);
//console.log(output); // --> 21

function computeSummationToN(n) {
  var sum = 0;
  var nums = [];
  for (var i = n; i > -1; i--){
    nums.push(n - i);
  }
  for (var j = 0; j < nums.length; j++){
    sum += nums[j];
  }
  return sum;
}

//Write a function called "convertScoreToGrade".
//
//Given a score, "convertScoreToGrade" returns a string representing the letter grade corresponding to the given score.
//
//Notes:
//* (100 - 90) --> 'A'
//* (89  - 80) --> 'B'
//* (79  - 70) --> 'C'
//* (69  - 60) --> 'D'
//* (59  -  0) --> 'F'
//* If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
//
//var output = convertScoreToGrade(91);
//console.log(output); // --> 'A'

function convertScoreToGrade(score) {
  if (score >= 90 && score <= 100){
    return 'A';
  }else if (score >= 80 && score < 90){
    return 'B';
  }else if (score >= 70 && score < 80){
    return 'C';
  }else if (score >= 60 && score < 70){
    return 'D';
  }else if (score >= 0 && score < 60){
    return 'F';
  }else {
    return 'INVALID SCORE';
  }
}