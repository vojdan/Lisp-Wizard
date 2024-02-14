const average = (x, y) => (x + y) / 2;
const square = x => x * x;
const abs = x => (x < 0 ? -x : x);

export const improveGuess = (x, guess) => {
	return average(guess, x / guess);
};

export const isGoodEnough = (x, guess) => {
	return abs(square(guess) - x) < 0.001;
};

const tryGuess = (x, currentGuess) => {
	if (isGoodEnough(x, currentGuess)) {
		return currentGuess;
	}

	const improvedGuess = improveGuess(x, currentGuess);
	return tryGuess(x, improvedGuess);
};

// version 1
const sqrt = x => {
	return tryGuess(x, 1);
};

// version 2
export function sqrt_box(x) {
	function improveGuess(guess) {
		return average(guess, x / guess);
	}

	function isGoodEnough(guess) {
		return abs(square(guess) - x) < 0.001;
	}

	function tryGuess(currentGuess) {
		if (isGoodEnough(currentGuess)) {
			return currentGuess;
		}

		const improvedGuess = improveGuess(currentGuess);
		return tryGuess(improvedGuess);
	}

	return tryGuess(1);
}

export default sqrt;
