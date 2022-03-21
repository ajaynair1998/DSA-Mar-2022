let fib = (n) => {
	return recursive_fib(n);
};

function recursive_fib(n, memo = { 0: 0, 1: 1 }) {
	if (memo[n] !== undefined) {
		return memo[n];
	} else {
		let current_fib = recursive_fib(n - 1, memo) + recursive_fib(n - 2, memo);
		memo[n] = current_fib;
		return current_fib;
	}
}
