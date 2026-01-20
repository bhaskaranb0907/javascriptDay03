// odd or even

let num = 7;

if (num % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

// drivers license

let age = 15;

if (age >= 18){
    console.log("you are eligibe")
}else{
    console.log("you are not eligible")
}

//ctc

let monthlySalary = 12300;
let annualSalary = monthlySalary*12;
console.log(annualSalary)

let bonus = annualSalary * (20/100)

let ctc = (annualSalary + bonus)
console.log(ctc)


// trafic light

let color = "Red";

if(color === "Red"){
    console.log("STOP")
} else if (color === "Green") {
    console.log("GO")
};

//electricity

let units = 50;              
let costPerUnit = 150;
let daysInMonth = 30;

let dailyCost = units * costPerUnit;
let monthlyCost = dailyCost * daysInMonth;

let annualPayment = monthlyCost * 12;
let discount = annualPayment * 20 / 100;
let finalPayment = annualPayment - discount;

console.log(finalPayment);

//leap year

let year = 2016;

if (year % 4 === 0 && year % 100 !== 0) {
    console.log("its a leap year")
}else{
    console.log("its not")
}

//maxing

let p = 5;
let q = 4;
let r = 2;