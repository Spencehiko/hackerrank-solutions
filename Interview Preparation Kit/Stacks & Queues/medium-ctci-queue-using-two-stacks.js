function processData(input) {
	const inputParsed = input.split("\n");
	const totalQueries = inputParsed[0];
	const stack = [];
	for (let i = 1; i <= totalQueries; i++) {
		const lineParsed = inputParsed[i].split(" ");
		if (lineParsed[0] === "1") {
			stack.unshift(lineParsed[1]);
		} else if (lineParsed[0] === "2") {
			stack.pop();
		} else if (lineParsed[0] === "3") {
			console.log(stack[stack.length - 1]);
		}
	}
	/* ALTERNATIVE ~SAME~ 
    for(let i = 1; i <= totalQueries; i++) {
        const lineParsed = inputParsed[i].split(' ');
        if(lineParsed[0] === '1') {
            stack.push(lineParsed[1]);
        } else if (lineParsed[0] === '2') {
            stack.shift();
        } else if (lineParsed[0] === '3') {
            console.log(stack[0]);
        }
    }
    */
}
