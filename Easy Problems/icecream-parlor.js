function icecreamParlor(m, arr) {
    for(let i = 0;i<arr.length; i++){
        let index =  arr.lastIndexOf(m - arr[i]);
        if(index !== -1 && index !== i){
            return [i+1, index+1];
        }
    }
    return false;
}