function cutTheSticks(arr) {
    const counts = [arr.length];
    while(counts[counts.length - 1] > 0) {
        const min = Math.min(...arr);
        const elementsToRemoveCount = arr.filter((el) => el <= min).length;
        if(elementsToRemoveCount === counts[counts.length - 1]) break;
        counts.push(counts[counts.length - 1] - elementsToRemoveCount)
        arr = arr.filter((el) => el > min)
    }
    return counts;
}