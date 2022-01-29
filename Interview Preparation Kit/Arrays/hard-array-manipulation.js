function arrayManipulation(n, queries) {
    let sum = new Array(n+1).fill(0);
    queries.forEach((query) => {
        sum[query[0]-1] += query[2];
        sum[query[1]] -= query[2];
    })
    let sums = 0;
    let max = -Infinity;
    for(let i = 0; i < sum.length; i++){
        sums += sum[i]
        max = Math.max(sums, max);
    }
    return max;
}