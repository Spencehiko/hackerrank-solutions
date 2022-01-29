function swap(arr, i ,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function minimumSwaps(arr) {  
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == i+1)
            continue;
        swap(arr, i, arr[i]-1);
        count++;
        i--; 
    }
    return count;
}