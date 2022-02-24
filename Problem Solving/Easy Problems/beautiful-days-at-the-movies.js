function beautifulDays(i, j, k) {
    let arr = Array.from({length: Math.abs(j-i) + 1}, (_, i) => i + 1).map((val) => val + Math.min(i, j) - 1);
    return arr.filter((el) => Math.abs(el - parseFloat(el.toString().split('').reverse().join('')) * Math.sign(el)) % k === 0).length;
}