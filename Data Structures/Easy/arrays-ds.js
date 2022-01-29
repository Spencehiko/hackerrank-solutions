function reverseArray(a) {
    let reverseArr = [];
    for(let i = 0; i < a.length; i++){ // a =  1,4,2,3
        reverseArr[(a.length - i - 1)] = a[i]; // a[0] ----> a[3]
    }
    return reverseArr;
}