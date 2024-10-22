import {needsLicense, chooseVehicle, calculateResellPrice} from "./file.js"

console.log(needsLicense('car'));   // Output: true
console.log(needsLicense('bike'));  // Output: false

console.log(chooseVehicle('Wuling Hongguang', 'Toyota Corolla'));

console.log(calculateResellPrice(1000, 1));  // Output: 800
console.log(calculateResellPrice(1000, 5));  // Output: 700
console.log(calculateResellPrice(1000, 15)); // Output: 500