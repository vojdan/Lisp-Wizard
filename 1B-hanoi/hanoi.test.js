import hanoi from './hanoi.js';

describe('hanoi', () => {
	it('hanoi - height: 1, from: A, to: B, spare: C', () => {
		expect(hanoi(1, 'A', 'B', 'C')).toStrictEqual(`Move disc 1 from peg A to peg B
`);
	});
	it('hanoi - height: 2, from: A, to: B, spare: C', () => {
		expect(hanoi(2, 'A', 'B', 'C')).toStrictEqual(`Move disc 1 from peg A to peg C
Move disc 2 from peg A to peg B
Move disc 1 from peg C to peg B
`);
	});
	it('hanoi - height: 3, from: A, to: B, spare: C', () => {
		expect(hanoi(3, 'A', 'B', 'C')).toStrictEqual(`Move disc 1 from peg A to peg B
Move disc 2 from peg A to peg C
Move disc 1 from peg B to peg C
Move disc 3 from peg A to peg B
Move disc 1 from peg C to peg A
Move disc 2 from peg C to peg B
Move disc 1 from peg A to peg B
`);
	});
	it('hanoi - height: 4, from: A, to: B, spare: C', () => {
		expect(hanoi(4, 'A', 'B', 'C')).toStrictEqual(`Move disc 1 from peg A to peg C
Move disc 2 from peg A to peg B
Move disc 1 from peg C to peg B
Move disc 3 from peg A to peg C
Move disc 1 from peg B to peg A
Move disc 2 from peg B to peg C
Move disc 1 from peg A to peg C
Move disc 4 from peg A to peg B
Move disc 1 from peg C to peg B
Move disc 2 from peg C to peg A
Move disc 1 from peg B to peg A
Move disc 3 from peg C to peg B
Move disc 1 from peg A to peg C
Move disc 2 from peg A to peg B
Move disc 1 from peg C to peg B
`);
	});
});
