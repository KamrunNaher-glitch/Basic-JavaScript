const price = 500;
const age = 50;
if (age <=12){
    console.log('You can eat free')

}
else if (age >=60){
    // 50% discount
    const discount = price *50/100;
    const payAmount = price -discount;
    console.log(payAmount)
}
else if (age >=50){
    // 25% discount
    const discount = price * 25/100;
    const payAmount = price -discount;
    console.log(payAmount)
}

else{
    console.log(price)
} 