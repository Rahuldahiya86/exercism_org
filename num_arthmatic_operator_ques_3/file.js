export function dayRate(hourlyRate) {
    return hourlyRate * 8; // 8 hours in a day
}


export function daysInBudget(budget, hourlyRate) {
    const dailyRate = dayRate(hourlyRate); // Get the daily rate
    return Math.floor(budget / dailyRate); // Divide budget by daily rate and round down
}


export function priceWithMonthlyDiscount(hourlyRate, totalDays, discountRate) {
    const dailyRate = dayRate(hourlyRate); // Get the daily rate
    const fullMonths = Math.floor(totalDays / 22); // Calculate full months
    const remainingDays = totalDays % 22; // Calculate remaining days

    const discountedRate = dailyRate * (1 - discountRate); // Apply discount
    const totalCost = (fullMonths * discountedRate * 22) + (remainingDays * dailyRate); // Calculate total cost

    return Math.ceil(totalCost); // Round up the total cost
}

