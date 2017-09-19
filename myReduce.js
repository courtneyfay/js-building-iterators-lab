// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue) {

	var currentValue = 0;

	if (arr.length === 0) {

		return currentValue = 99;
	}

	if (initialValue === undefined) {

		for (let i = 1; i < arr.length; i++) {
			
			initialValue = arr[0];
			
			// currentValue = callback(initialValue,arr[i],i,arr);
			// console.log("undefined case: " + currentValue);

			if (i === 0) {
				currentValue = callback(initialValue,arr[i],i,arr);
				console.log(currentValue);
			}
			currentValue = callback(currentValue,arr[i],i,arr);
			console.log(currentValue);
		}
		return currentValue;
	}

	for (let i = 0; i < arr.length; i++) {
		
		// console.log(typeof arr[i]);

		if (i === 0) {
			// console.log(initialValue);
			currentValue = callback(initialValue,arr[i],i,arr);
			console.log(currentValue);
		}
		currentValue = callback(currentValue,arr[i],i,arr);
		console.log(currentValue);
	}
	return currentValue;
}

// Things I tried that didn't really work:
	// console.log("This is the initialValue outside the for loop: " + initialValue);
	// if (isNaN(i) === true) {
	// 	console.log("Alert: index is NaN");
	// } 
	// else if (i !== 0) {
	// 	console.log("Alert: index is NOT 0 :" + i);
	// } else 
	// if (isNaN(arr[i]) === false) {
	// console.log(isNaN(initialValue));
	// console.log(isNaN(initialValue) == true);
	// console.log(isNaN('a') == true);
	// if (isNaN(initialValue) == true) {
	// 	initialValue = arr[0];
	// 	console.log(initialValue);
	// }
	// initialValue = 192;

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
