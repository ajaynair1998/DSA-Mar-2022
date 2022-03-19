function merge(nums1, m, nums2, n) {
	let nums1EndPointer = m + n - 1;
	let nums2EndPointer = n - 1;
	let nums1RealValuesEndPointer = m - 1;

	while (nums1RealValuesEndPointer >= 0 && nums2EndPointer >= 0) {
		if (nums1[nums1RealValuesEndPointer] < nums2[nums2EndPointer]) {
			nums1[nums1EndPointer] = nums2[nums2EndPointer];
			nums2EndPointer--;
			nums1EndPointer--;
		} else {
			nums1[nums1EndPointer] = nums1[nums1RealValuesEndPointer];
			nums1RealValuesEndPointer--;
			nums1EndPointer--;
		}
	}

	while (nums2EndPointer >= 0) {
		nums1[nums1EndPointer] = nums2[nums2EndPointer];
		nums2EndPointer--;
		nums1EndPointer--;
	}

	console.log(nums1);
	return nums1;
}
