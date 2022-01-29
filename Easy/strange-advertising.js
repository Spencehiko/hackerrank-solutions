function viralAdvertising(n) {
    let newParticipants = 5;
    let likes = 2;
    for(let i = 0; i<n-1; i++){
        newParticipants = Math.floor(newParticipants/2)*3;
        likes += Math.floor(newParticipants/2);
    }
    return likes;
}