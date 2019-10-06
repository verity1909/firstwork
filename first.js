'use strict';
let money = prompt("What is your monthly budget?");
let data = prompt("Enter date in format YYYY.MM.DD");
let appData = {
    budget: money, 
    timeData: data,
    expenses:{},
    optionalExpenses: {},
    income:{},
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = +prompt("Enter a required cost item this month");
    let b = +prompt("How much will it cost?");
  
    
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && 
    (typeof(b)) != null && a != '' && a != '' && a.length < 50) {
        console.log("Done");
        appData.expenses[a] = b; 
    } 
}
appData.moneyperday = appData.budget/30;

alert("Daily budget:", appData.moneyperday);

if(appData.moneyperday < 100) {
    console.log("Minimum level of wealth");
} else if (appData.moneyperday > 100 && appData.moneyperday < 2000) {
console.log("Medium level of wealth");
} else if ( appData.moneyperday > 2000) {
    console.log("Higher level of wealth");
} else {
    console.log("Mistake");
}
