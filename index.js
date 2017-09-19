var myEach = require('./myEach');
var myMap = require('./myMap');
var myReduce = require('./myReduce');
/* *********************************************************************
  You can edit this file
  It will make use of your code in myEach.js, myMap.js and myReduce.js
  To run it on the console do: `node index.js`
***********************************************************************/

/* myEach */

/* myEach(numArray, function print(element, index, arr) {
   console.log('inside myEach', element, index, arr);
 });*/


/* myMap */

/* var input = ["a","b","c"];
var output = myMap(input, function capitalize(v){
    return v.toUpperCase();
});

console.log('Testing myMap');
console.log(output);
console.log(output[0] === "A" && output[1] === "B" && output[2] === "C"); // assertion

console.log("the end");*/


/* myReduce */

// let numArray = [];
let numArray = [0,1,10,100,1000];

let initialValue = 0;

var output = myReduce(numArray, function sum(currentValue,newValue,index,array) {
	var total = newValue + currentValue;
	return total;
},initialValue );

console.log('Testing myReduce');
console.log(output);
console.log("the end");

