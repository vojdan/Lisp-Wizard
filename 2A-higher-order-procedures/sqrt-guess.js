const tolerance = 0.0001;
const isCloseEnuf = (x, y) => Math.abs(x - y) < tolerance;
const average = (x, y) => (x + y) / 2;
const heronsFn = (x, y) => average(y, x / y);

const guessSqrt = x => {
	const fixedPoint = (fn, startingValue) => {
		const iter = (oldValue, newValue) => {
			if (isCloseEnuf(oldValue, newValue)) {
				return newValue;
			}

			return iter(newValue, fn(newValue));
		};

		return iter(startingValue, fn(startingValue));
	};

	return fixedPoint(y => average(y, x / y), 1);
};

// 1: the square root is the fixed point of the improvement function
function guessSqrt_2(x) {
	// 2: the fixed point is the (100th?) iteration of the improvement function over the initial guess
	function iterateUntilDone(improvementFunction, startingValue) {
		// ! iteration logic
		function iterate(oldGuess, newGuess) {
			// ! stopping condition
			if (isCloseEnuf(oldGuess, newGuess)) {
				return newGuess;
			}

			// 4: get the next generation of the guess by improving it
			return iterate(newGuess, improvementFunction(x, newGuess));
		}

		return iterate(startingValue, improvementFunction(x, startingValue));
	}

	const startingGuess = 1;
	// ! this is called the fixed point of the function
	return iterateUntilDone(heronsFn, startingGuess);
}

const Sqrt = {
	guessSqrt,
	guessSqrt_2,
};

export default Sqrt;
