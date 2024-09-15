import { DoublyLinkedList, Node } from './doublyLinkedList.js';

const list = new DoublyLinkedList();
window.list = list;
const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');

list.addLastNode(nodeA);
list.addLastNode(nodeB);
list.addLastNode(nodeC);
list.addLastNode(nodeD);
list.dump();
