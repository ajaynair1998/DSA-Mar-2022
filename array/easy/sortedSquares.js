let sortedSquares = (nums) => {
	let left = 0;
	let right = nums.length - 1;
	let finalArray = [];

	while (left <= right) {
		let leftSideValue = Math.abs(nums[left]);
		let rightSideValue = Math.abs(nums[right]);
		if (leftSideValue >= rightSideValue) {
			finalArray.unshift(Math.pow(leftSideValue, 2));
			left++;
		} else {
			finalArray.unshift(Math.pow(rightSideValue, 2));
			right--;
		}
	}
	return finalArray;
};
sortedSquares([-4, -1, 0, 3, 10]);
