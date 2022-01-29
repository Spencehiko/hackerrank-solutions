function findDigits(n) {
    let counter = 0;
    n.toString().split('').forEach((digit) => {
        (n % digit === 0) && counter++;
    })
    return counter;
}