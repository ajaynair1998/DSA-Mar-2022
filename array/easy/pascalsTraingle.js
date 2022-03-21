function generate(numRows) {
	let finalArray = [[1]];
	for (let i = 1; i < numRows; i++) {
		// There will always be a 1 at the start of each row
		let currentRow = [1];
		for (let j = 1; j < i; j++) {
			let currentValue = finalArray[i - 1][j - 1] + finalArray[i - 1][j];
			currentRow.push(currentValue);
		}
		// There will always be a 1 at end of each row
		currentRow.push(1);
		finalArray.push(currentRow);
	}
	return finalArray;
}
generate(5);
