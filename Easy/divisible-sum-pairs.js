function divisibleSumPairs(n, k, ar) {
    let counter = 0;
    for(let i = 0; i < n; i++){
        for(let j = i+1; j<n; j++){
            if((ar[i]+ar[j]) % k === 0)
                counter++;
        }
    }
    return counter;
}