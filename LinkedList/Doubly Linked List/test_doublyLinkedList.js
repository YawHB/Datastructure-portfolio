import { DoublyLinkedList } from './doublyLinkedList.js';

console.log('Running');

const list = new DoublyLinkedList();
window.list = list;

list.addLastNode('D');
list.dump();
