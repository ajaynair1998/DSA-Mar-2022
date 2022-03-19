let maxProfit = (prices) => {
	let currentBuyPrice = Number.MAX_SAFE_INTEGER;
	let currentProfit = 0;

	for (let price of prices) {
		currentBuyPrice = Math.min(price, currentBuyPrice);
		currentProfit = Math.max(price - currentBuyPrice, currentProfit);
	}
	return currentProfit;
};

maxProfit([7, 1, 5, 3, 6, 4]);
