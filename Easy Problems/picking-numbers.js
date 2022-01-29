function pickingNumbers(a) {
    a.sort((a,b) => a-b);
    let maxLength = 0;
    for(let i = 0; i<a.length; i++){
        let nextIndex = a.lastIndexOf(a[i]+1);
        if(a.lastIndexOf(a[i]+1) !== -1){ 
            if(nextIndex+1-i > maxLength){
                console.log(a); 
                console.log('i',i)
                maxLength = nextIndex+1-i 
            }         
        }
        else{
            if(a.lastIndexOf(a[i])+1-i > maxLength)
                maxLength = a.lastIndexOf(a[i])+1-i
        }
    }
    return maxLength;
}
