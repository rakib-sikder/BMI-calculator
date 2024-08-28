/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/


document.querySelector('.btn').addEventListener('click', function(){

    let height=Number(document.querySelector('.height').value);
    let weight=Number(document.querySelector('.weight').value);

    let BMI=weight / height ** 2
    console.log(BMI);
    if(BMI<=18.5){
        document.querySelector('.massageText').textContent= '😒 underweight'
    }else if(BMI>=18.5 && BMI<=24.9){
        document.querySelector('.massageText').textContent="😊healthy weight"
    }else if(BMI>=25 && BMI<=29.9){
        document.querySelector('.massageText').textContent="😁over weight"
    }else{
        document.querySelector('.massageText').textContent="🤣you are vary vary fat"
        
    }
})