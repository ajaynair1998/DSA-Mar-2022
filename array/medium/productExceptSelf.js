function productExceptSelf(nums) {
	const leftProduct = [1];
	const rightProduct = [1];
	const finalArray = [];

	for (let i = 1; i < nums.length; i++) {
		let currentLeftProduct = nums[i - 1] * leftProduct[i - 1];
		let currentRightProduct =
			nums[nums.length - i] * rightProduct[rightProduct.length - i];

		leftProduct.push(currentLeftProduct);
		rightProduct.unshift(currentRightProduct);
	}
	for (let i = 0; i < nums.length; i++) {
		finalArray[i] = leftProduct[i] * rightProduct[i];
	}
	console.log(leftProduct, rightProduct, finalArray);
	return finalArray;
}

function productExceptSelfOptimised(nums) {
	let leftProduct = 1;
	let rightProduct = 1;
	const finalArray = new Array(nums.length).fill(1);

	for (let i = 0; i < nums.length; i++) {
		finalArray[i] *= leftProduct;
		leftProduct *= nums[i];
		finalArray[nums.length - i - 1] *= rightProduct;
		rightProduct *= nums[nums.length - i - 1];
	}
	console.log(finalArray);
	return finalArray;
}

productExceptSelfOptimised([1, 2, 3, 4]);
