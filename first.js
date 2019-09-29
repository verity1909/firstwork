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
let ex1 = prompt("Enter a required cost item this month");
let ex2 = prompt("How much will it cost?");
appData.expenses.ex1 = ex2;
alert(appData.budget / 30);