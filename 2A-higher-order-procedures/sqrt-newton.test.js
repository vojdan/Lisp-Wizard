import Sqrt from './sqrt-newton.js';

describe('guess', () => {
	it('sqrt 100', () => {
		expect(Sqrt.guessSqrt(100)).toBe(10);
	});
	it('sqrt 25', () => {
		expect(Sqrt.guessSqrt(25)).toBe(5);
	});
	it('sqrt 16', () => {
		expect(Sqrt.guessSqrt(16)).toBe(4.000000000000061);
	});
	it('sqrt 9', () => {
		expect(Sqrt.guessSqrt(9)).toBe(3);
	});
	it('sqrt 4', () => {
		expect(Sqrt.guessSqrt(4)).toBe(2.0000000000000044);
	});
	it('sqrt 2', () => {
		expect(Sqrt.guessSqrt(2)).toBe(1.4142135623730951);
	});
	it('sqrt 1', () => {
		expect(Sqrt.guessSqrt(1)).toBe(1.0);
	});
});
