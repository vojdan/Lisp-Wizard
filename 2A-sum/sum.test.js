import Sum from './sum.js';

describe('Sum.int', () => {
	it('Sum.int from 1 to 3', () => {
		expect(Sum.int(1, 3)).toStrictEqual(6);
	});
	it('Sum.int from 3 to 6', () => {
		expect(Sum.int(3, 6)).toStrictEqual(18);
	});
});

describe('Sum.sqrt', () => {
	it('Sum.sqrt from 1 to 3', () => {
		expect(Sum.sqrt(1, 3)).toStrictEqual(14);
	});
	it('Sum.sqrt from 3 to 6', () => {
		expect(Sum.sqrt(3, 6)).toStrictEqual(86);
	});
});

describe('Sum.pi', () => {
	it('Sum.pi from 1 to 1000', () => {
		const aprroxPi = 3.139592655589783;
		expect(Sum.pi(1, 1000)).toStrictEqual(aprroxPi / 8);
	});
});
