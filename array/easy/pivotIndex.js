let pivotIndexFirstSolution = (nums) => {
	console.log(nums);
	let accumilatedLeftSum = [0];
	let accumilatedRightSum = [0];

	let currentSumLeft = 0;
	let currentSumRight = 0;
	for (let i = 1; i < nums.length; i++) {
		currentSumLeft += nums[i - 1];
		accumilatedLeftSum.push(currentSumLeft);

		currentSumRight += nums[nums.length - i];
		accumilatedRightSum.unshift(currentSumRight);
	}
	console.log(accumilatedLeftSum, accumilatedRightSum);

	for (let i = 0; i < nums.length; i++) {
		if (accumilatedLeftSum[i] === accumilatedRightSum[i]) {
			return i;
		}
	}
	return -1;
};

let pivotIndex = (nums) => {
	let currentSum = 0;
	let totalSum = nums.reduce((val, acc) => val + acc);

	for (let i = 0; i < nums.length; i++) {
		totalSum -= nums[i];
		if (currentSum === totalSum) {
			return i;
		}
		currentSum += nums[i];
	}
	return -1;
};

pivotIndex([1, 7, 3, 6, 5, 6]);
