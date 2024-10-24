import { Stack } from './stack.js';

const stack = new Stack();

console.log(stack);

stack.push('A');
stack.push('B');
stack.push('C');
console.log(stack.peek().data);
