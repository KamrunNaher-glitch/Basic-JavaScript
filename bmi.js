let weigth = 30;
let height = 1.75;

let bmi = weigth/height;
let category;

if (bmi<18.5){
    category ="Underweight"
}
else if (bmi <= 24.9){
    category = "Normal"
}
else if (bmi <= 29.9){
    category = "Overweight"
}
else{
    category ="Obese"
}

console.log(bmi.toFixed(2))
console.log(category)