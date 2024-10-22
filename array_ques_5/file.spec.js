
import { getItem, setItem, insertItemAtTop, removeItem, removeItemFromTop, insertItemAtBottom, removeItemAtBottom, checkSizeOfStack} from './file.js'

// Example Usage
console.log(getItem([1, 2, 4, 1], 2)); // => 4
console.log(setItem([1, 2, 4, 1], 2, 6)); // => [1, 2, 6, 1]
console.log(insertItemAtTop([5, 9, 7, 1], 8)); // => [5, 9, 7, 1, 8]
console.log(removeItem([3, 2, 6, 4, 8], 2)); // => [3, 2, 4, 8]
console.log(removeItemFromTop([3, 2, 6, 4, 8])); // => [3, 2, 6, 4]
console.log(insertItemAtBottom([5, 9, 7, 1], 8)); // => [8, 5, 9, 7, 1]
console.log(removeItemAtBottom([8, 5, 9, 7, 1])); // => [5, 9, 7, 1]
console.log(checkSizeOfStack([3, 2, 6, 4, 8], 4)); // => false