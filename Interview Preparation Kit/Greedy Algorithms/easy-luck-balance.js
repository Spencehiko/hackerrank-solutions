function luckBalance(k, contests) {
	let sum = contests.reduce((partialSum, el) => partialSum + el[0], 0);
	const contestsFiltered = contests
		.filter((el) => el[1] === 1)
		.sort((el, el2) => el[0] - el2[0]);
	const importantCount = contests.filter((el) => el[1] === 1).length;
	for (let i = 0; i < importantCount - k; i++) {
		sum -= contestsFiltered[i][0] * 2;
	}
	return sum;
}
