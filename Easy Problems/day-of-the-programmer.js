function dayOfProgrammer(year) {
    let date = new Date(year, 0, 1);
    let addition = 255;
    if(year<1918 && year % 100 === 0 && year % 400 !== 0)
        addition = 254; 
    if(year == 1918)
        addition = 268;
    date.setDate(date.getDate() + addition);
    let month = date.getMonth()+1
    if(date.getMonth()+1<10)
        month = "0"+(date.getMonth()+1)
    return date.getDate()  + "." + month + "." + date.getFullYear()
}