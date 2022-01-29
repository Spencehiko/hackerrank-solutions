function angryProfessor(k, a) {
    return a.filter(v => v<=0).length < k ? 'YES' : 'NO';
}