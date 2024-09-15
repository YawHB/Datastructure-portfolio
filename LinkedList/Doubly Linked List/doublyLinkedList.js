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

    addLastNode(newNode) {
        //let newNode = new Node(data, this.head, this.tail);

        //Hvis listen er tom, sæt nye node til at være hele listen
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = null;
        }

        //Hvis listen har noder, loop igennem og find den sidste
        let node = this.head;
        while (node.next !== null) {
            node = node.next;
        }
        //Sæt den tidlige sidste node til at pege på den nye sidste
        node.next = newNode;
        //Sæt den nye nodes prev til at pege på den tidligere sidste node
        newNode.prev = node;
        //Sørg for at den nye node peger på null
        newNode.next = null;
        //This.tail skal nu pege på vores nye node, som er den sidste.
        this.tail = newNode;

        return;
    }

    addFirstNode(newNode) {
        //let newNode = new Node(data);

        //Hvis listen er tom, så sæt newNode som eneste element
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            //definerer nuværende første node
            let currentFirst = this.head;
            //Ændrer første node til at være den nyoprettede node
            this.head = newNode;
            console.log(`new node inside addFirstNode: ${newNode.data}`);

            //Sørger for, at den nye node næste node peger på den tidligere første
            newNode.next = currentFirst;
            //Sørger for, at den tidligere første node prev er vores nye node
            currentFirst.prev = newNode;
        }
    }

    addLast(data) {
        const newNode = new Node(data);
        this.addLastNode(newNode);
    }
    addFirst(data) {
        const newNode = new Node(data);
        console.log(`new node inside ADD FIRST ${newNode.data}`);

        this.addFirstNode(newNode);
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
