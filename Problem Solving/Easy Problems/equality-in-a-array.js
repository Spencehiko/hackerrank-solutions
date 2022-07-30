function equalizeArray(arr) {
	const numbersMap = {};
	arr.forEach((element) => {
		numbersMap[element] = numbersMap[element] ? numbersMap[element] + 1 : 1;
	});
	const maxNumber = Object.keys(numbersMap).reduce((a, b) =>
		numbersMap[a] > numbersMap[b] ? a : b
	);
	let counter = 0;
	Object.entries(numbersMap).forEach(([key, value]) => {
		if (key !== maxNumber) counter += value;
	});
	return counter;
}
