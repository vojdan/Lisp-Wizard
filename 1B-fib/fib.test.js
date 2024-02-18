import fib from './fib.js';

// 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377

describe('fib', () => {
	it('fib 0', () => {
		expect(fib.fib_recursive(0)).toStrictEqual({ res: 0, treeNodes: 1 });
	});
	it('fib 1', () => {
		expect(fib.fib_recursive(1)).toStrictEqual({ res: 1, treeNodes: 1 });
	});
	it('fib 2', () => {
		expect(fib.fib_recursive(2)).toStrictEqual({ res: 1, treeNodes: 3 });
	});
	it('fib 3', () => {
		expect(fib.fib_recursive(3)).toStrictEqual({ res: 2, treeNodes: 5 });
	});
	it('fib 4', () => {
		expect(fib.fib_recursive(4)).toStrictEqual({ res: 3, treeNodes: 9 });
	});
	it('fib 5', () => {
		expect(fib.fib_recursive(5)).toStrictEqual({ res: 5, treeNodes: 15 });
	});
	it('fib 6', () => {
		expect(fib.fib_recursive(6)).toStrictEqual({ res: 8, treeNodes: 25 });
	});
	it('fib 7', () => {
		expect(fib.fib_recursive(7)).toStrictEqual({ res: 13, treeNodes: 41 });
	});
	it('fib 8', () => {
		expect(fib.fib_recursive(8)).toStrictEqual({ res: 21, treeNodes: 67 });
	});
	it('fib 9', () => {
		expect(fib.fib_recursive(9)).toStrictEqual({ res: 34, treeNodes: 109 });
	});
	it('fib 10', () => {
		expect(fib.fib_recursive(10)).toStrictEqual({ res: 55, treeNodes: 177 });
	});
});
