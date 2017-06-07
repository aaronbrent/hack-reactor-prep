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

//Write a function called "getElementsLessThan100AtProperty".
//
//Given an object and a key, "getElementsLessThan100AtProperty" returns an array containing all the elements of the array located at the given key that are less than 100.

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