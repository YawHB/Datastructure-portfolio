import { Stack } from './stack.js';

const stack = new Stack();

console.log(stack);

stack.push('A');
stack.push('B');
stack.push('C');
console.log(stack.getSize());
console.log(stack.getIndex(0));
console.log(stack.getIndex(1));
console.log(stack.getIndex(2));
