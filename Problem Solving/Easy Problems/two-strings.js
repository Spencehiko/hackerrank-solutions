function twoStrings(s1, s2) {
    let map = {};
    for(let i in s1){
        map[s1[i]] = 1;
    }
    let shared = false;
    for(let i in s2){
        if(map[s2[i]]) {
            shared = true;
            break;
        }
    }
    return(shared ? 'YES' : 'NO');
}