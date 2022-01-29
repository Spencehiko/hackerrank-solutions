function rotLeft(a, d) {
    let tempArr = [];
    for(let i = 0; i < a.length; i++){
        tempArr[(a.length+i-d) % a.length] = a[i];
    }
    return tempArr;
}