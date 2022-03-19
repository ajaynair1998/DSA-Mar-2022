let maxProfit = (prices) => {
	let currentProfit = 0;
	for (let i = 0; i < prices.length; i++) {
		if (prices[i - 1] < prices[i]) {
			currentProfit += prices[i] - prices[i - 1];
		}
	}
	console.log(currentProfit);
	return currentProfit;
};

maxProfit([7, 1, 5, 3, 6, 4]);
