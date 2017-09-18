// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

function myMap(arr, callback) {
	var capitalizedArray = [];

	for (let i = 0; i < arr.length; i++) {
		var capitalizedLetter = callback(arr[i],i,arr);
		capitalizedArray.push(capitalizedLetter);
	}
	return capitalizedArray;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myMap;
