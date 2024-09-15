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

    addLastNode(data) {
        let newNode = new Node(data, this.head, this.tail);

        if (this.head === null) {
            return (this.head = newNode);
        }

        let node = this.head;

        while (node.next !== null) {
            node = node.next;
        }
        node.next = newNode;
        newNode.prev = node;
        newNode.next = null;

        return;
    }

    addFirstNode(data) {
        let newNode = new Node(data);

        //Hvis listen er tom, så sæt newNode som eneste element
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            //definerer nuværende første node
            let currentFirst = this.head;
            //Ændrer første node til at være den nyoprettede node
            this.head = newNode;
            //Sørger for, at den nye node næste node peger på den tidligere første
            newNode.next = currentFirst;
            //Sørger for, at den tidligere første node prev er vores nye node
            currentFirst.prev = newNode;
        }
    }

    dump() {
        let node = this.head;
        console.log('Linked List');

        console.log(`head: ${this.head?.data}`);
        console.log(`tail: ${this.tail?.data}`);
        console.log('============');

        while (node !== null) {
            console.log(`Current node: ${node.data} <---`);
            console.log('-------');
            console.log(`prev: ${node.prev?.data}`);
            console.log(`next: ${node.next?.data}`);
            console.log('============');
            node = node.next;
        }
    }
}

class Node {
    constructor(data) {
        // this.prev = prev;
        // this.next = next;
        this.data = data;
    }
}
