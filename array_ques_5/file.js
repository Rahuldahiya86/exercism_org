// 1. Item get kr liya uski position se
export function getItem(stack, index) {
    return stack[index];
}

// 2. replace item 
export function setItem(stack, index, replacementCard) {
    stack[index] = replacementCard;
    return stack;
}

// 3. array ke last mein add kr diya new card
export function insertItemAtTop(stack, newCard) {
    stack.push(newCard); 
    return stack; 
}

// 4. splice item remome
export function removeItem(stack, index) {
    stack.splice(index, 1);
    return stack; 
}

// 5. last index ko delete kr diya
export function removeItemFromTop(stack) {
    stack.pop(); 
    return stack; 
}

// 6. add krdiya unshift se starting me
export function insertItemAtBottom(stack, newCard) {
    stack.unshift(newCard);
    return stack; 
}

// 7. remove krdiya shift se starting me
export function removeItemAtBottom(stack) {
    stack.shift();
    return stack; 
}

// 8. Function to check if the size of the stack is equal to a specified size
export function checkSizeOfStack(stack, stackSize) {
    return stack.length === stackSize; 
}
