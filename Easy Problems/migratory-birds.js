function migratoryBirds(arr) {
    let counts = [0,0,0,0,0];
    for(let i = 0; i<arr.length;i++){
        counts[arr[i]-1]++;
    }
    return (counts.indexOf(Math.max.apply(Math, counts))+1)
}