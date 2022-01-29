function jumpingOnClouds(c) {
    let step = 0;
    let jump = 0;
    while(step < c.length - 1){ 
        console.log('step', step);
        console.log('c[step]', c[step]);
        if(c[step+2] == 0){
            step ++;
        }
        step++; 
        jump++; 
    }
    return(jump);
}