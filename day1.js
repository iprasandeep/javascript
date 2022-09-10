// // data types and variables

// /*
// DATA TYPES:

// undefined
// null
// boolean
// string
// symbol
// number
// object

// */
// // var a;
// // var b = 2;
// // console.log(a);
// // a = 7;
// // b = a;
// // console.log(a);

// var a;
// var b;
// var c;


// // Do not change code below this line

// a = a+1;
// b = b+5;
// c = c+" String! ";
// console.log(c);

// // Js is casesensative
// // adding number

// var num = 10+10;

// console.log(num)
// // substracting number

// var difference  = 45-33;
// console.log(difference)
// // product

// var product= 8*10;
// console.log(product);

// //dividing number
// var quotient = 66/33;
// console.log(quotient);
// //Increament Number 
// var myVar = 87;

// console.log(++myVar);

// // decimal number 

// var ourDecimal = 5.7;
// var myDecimal = 0.009;
// // multiply decimal

// var product  = 2.0*0.0;
// console.log(product);

// // devide 

// var quotient  = 1.0/2.2;
// console.log(quotient);


// // remainder
// console.log(11%3);
// // only modify code below this line

// a = a*5;
// b = 3*b;
// console.log(b);

var myStr = '<a href="https://www.example.com" targe="_blank>'
console.log(myStr);


// \' single qoute'
// \" double qoute
// \\ backslash
// \n newline
// \r carriage return
// \t tab space 
// \b backspace 
// \f form feed

// concanating string

// var ourStr = "I come first. "+"I come second.";

// // Only change code below this line

// var myStr = "This is the start."+"This is new string";
// console.log(myStr);


// var firstnameone = 0;
// var firstname = "Ada";

// firstnameone - firstname.length;

// var lastname = 0;
//  lastname = "Lovelace";

// // only change code below this line

// lastname = lastname.length;
// console.log(lastname);


// bracket notation

// var firstletterOfFirstname = "";
// var firstname = "Ada";

// firstLetterOffFirstname  = firstname[0];

// // setup
// var firstLetteroflastName = "";
// var lastname = "lovelace";

// firstLetteroflastName = lastname[0];
// console.log(firstLetteroflastName)


// var myStr = "Jello World";
// myStr = "hello World!";
// console.log(myStr);


// Bracket Notations

// var firstname = "Ada";
// var thirdname = firstname[firstname.length-2];
// console.log(firstname);


// word bank

// function wordBlanks(myNoun, myAdjactive, myVerb, myAdverb)
// {
//     var result = "";
//     result+="The "+ myAdjactive+ myNoun + myVerb + " to the store " + myAdverb;
//     return result;
// }
// console.log(wordBlanks("dog", "big", "ran", "quickly"));

// store multiple value in array

// const n = null;
// console.log(n*32);


// if(Math.random()>0.5)
// {
//     const y = 5;
// }
// console.log(y);


// if(true)
// var x = 5;
// console.log(x);

// var ourArray = [8, 64, 99];
// ourArray[1] = 45;

// var myArray = [18, 64, 99];

// myArray[0] = 45;
// console.log(myArray);

// multi dimentional array

// var myArray = [[1,2,3], [4,5,6], [7,8,9], [10, 11, 12], 13, 14];

// var myData = myArray[2][1];
// console.log(myData);


// append 


// var myArray = [["John", 23], ["cat",2]];
// myArray.push(["new", 45]);
// console.log(myArray);

// pop
// var myArray = [["John", 23], ["cat",2]];

// var removefromMyarray = myArray.pop();
// console.log(myArray);


// shfit function


// var myArray = [["John", 23], ["dog", 3]];

// var removefromMyarray = myArray.shift();
// console.log(myArray);


// myArray.unshift("[Happy,4]");
// console.log(myArray);


// functions

// function ourReusableCode()
// {
//     console.log("heya, World!");

// }
// // function invoked here, or called here
// ourReusableCode();
// ourReusableCode();
// ourReusableCode();

// function reusableCode1()
// {
//     console.log("hi, World!");

// }
// reusableCode1();


// function parameter

// function ourFunctionWithArgs(a, b)
// {
//     console.log("Output: "+(a-b));

// }
// ourFunctionWithArgs(10, 5); //  output = 5


// Gobal vs Scope 

// var myGlobal = 10;
// function fun1()
// {

