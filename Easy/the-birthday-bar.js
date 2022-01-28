function birthday(s, d, m) {
    let count = 0;
    let sum = [0];
    for(let i=0;i<s.length;i++){
        sum[i+1]=sum[i]+s[i];
    }
    for(let i=0;i<s.length;i++){
        if(sum[i+m]-sum[i]==d){
            count++;
        }
    }
    return count;
}