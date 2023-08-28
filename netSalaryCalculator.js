//get basic salary of the worker
const basicSalary = prompt("Please enter Basic Salary");
//NSSF deduction is constant(tier1 and tier 2 but a company can choose to opt out of tier 2)
const nssfDedcution = 1080;
const personalRelief = 2400;
const progressiveTaxValues = [10, 25, 30, 32.5, 35];
const taxBrackets = [24000, 8333, 467667, 800000];
let taxablePay = basicSalary - nssfDedcution;
//function to get PAYE percent as at July, 2023

// PAYE rates in effect from 1 July 2023:[1]

//  const MonthlyTaxablePay(Ksh)={
//     'Up to 24,000': 10.0,
//     "24,001 - 32,333" : 25.0,
//     '32,334 - 500,000' : 30.0,
//     '500,001 - 800,000' : 32.5,
//     'Above 800,000' : 35.0,
// }

const taxableIncomeTax = (pay) => {
  let taxableInc = pay;
  let taxableIncome = 0;
  while (taxableInc > 0) {
    for (let i = 0; i < progressiveTaxValues.length; i++) {
      let j = 0;
      if (i == 4) {
        j = 3;
      }
      taxableInc - taxBrackets[j];
      taxableIncome += (taxBrackets[j] * progressiveTaxValues[i]) / 100;
      j++;
    }
    return taxableIncome;
  }
  //   let taxPercent = 0;
  //   if (pay <= 24000) {
  //     taxPercent = 10;
  //   } else if (pay > 24000 && pay <= 32333) {
  //     taxPercent = 25;
  //   } else if (pay >= 32334 && pay <= 500000) {
  //     taxPercent = 30;
  //   } else if (pay >= 500001 && pay <= 800000) {
  //     taxPercent = 32.5;
  //   } else if (pay > 800000) {
  //     taxPercent = 35;
  //   }
  return taxPercent;
};

//function to get NHIF Deductions for the month
const nhifDeduction = (pay) => {
  let nhifDeduct = 0;
  if (pay <= 5999) {
    nhifDeduct = 150;
  } else if (pay >= 6000 && pay <= 7999) {
    nhifDeduct = 300;
  } else if (pay >= 8000 && pay < 12000) {
    nhifDeduct = 400;
  } else if (pay >= 12000 && pay < 15000) {
    nhifDeduct = 500;
  } else if (pay >= 15000 && pay < 20000) {
    nhifDeduct = 600;
  } else if (pay >= 20000 && pay < 25000) {
    nhifDeduct = 750;
  } else if (pay >= 25000 && pay < 30000) {
    nhifDeduct = 850;
  } else if (pay >= 30000 && pay < 35000) {
    nhifDeduct = 900;
  } else if (pay >= 35000 && pay < 40000) {
    nhifDeduct = 950;
  } else if (pay >= 40000 && pay < 45000) {
    nhifDeduct = 1000;
  } else if (pay >= 45000 && pay < 50000) {
    nhifDeduct = 1100;
  } else if (pay >= 50000 && pay < 60000) {
    nhifDeduct = 1200;
  } else if (pay >= 60000 && pay < 70000) {
    nhifDeduct = 1300;
  } else if (pay >= 70000 && pay < 80000) {
    nhifDeduct = 1400;
  } else if (pay >= 80000 && pay < 90000) {
    nhifDeduct = 1500;
  } else if (pay >= 90000 && pay < 100000) {
    nhifDeduct = 1600;
  } else if (pay > 100000) {
    nhifDeduct = 1700;
  }
  return nhifDeduct;
};

//get gross salary of the worker for the month

//get Net Salary of the worker

//Task Completed
