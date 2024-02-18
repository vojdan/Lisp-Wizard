const fib_recursive = (n, treeNodes = 0) => {
	console.log('\x1b[93m%s\x1b[0m', 'calling w/', n);
	if (n < 2) {
		return { res: n, treeNodes: treeNodes + 1 };
	}

	const res1 = fib_recursive(n - 1, treeNodes);
	const res2 = fib_recursive(n - 2, treeNodes);

	const resTotal = res1.res + res2.res;
	const stepsTotal = res1.treeNodes + res2.treeNodes + 1;

	return { res: resTotal, treeNodes: stepsTotal };
};

const fib = { fib_recursive };
export default fib;
