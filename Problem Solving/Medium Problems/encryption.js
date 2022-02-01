function encryption(s) {
    s = s.replace(/ /g,'');
    const colLength = Math.ceil(Math.sqrt(s.length));
    const rowLength = Math.round(Math.sqrt(s.length));
    let str = '';
    for(let i = 0; i < colLength; i++) {
        for(let j = 0; j < rowLength; j++) {
            str += s.charAt(i+j*colLength);
        } 
        str += (' ');          
    }
    return str;
}
