import sqrt, { improveGuess, isGoodEnough, sqrt_box } from './sqrt-guess.js';

describe('isGoodEnough', () => {
	// exact
	it('5 is a good guess for 25', () => {
		expect(isGoodEnough(25, 5)).toBe(true);
	});

	// more
	it('5.00001 is a good guess for 25', () => {
		expect(isGoodEnough(25, 5.00001)).toBe(true);
	});
	it('5.5 is a NOT good guess for 25', () => {
		expect(isGoodEnough(25, 5.5)).toBe(false);
	});

	// less
	it('4.9999 is a good guess for 25', () => {
		expect(isGoodEnough(25, 4.9999)).toBe(true);
	});
	it('4.5 is a NOT good guess for 25', () => {
		expect(isGoodEnough(25, 4.5)).toBe(false);
	});
});

describe('improveGuess', () => {
	// exact
	it('improve 5 for 25', () => {
		expect(improveGuess(25, 5)).toBe(5);
	});

	// more
	it('improve 5.2 for 25', () => {
		expect(improveGuess(25, 5.2)).toBe(5.003846153846154);
	});
	it('improve 5.5 for 25', () => {
		expect(improveGuess(25, 5.5)).toBe(5.022727272727273);
	});
	// less
	it('improve 4.8 for 25', () => {
		expect(improveGuess(25, 4.8)).toBe(5.004166666666666);
	});
	it('improve 4.5 for 25', () => {
		expect(improveGuess(25, 4.5)).toBe(5.027777777777778);
	});

	// 3 guesses from 1
	it('improve 1 for 25', () => {
		expect(improveGuess(25, 1)).toBe(13);
	});
	it('improve 13 for 25', () => {
		expect(improveGuess(25, 13)).toBe(7.461538461538462);
	});
	it('improve 7.461538461538462 for 25', () => {
		expect(improveGuess(25, 7.461538461538462)).toBe(5.406026962727994);
	});
});

describe('guess', () => {
	it('sqrt 100', () => {
		expect(sqrt(100)).toBe(10.000000000139897);
	});
	it('sqrt 25', () => {
		expect(sqrt(25)).toBe(5.000023178253949);
	});
	it('sqrt 16', () => {
		expect(sqrt(16)).toBe(4.000000636692939);
	});
	it('sqrt 9', () => {
		expect(sqrt(9)).toBe(3.00009155413138);
	});
	it('sqrt 4', () => {
		expect(sqrt(4)).toBe(2.0000000929222947);
	});
	it('sqrt 2', () => {
		expect(sqrt(2)).toBe(1.4142156862745097);
	});
	it('sqrt 1', () => {
		expect(sqrt(1)).toBe(1.0);
	});
});

describe('guess box', () => {
	it('sqrt 100', () => {
		expect(sqrt_box(100)).toBe(10.000000000139897);
	});
	it('sqrt 25', () => {
		expect(sqrt_box(25)).toBe(5.000023178253949);
	});
	it('sqrt 16', () => {
		expect(sqrt_box(15)).toBe(3.872983698008724);
	});
	it('sqrt 9', () => {
		expect(sqrt_box(9)).toBe(3.00009155413138);
	});
	it('sqrt 4', () => {
		expect(sqrt_box(4)).toBe(2.0000000929222947);
	});
	it('sqrt 2', () => {
		expect(sqrt_box(2)).toBe(1.4142156862745097);
	});
	it('sqrt 1', () => {
		expect(sqrt_box(1)).toBe(1.0);
	});
});
