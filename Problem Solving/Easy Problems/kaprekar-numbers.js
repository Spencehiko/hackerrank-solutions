function processData(input) {
    var inputs = input.split("\n")
    var p = parseInt(inputs[0])
    var q = parseInt(inputs[1])
    var kaprekar = []
    
    for(var i = p; i <= q; i++){
        var sq = splitNum(i)
        if (sq[0]+sq[1] == i){
            kaprekar.push(i)
        }
    }
    
    if(kaprekar.length == 0){
        console.log( "INVALID RANGE")
    }else{
        console.log( kaprekar.join(" "))
    }
}