function catAndMouse(x, y, z) {
    if(Math.abs(x-z) == Math.abs(y-z))
        return 'Mouse C'
    if(Math.abs(x-z) > Math.abs(y-z))
        return 'Cat B'
    if(Math.abs(x-z) < Math.abs(y-z))
        return 'Cat A'
}