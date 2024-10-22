// Step 1: Define the constant
const EXPECTED_MINUTES_IN_OVEN = 40;
export { EXPECTED_MINUTES_IN_OVEN, remainingMinutesInOven, preparationTimeInMinutes, totalTimeInMinutes};

function remainingMinutesInOven(actualMinutes) {
return EXPECTED_MINUTES_IN_OVEN - actualMinutes
}

function preparationTimeInMinutes(layers){
    return layers * 2
}

function totalTimeInMinutes(layers, actualMinutesInOven){
    const prepTime = preparationTimeInMinutes(layers);
    return prepTime + actualMinutesInOven;
}
