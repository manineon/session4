function unique(arr) {
	const unique = values.filter((a, i, b) => b.indexOf(a) == i)
	return unique;
  }
  let values = ["green", "green", "red", "red", "yellow", "pink", "pink", "yellow"];
  let arr = values;
  
  console.log("unique values are", unique(arr));