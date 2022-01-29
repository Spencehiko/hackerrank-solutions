function countingValleys(steps, path) {
    let level = 0;
    let downTime = 0;
    for(let i = 0; i<steps; i++){
        let levelIsZero = level==0 ? true : false;
        if(path[i] == 'D'){
            if(levelIsZero){
                downTime++;
            }
            level--;
        }
        if(path[i] == 'U')
            level++;        
    }
    return(downTime);
}