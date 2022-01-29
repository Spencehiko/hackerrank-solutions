function pageCount(n, p) {
    let min= Math.floor(n/2)-Math.floor(p/2);
    if(min>Math.floor(p/2))
        min=Math.floor(p/2);
    return min;
}