//get basic salary of the worker
const basicSalary = parseFloat(prompt("Please enter Basic Salary"));
//NSSF deduction is constant(tier1 and tier 2 but a company can choose to opt out of tier 2)
const nssfDedcution = 1080;
const personalRelief = 2400;
const taxablePay = basicSalary - nssfDedcution;
const nhif = nhifDeduction(basicSalary);
const housingLevy = 0.015 * basicSalary;
const nhifRelief = 0.15 * nhif;

// PAYE rates in effect from 1 July 2023:[1]

//  const MonthlyTaxablePay(Ksh)={
//     'Up to 24,000': 10.0,
//     "24,001 - 32,333" : 25.0,
//     '32,334 - 500,000' : 30.0,
//     '500,001 - 800,000' : 32.5,
//     'Above 800,000' : 35.0,
// }

//function to get NHIF Deductions for the month
function nhifDeduction(pay) {
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
}

function calculatePayee(income) {
  let tax = 0;
  let payee = 0;
  if (basicSalary > 24000) {
    if (income <= 24000) {
      tax = income * 0.1;
    } else if (income <= 32333) {
      tax = 24000 * 0.1 + (income - 24000) * 0.25;
    } else if (income <= 500000) {
      tax = 24000 * 0.1 + 8333 * 0.25 + (income - 32333) * 0.3;
    } else if (income <= 800000) {
      tax =
        24000 * 0.1 + 8333 * 0.25 + 467667 * 0.3 + (income - 500000) * 0.325;
    } else if (income > 800000) {
      tax =
        24000 * 0.1 +
        8333 * 0.25 +
        467667 * 0.3 +
        300000 * 0.325 +
        (income - 800000) * 0.35;
    }
    payee = tax - personalRelief - nhifRelief;
    return payee;
  } else {
    tax = 0;
    console.log(payee);
    return payee;
  }
}

// const income = parseFloat(prompt("Enter your income: "));
//PAYE tax = income tax - personalRelief -NHIFRelief
const taxToPay = calculatePayee(taxablePay);

//Pay after Tax for the month = taxToPay - nhifRelief - personalRelief
const netIncome = taxablePay - taxToPay;
//get Net Salary of the worker
const netPay = netIncome - housingLevy - nhif;
//Task Completed
console.log(`Your taxable income: ${taxablePay}`);
console.log(`Progressive tax to pay: ${taxToPay}`);
console.log(`Net Pay(Monthly Take Home): ${netPay}`);
