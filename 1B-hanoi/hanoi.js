const hanoi = (towerHeight, sourcePeg, targetPeg, sparePeg) => {
	if (towerHeight === 0) {
		return '';
	}

	// move all except the bottom disc to the spare peg
	const moveAllExceptBottomToSpare = hanoi(towerHeight - 1, sourcePeg, sparePeg, targetPeg);

	// move the bottom disc to the target peg
	const moveBottomToTarget = `Move disc ${towerHeight} from peg ${sourcePeg} to peg ${targetPeg}\n`;

	// all the discs which are now on the spare peg
	const moveAllRemainingToTarget = hanoi(towerHeight - 1, sparePeg, targetPeg, sourcePeg);

	return moveAllExceptBottomToSpare + moveBottomToTarget + moveAllRemainingToTarget;
};

export default hanoi;
