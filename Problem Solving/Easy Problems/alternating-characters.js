function alternatingCharacters(s) {
    let deletes = 0;
    let lastChar = '';
    for(let i = 0; i < s.length; i++){
        if(s.charAt(i) === lastChar){
            deletes++;
        } else {
            lastChar = s.charAt(i);
        }
    }
    return deletes;
}