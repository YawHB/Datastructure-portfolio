import { DoublyLinkedList } from './doublyLinkedList.js';

console.log('Running');

const list = new DoublyLinkedList();
window.list = list;

const nodeD = {
    prev: null,
    next: null,
    data: 'D',
};
const nodeFirst = {
    prev: null,
    next: null,
    data: 'New node',
};
list.addLastNode(nodeD);

list.addFirstNode(nodeFirst);

list.addFirst('-B');
list.dump();
