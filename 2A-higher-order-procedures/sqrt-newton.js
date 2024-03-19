const square = x => x * x;

const tolerance = 0.000001;
const isCloseEnuf = (x, y) => Math.abs(x - y) < tolerance;
const fixedPoint = (fn, startingValue) => {
	const iter = (oldValue, newValue) => {
		if (isCloseEnuf(oldValue, newValue)) {
			return newValue;
		}

		return iter(newValue, fn(newValue));
	};

	return iter(startingValue, fn(startingValue));
};

const dx = 0.0000001;
const deriv = f => x => (f(x + dx) - f(x)) / dx;

const newton = (f, guess) => {
	// the f is fanned out into the secondCloud
	const secondCloud = u => u - f(u) / df(u);
	// the f is fanned out into the deriv
	const df = deriv(f);

	return fixedPoint(secondCloud, guess);
};

// x is some sort of free variable that comes in from the outside, by some magic
const guessSqrt = x => {
	// takes an argument y, and puts out the difference between x and the square of y
	const theProcedureInTheCloud = y => x - square(y);

	// the procedure in the cloud is fed into newton's method
	return newton(theProcedureInTheCloud, 1);
};

const Sqrt = {
	guessSqrt,
};

export default Sqrt;
