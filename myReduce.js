// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue) {

	var currentValue = 0;

	for (let i = 0; i < arr.length; i++) {

		// if (i != 0) {
		// } else {
		// 	let currentValue = initialValue;
		// }
		// console.log(currentValue);
		var currentValue = callback(currentValue,arr[i],i,arr);
		console.log(currentValue);
	}
	return currentValue;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
