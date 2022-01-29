function repeatedString(s, n) {
    let aCountInOriginal = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'a') aCountInOriginal++;
    }
    let aCount = aCountInOriginal*Math.floor(n/s.length);
    let mod = n % s.length;
    if(!mod) return aCount;
    for(let i = 0; i < mod; i++){
        if(s[i] === 'a') aCount++;
    }
    return aCount;
}