function makeAnagram(a, b) {
    let letterMap = {};
    for(let i in a){
        letterMap[a[i]] = (letterMap[a[i]] || 0) + 1;
    }
    let deleteCount = 0;
    for(let i in b){
        if(!letterMap[b[i]]){
            deleteCount++;
            continue;
        } 
        letterMap[b[i]]--;
    }
    for(let i in letterMap){
        deleteCount += letterMap[i];
    }
    return deleteCount;
}