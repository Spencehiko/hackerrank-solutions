function reverseArray(a) {
    let reverseArr = [];
    for(let i = 0; i < a.length; i++){ 
        reverseArr[(a.length - i - 1)] = a[i]; 
    }
    return reverseArr;
}