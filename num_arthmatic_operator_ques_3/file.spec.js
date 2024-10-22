import { dayRate, daysInBudget, priceWithMonthlyDiscount   } from './file.js'


console.log(dayRate(89)); // => 712
console.log(daysInBudget(20000, 89)); // => 28
console.log(priceWithMonthlyDiscount(89, 230, 0.42)); // => 97972