function moveZeroes(nums) {
	let alpha = 0;
	let beta = 0;

	while (alpha < nums.length) {
		if (nums[alpha] !== 0) {
			[nums[beta], nums[alpha]] = [nums[alpha], nums[beta]];
			beta++;
		}
		alpha++;
	}
	console.log(nums);
	return nums;
}
moveZeroes([4, 0, 0, 5, 0, 0, 0]);
