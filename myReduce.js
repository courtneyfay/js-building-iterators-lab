// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue) {

	var currentValue = 0;

	if (arr.length === 0) {

		return currentValue = initialValue;
	}

	if (initialValue === undefined) {

		initialValue = arr[0];

			currentValue = callback(initialValue,arr[1],1,arr);

		for (let i = 1; i < arr.length - 1; i++) {
			
			currentValue = callback(currentValue,arr[i+1],i+1,arr);
			console.log(currentValue);
		}
		return currentValue;
	}

	for (let i = 0; i < arr.length; i++) {
		
		if (i === 0) {
			currentValue = callback(initialValue,arr[i],i,arr);
		}
		currentValue = callback(currentValue,arr[i],i,arr);
	}
	return currentValue;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
