function bonAppetit(bill, k, b) {
    let i = 0
    const total = bill.reduce((currentTotal, item) => {
        i++
        if(i == k+1)
            return currentTotal
        return item + currentTotal
    }, 0)
    let message = b - total/2 > 0 ? b - total/2 : 'Bon Appetit'
    console.log(message);
}