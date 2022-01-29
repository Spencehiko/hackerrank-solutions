function utopianTree(n) {
    let length = 1;
    for(let i = 0; i<n; i++){
        if(i % 2 === 0){
            length = length*2
        }
        else{
            length = length + 1;
        }    
    }
    return length
}