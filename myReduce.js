// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue) {

	var currentValue = 0;

	if (i = 0) {
		var currentValue = callback(initialValue,arr[i],i,arr);
		console.log(currentValue);
	}
	
	for (let i = 1; i < arr.length; i++) {
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