//     // assign 5 to oopsGlobal here
//     oopsGlobal = 5;

// } 

// function func2()
// {
//     var output = " ";
//     if(typeof myGlobal!=undefined)
//     {
//         output+="myGlobal: "+ myGlobal;
//     }
//     if(typeof oopsGlobal != "undefined")
//     {
//         output+="oopsGlobal: "+ oopsGlobal;
//     }
//     console.log(output);
// }
// func1();
// func2();


// loca Scope


// function myLocalScope()
// {
//     var myVar  = 5;
//     console.log(myVar);

// }
// myLocalScope();

// Gobal and Scope both in one


// var outerWear = "T-Shirt";
// function muoutfit()
// {
//     var outerWear = "sweater";
//     return outerWear;
// }

// console.log(muoutfit());
// console.log(outerWear);


// return value from function

// function minusSeven(num)
// {
//     return num-7;
// }

// console.log(minusSeven(10));

// function timesFive(num)
// {
//     return num*5;
// }

// console.log(timesFive(5));

// undefined value

// var num = 0;
// function addThree()
// {
//     sum = sum+3;
// }

// function addFive()
// {
//     sum+=5;
// }
// console.log(addFive())


// stand in line


// function nextInLine(arr, item)
// {
//     arr.push(item);
//     return arr.shift();
// }

// var testerArr = [1,2,3,4,5];

// console.log("Before: "+ JSON.stringify(testerArr));
// console.log(nextInLine(testerArr, 6));

// console.log("After: "+JSON.stringify(testerArr));


// boolean 

// function welcomeToBooleans()
// {
//     return true;
// }
// console.log(welcomeToBooleans());


// function ourtrueOrFalse(isItTrue)
// {
//     if(isItTrue)
//     {
//         return "Yes, ot's true";
//     }
//     return "No, it's false";
// }

// function trueOrFalse(wasThatTrue)
// {
//     if(wasThatTrue)
//     {
//         return "Yes, that was true";
//     }
//     return "No, that was false";
// }

// console.log(trueOrFalse(true));



// eqality operator


// function testEqual(val)
// {
//     if(val == 12)
//     {
//         return "Equal";
//     }
//     return "not Equal";
// }

// console.log(testEqual());

// strict equality operator

// function testString(val, val1)
// {
//     if(val1 === val)
//     {
//         return "Equal";
//     }
//     return "not Equal";
// }

// console.log(testString(10, 10));


// inequality operator !=

// function testNotEqual(val)
// {
//     if(val!=99)
//     {
//         return "not Equal";
//     }
//     return "Equal";
// }
// console.log(testNotEqual(10));

// // comparison operator with convert type

// function testStrictNotEqual(val)
// {
//     if(val!=="String")
//     {
//         return "Not Equal";
//     }
//     return "Equal";
// }

// console.log(testStrictNotEqual("String"));


// Objects 

// Object Are similar to array except index defining 


// var ouDog = {
//     "name": "Champer",
//     "legs":4,
//     "tails": 1,
//     "friends": ["everything!"];
// };


// var mDog  = {
//     "name":"Quincy",
//     "legs":2,
//     "tails":2,
//     "friends": []
// };

// accesing objects

// var hvalue = testObj.hat; // change this line
// var shiftValue = testObj.shirt; //  change this line

// console.log(hvalue);

// var entreeValue = testObj["an antree"];
// var drinkvalue = testObj['the drink']; 


 // changing object proprty

//  var myDog = {
//     "name":"Coder",
//     "legs":4,
//     "friends": ["freeCodeCamp Campers"];
//  };

//  myDog.name = "Happy Coder";

// delete properties in Objects

// delete myDog.legs
// objects store keyvalue in dictionary


// testing object property


// var myobj = 
// {
//     gift: "pony",
//     pet: "kitten",
//     bed: "sleigh"

// };

// function checkObj(checkProp)
// {
//     if(myobj.hasOwnProperty(checkProp))
//     {
//         return myobj[checkProp];
//     }
//     else return "not Found";
// }

// console.log(checkObj("gif"));

// js object use to store fexible data, string num, etc



// var myMusic = [
//     {
//         "artist": "Billy Joel",
//         "title":"Piano Man",
//         "release_year":1973,
//         "formats":[
//             "CD",
//             "8T",
//             "LP"
//         ],
//         "gold":true
//     },
//     {
//         "artist": "Beau Carnes",
//         "title": "Carhs",
//         "release_year":2023,
//         "formats": [
//             "Youtube video"
//         ]

