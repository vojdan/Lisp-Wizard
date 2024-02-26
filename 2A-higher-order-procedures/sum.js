const NEXT = {
	INCREMENT: x => x + 1,
};

const TERM = {
	IDENTITY: x => x,
	SQUARE: x => x * x,
};

const universal = (from, to, term = TERM.IDENTITY, next = NEXT.INCREMENT) => {
	if (from > to) {
		return 0;
	}

	return term(from) + universal(next(from), to, term, next);
};

const int = (from, to) => universal(from, to);
const sqrt = (from, to) => universal(from, to, x => x * x);
const pi = (from, to) =>
	universal(
		from,
		to,
		x => 1 / (x * (x + 2)),
		x => x + 4,
	);

const Sum = {
	int,
	sqrt,
	pi,
};

export default Sum;
