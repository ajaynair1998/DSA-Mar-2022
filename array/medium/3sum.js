function threeSum(nums) {
	nums.sort((a, b) => a - b);
	const finalArray = [];

	for (let alpha = 0; alpha < nums.length - 1; alpha++) {
		if (nums[alpha] === nums[alpha - 1]) {
			continue;
		}
		let beta = alpha + 1;
		let gamma = nums.length - 1;

		while (beta < gamma) {
			let currentTotal = nums[alpha] + nums[beta] + nums[gamma];

			if (currentTotal === 0) {
				finalArray.push([nums[alpha], nums[beta], nums[gamma]]);
				while (nums[beta] === nums[beta + 1]) {
					beta++;
				}
				while (nums[gamma] === nums[gamma - 1]) {
					gamma--;
				}
				beta++;
				gamma--;
			} else if (currentTotal < 0) {
				beta++;
			} else {
				gamma--;
			}
		}
	}
	console.log(finalArray);
	return finalArray;
}
threeSum([-1, 0, 1, 2, -1, -4]);
