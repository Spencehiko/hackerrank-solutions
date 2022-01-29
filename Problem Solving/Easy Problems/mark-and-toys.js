function maximumToys(prices, k) {
    prices.sort((a,b) => a-b);
    let total = 0, count = 0, i = 0;
    while(total <= k){
        total += prices[i];
        count++;
        i++;
    }
    return count-1;
}