//     }
// ];



// nested objects


// var myStorage = {
//     "car":{
//         "inside":{
//             "glove box": "maps",
//             "passenger seat":"crumbs"
//         },
//         "outside":{
//             "trunk":"jack"
//         }
//         }
// };

// var gloveBoxContents = myStorage.car.inside["glove box"];
//  console.log(gloveBoxContents);


// Array 
// Iteration 

// var myArray = [];
// var i = 0;
// while(i < 5)
// {
//     myArray.push(i);
//     i++;
// }

// console.log(myArray);


// For Loop


// var ourArray = [];

// for(var i = 0; i<5; i++)
// {
//     ourArray.push(i);
// }

// var myArray = [];
// for(var i = 1; i<6; i++)
// {
//     myArray.push(i);
// }
// console.log(myArray);

// od number 

// var ourArray = [];
// for(var i = 10; i>0; i-=5)
// {
//     ourArray.push(i);
// }
// console.log(ourArray);



// var ourArray = [9, 10, 11, 12];

// var ourTotal = 0;

// for(var i = 0; i<ourArray.length; i++)
// {
//     ourTotal+=ourArray[i];
// }

// console.log(ourTotal);
// var myArr = [2,3,4,5,5,6];
// var total = 0;
// for(var i = 0; i<myArr.length; i++)
// {
//     total+=myArr[i];
// }
// console.log(total);


// function multiPlayAll(arr)
// {
//     var product  = 1;
//     for(var i = 0; i<arr.length; i++)
//     {
//         for(var j = 0; j<arr[i].length; j++)
//         {
//             product*= arr[i][j];
//         }
        
//     }
//     return product;

   
   
// }


// var product = multiPlayAll([[1,2], [3,4], [5,6, 7]]);
// console.log(product);



// do while loop

// it run atleast one time and then check the condtions

// var myArray = [];
// var i = 10;

// // Only change code bellow this line.


// do{
//     myArray.push(i);
//     i++;
// }
// while(i<5);
// console.log(i, myArray);


// generate randomFraction()


// function randomFunction()
// {
//     return Math.floor(Math.random()*10);
// }

// console.log(randomFunction());


// random range


// function ourRandom(ourMin, ourMax)
// {
//     return Math.floor(Math.random()*(ourMax-ourMin+1))+ourMin;
// }

// console.log(ourRandom(1,9));


// int ro string


// function convertToInteger(int)
// {
//     return parseInt(int);
// }
//  var converted = convertToInteger(56);
// console.log(converted);


// function convertToInteger(str)
// {
//     return parseInt(str, 2)
    
// }

// console.log(convertToInteger("110011"));


// turnary operator

// function checkEqual(a, b)
// {

//     return a === b?true:false;
//     // if(a == b)
//     // {
//     //     return true;
//     // }
//     // else {
//     //     return false;
//     // }
// }


// console.log(checkEqual(1,2));

// multi condition ternary operator


// function checkSign(num)
// {
//     return num>0?"positive":num<0 ? "negative":"zero";
// }
// console.log(checkSign(0));


// var, let, const


// var catName ="Quincy";
// var qoute;

// var catName = "Beau";

// function catTalk()
// {
//     "use strict";
//     catName = "Oliver";
//     qoute = "catName"+"says Meow!";
// }

// console.log(catTalk());


// function printManyTimes(str)
// {
//     "use strict";
//     const sentence = str + "is cool!";
//     const SENTENCE = str+"is amazing!";
//     for(var i = 0; i<str.length; i+=2)
//     {
//         console.log(SENTENCE);
//     }
// }

// printManyTimes("freeCodeCamp");


// mutate array we can mutae array using const type asigned array

// const s = [5,7,2];

// function editInPlace()
// {
//     "use strict";
//     // s = [2,5,7];
//     s[0] = 2;
//     s[1] = 5;
//     s[2] = 7;
// }
// editInPlace();
// console.log(s);

// prevent object mutate

// function freezeObj()
// {
//     const MATH_CONSTANTS = {
//         PI: 3.14
//     };

