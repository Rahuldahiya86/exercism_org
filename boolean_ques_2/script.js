export function canExecuteFastAttack(knightIsAwake) {
    return !knightIsAwake;
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    return !archerIsAwake && prisonerIsAwake;
}

export function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) {
    const condition1 = (petDogIsPresent && !archerIsAwake)
    const condition2 = (prisonerIsAwake && !knightIsAwake && !archerIsAwake)
    return condition1 || condition2;
}


