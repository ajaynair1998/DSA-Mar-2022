const twoSum = function (nums = [2, 7, 11, 15], target = 9) {
	let dictionary = {};

	for (let i = 0; i < nums.length; i++) {
		let remainder_needed = target - nums[i];
		remainder_needed = remainder_needed.toString();

		if (dictionary[remainder_needed] !== undefined) {
			return [dictionary[remainder_needed], i];
		} else {
			dictionary[nums[i]] = i;
		}
	}
};

console.log("🚀 ~ file: twoSum.js ~ line 14 ~ twoSum", twoSum());
