function removeDuplicates(nums) {
	let alpha = 1;
	let beta = 1;
	let uniqueDigits = 1;
	let currentUniqueValue = nums[0];
	while (alpha < nums.length && beta < nums.length) {
		let alphaValue = nums[alpha];

		if (alphaValue === currentUniqueValue) {
			alpha++;
		} else {
			[nums[beta], nums[alpha]] = [nums[alpha], nums[beta]];
			currentUniqueValue = nums[beta];
			beta++;
			alpha++;
			uniqueDigits++;
		}
	}
	console.log(nums);
	return nums;
}
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
