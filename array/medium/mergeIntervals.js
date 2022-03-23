let merge = (intervals) => {
	intervals.sort((a, b) => a[0] - b[0]);
	const finalArray = [];
	let previousInterval = intervals[0];

	for (let i = 0; i < intervals.length; i++) {
		let currentInterval = intervals[i];

		if (currentInterval[0] <= previousInterval[1]) {
			previousInterval = [
				previousInterval[0],
				Math.max(previousInterval[1], currentInterval[1]),
			];
		} else {
			finalArray.push(previousInterval);
			previousInterval = currentInterval;
		}
	}

	finalArray.push(previousInterval);
	return finalArray;
};
