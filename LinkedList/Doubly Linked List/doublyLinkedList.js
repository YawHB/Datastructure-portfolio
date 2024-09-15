const node1 = {
    prev: null,
    next: null,
    data: 'A',
};

const node2 = {
    prev: null,
    next: null,
    data: 'B',
};

const node3 = {
    prev: null,
    next: null,
    data: 'C',
};

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;

export class DoublyLinkedList {
    constructor() {
        this.head = node1; // TODO: test-code - change later!
        this.tail = node3; // TODO: test-code - change later!
    }

    dump() {
        let node = this.head;
        console.log('Linked List');

        console.log(`head: ${this.head.data}`);
        console.log(`tail: ${this.tail.data}`);
        console.log('============');

        while (node !== null) {
            console.log(`Current node: ${node.data}`);
            console.log('-------');
            console.log(`prev: ${node.prev?.data}`);
            console.log(`next: ${node.next?.data}`);
            console.log('============');
            node = node.next;
        }
    }
}
