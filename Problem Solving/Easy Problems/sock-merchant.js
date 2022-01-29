function sockMerchant(n, ar) {
    ar.sort();
    let pairs = 0;
    while(ar.length > 1){
        if(ar[0] == ar[1]){
            pairs++;
            ar.splice(0,2);
        }
        else {
            ar.splice(0,1);    
        }
    }
    return pairs;
}