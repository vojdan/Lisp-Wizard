import Sqrt from './sqrt-guess.js';

describe('sqrt', () => {
	it('sqrt 4', () => {
		expect(Sqrt.guessSqrt(4)).toBe(2.000000000000002);
		expect(Sqrt.guessSqrt_2(4)).toBe(2.000000000000002);
	});
	it('sqrt 9', () => {
		expect(Sqrt.guessSqrt(9)).toBe(3.000000001396984);
		expect(Sqrt.guessSqrt_2(9)).toBe(3.000000001396984);
	});
	it('sqrt 16', () => {
		expect(Sqrt.guessSqrt(16)).toBe(4.000000000000051);
		expect(Sqrt.guessSqrt_2(16)).toBe(4.000000000000051);
	});
	it('sqrt 25', () => {
		expect(Sqrt.guessSqrt(25)).toBe(5.000000000053722);
		expect(Sqrt.guessSqrt_2(25)).toBe(5.000000000053722);
	});
});

describe('guess', () => {
	it('sqrt 100', () => {
		expect(Sqrt.guessSqrt(100)).toBe(10.000000000139897);
	});
	it('sqrt 25', () => {
		expect(Sqrt.guessSqrt(25)).toBe(5.000000000053722);
	});
	it('sqrt 16', () => {
		expect(Sqrt.guessSqrt(16)).toBe(4.000000000000051);
	});
	it('sqrt 9', () => {
		expect(Sqrt.guessSqrt(9)).toBe(3.000000001396984);
	});
	it('sqrt 4', () => {
		expect(Sqrt.guessSqrt(4)).toBe(2.000000000000002);
	});
	it('sqrt 2', () => {
		expect(Sqrt.guessSqrt(2)).toBe(1.4142135623746899);
	});
	it('sqrt 1', () => {
		expect(Sqrt.guessSqrt(1)).toBe(1.0);
	});
});
