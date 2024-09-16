export class DoublyLinkedList {
    constructor() {
        this.head = null; // TODO: test-code - change later!
        this.tail = null; // TODO: test-code - change later!
    }

    addLastNode(newNode) {
        //let newNode = new Node(data, this.head, this.tail);

        //Hvis listen er tom, sæt nye node til at være hele listen
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            // newNode.next = null;
        } else {
            //Tilføjer den nye node lige efter den sidste
            this.tail.next = newNode;
            //sørger for at den nye node peger på den tidligere sidste node.
            newNode.prev = this.tail;
            //Sætter den nye nodes næste til at være null
            //newNode.next = null;
            //får this.tail til at pege på newNode
            this.tail = newNode;
        }
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

        this.addFirstNode(newNode);
    }

    removeFirst() {
        if (!this.head) return -1;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            console.log('inside else');
            this.head = this.head.next;
        }
    }

    removeLast() {
        if (!this.head) {
            return -1;
        } else if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
    }

    dump() {
        let node = this.head;
        console.log('Linked List');

        console.log(`head: ${this.head ? this.head.data : null}`);
        console.log(`tail: ${this.tail ? this.tail.data : null}`);
        console.log('============');

        while (node !== null) {
            console.log(`Current node: ${node.data} <---`);
            console.log('-------');
            console.log(`prev: ${node.prev ? node.prev.data : null}`);
            console.log(`next: ${node.next ? node.next.data : null}`);
            console.log('============');
            node = node.next;
        }
    }
}

export class Node {
    constructor(data) {
        this.prev = null;
        this.next = null;
        this.data = data;
    }
}