//     // Object.freeze(MATH_CONSTANTS);
//     try{
//         MATH_CONSTANTS.PI = 99;
//     }
//     catch(ex)
//     {
//         console.log(ex);
//     }
//     return MATH_CONSTANTS.PI;
// }
// const PI = freezeObj();


// Arrow Function

// var magic = () => new Date();

// console.log(magic);


// argumennts in arrow function

// var myConcat = (arr1, arr2)=>arr1.concat(arr2);

// console.log(myConcat([1,2], [3,4, 5]));

// Higher Order function


// const realNumberArray = [4,5,6, -9,0, 3,14, 42, 9.3, -2];
// const squareList = (arr)=>
// {
//     const squaredIntegers  = arr.filter(num=>Number.isInteger(num) && num>0).map(x=>x*x);
//     return squaredIntegers;
// }

// const squareIntergers = squareList(realNumberArray);
// console.log(squareIntergers);


// const increment = (function(){
//     return function increment(number, value = 1)
//     {
//         return number+value;
//     };

// })();

// console.log(increment(5,2));
// console.log(increment(5));


// Rest Operator with Function parameters
// allow to create var number of arguments


// const sum = (function(){
//     return function sum(...args)
//     {
//         return args.reduce((a, b)=>a+b, 0);
//     };

// })();

// console.log(sum(1,2,3,4));


// use of sread operator 

// it expand existing array

// const arr1 = ['JAN', 'FEB', 'MAR', "APR", 'MAY'];
// let arr2;
// (function()
// {
//     arr2 = arr1; 
//     arr1[0] = 'potato'

// })();
// console.log(arr2);

// destructing assignment

// var voxel = {x: 3.6, y: 6.5, z: 6.54};

// var x = voxel.x; // x = 3.6
// var y = voxel.y; // y = 76.5
// var z = voxel.z; // z = 6.54

// const { x: a, y:b, z:c } = voxel; //  copy of values

// const AVG_TEMPERATURES = {
//     today: 77.5,
//     tomorrow: 79
// };
// function getTempOfTmrw(avgTemperatures)
// {
//     const {tomorrow: tempOfTomorrow } = avgTemperatures;
//     return tempOfTomorrow;

// }

// console.log(getTempOfTmrw(AVG_TEMPERATURES));



// template literals


// const person = {
//     name: "Zodiac Hasbro",
//     age: 56
// };

// const greeting  = `Hello, my name is ${person.name} I am ${person.age} years old.`;
// console.log(greeting);


// consise objectt declaration

// const createPerson = (name, age, gender)=>{
//     return {
//         name: name,
//         age:age,
//         gender: gender
//     };
// };

// console.log(createPerson("Zodiac Hasbro", 56 , "male"));


// const bicyle = {
//     grear: 2, 
//     setGear: function(newGear)
//     {
//         "use strict";
//         this.gear = newGear;
//     }
// };

// bicyle.setGear(3);
// console.log(bicyle.gear);

// class syntax to define constructor


// class SpaceShuttle{

//     constructor(targetPlanet)
//     {
//    this.targetPlanet = targetPlanet;

//     }
// }
// var zeus = new SpaceShuttle('Jupiter');

// console.log(zeus.targetPlanet);


// function makeClass()
// {
//     class Vegitable 
//     {
//         constructor(name)
//         {
//             this.name = name;
//         }
//     }
//     return Vegitable;
// }
// const Vegitable = makeClass();
// const carrot = new Vegitable('carrot');
// console.log(carrot.name);


// getter and setter


// class Book
// {
//     constructor(author)
//     {
//         this._author = author;
//     }
//     // getter 
//     get writer()
//     {
//         return this._author;
//     }
//     // setter
//     set writer(updateAuthor)
//     {
//         this._author = updateAuthor;
//     }

// }

// function makeClass()
// {
//     class thermostat{
//         constructor(temp)
//         {
//             this._temp = 5/9*(temp-32);
//         }
//         get temperature()
//         {
//             return this._temp;
//         }
//         set temperature(updatedTemp)
//         {
//             this._temp = updatedTemp;
//         }
        
//     }
//     return Thermostat;
// }

// const Thermostat = makeClass();
// const thermos = new Thermostat(76);
// let temp = thermos.temperature;
// thermos.temperature = 26;
// temp = thermos.temperature;
// console.log(temp);



// import vs export


// export use to import in other fle whatever we have assigned to export in anohter file
export const app = capitalizeString = str => str.toUpperCase()
{

}