function theLoveLetterMystery(s) {
    let counter = 0;
    for(let i = Math.ceil(s.length/2); i < s.length; i++){
        if(s.charCodeAt(i) === s.charCodeAt(s.length-i-1)) continue;
        counter += Math.abs(s.charCodeAt(i) - s.charCodeAt(s.length-i-1))
    }
    return counter;
}