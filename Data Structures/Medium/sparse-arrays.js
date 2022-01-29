function matchingStrings(strings, queries) {
    let counts = [];
    queries.forEach((query, i) => {
        counts[i] = 0;
        strings.forEach((str) => (str === query && counts[i]++));    
    })
    return counts;
}
