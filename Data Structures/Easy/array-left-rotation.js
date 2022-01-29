function rotateLeft(d, arr) {
    let rotatedArr = [];
    for(let i = 0; i < arr.length; i++){
        rotatedArr[(arr.length + (i-d)) % arr.length] = arr[i];
    }
    return rotatedArr;
}