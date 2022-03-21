let fib = (n) => {
	return recursive_fib(n);
};

function recursive_fib(n, memo = {}) {
	if (memo[n] !== undefined) {
		return memo[n];
	}
	if (n == 0) {
		return 0;
	} else if (n == 1) {
		return 1;
	} else {
		let current_fib = recursive_fib(n - 1, memo) + recursive_fib(n - 2, memo);
		memo[n] = current_fib;
		return current_fib;
	}
}
