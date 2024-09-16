import { DoublyLinkedList, Node } from './doublyLinkedList.js';

const list = new DoublyLinkedList();
window.list = list;
const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeNew = new Node('newNode');

list.addLastNode(nodeA);
list.addLastNode(nodeB);
list.addLastNode(nodeC);
list.insertBeforeNode(nodeB, nodeNew);
list.showList();
