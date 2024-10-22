// 1. Function to get an item from a specific position
export function getItem(stack, index) {
    return stack[index];
}

// 2. Function to replace an item at a specific position
export function setItem(stack, index, replacementCard) {
    stack[index] = replacementCard;
    return stack;
}

// 3. Function to insert a new card at the top of the stack
export function insertItemAtTop(stack, newCard) {
    stack.push(newCard); 
    return stack; 
}

// 4. Function to remove an item from a specific position
export function removeItem(stack, index) {
    stack.splice(index, 1);
    return stack; 
}

// 5. Function to remove the item from the top of the stack
export function removeItemFromTop(stack) {
    stack.pop(); 
    return stack; 
}

// 6. Function to insert a new card at the bottom of the stack
export function insertItemAtBottom(stack, newCard) {
    stack.unshift(newCard);
    return stack; 
}

// 7. Function to remove the item at the bottom of the stack
export function removeItemAtBottom(stack) {
    stack.shift();
    return stack; 
}

// 8. Function to check if the size of the stack is equal to a specified size
export function checkSizeOfStack(stack, stackSize) {
    return stack.length === stackSize; 
}
