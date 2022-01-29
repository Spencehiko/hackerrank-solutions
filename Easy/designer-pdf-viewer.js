function designerPdfViewer(h, word) {
    let maxHeight = 1;
    for(let i = 0; i<word.length; i++){
        let index = word.codePointAt(i)-97;
        if(h[index] > maxHeight)
            maxHeight = h[index]
    }
    return word.length*maxHeight
}