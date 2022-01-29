function checkMagazine(magazine, note) {
    const map = {};
    let replicable = true;
    for(let i of magazine){
        map[i] = (map[i] || 0) + 1;
    }
    for(let i of note){
        map[i] = (map[i] || 0) - 1;
    }
    for(let i in map){
        if(map[i] < 0){
            replicable = false;
            break;
        }
    }
    console.log(replicable ? 'Yes' : 'No');
}