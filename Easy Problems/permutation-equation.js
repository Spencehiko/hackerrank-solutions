function permutationEquation(p) {
    return p.map((_, i) => p.indexOf(p.indexOf(i + 1) + 1) + 1);
}