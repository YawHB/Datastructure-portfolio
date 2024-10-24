export class Stack {
    constructor() {
        this.tail = null;
    }

    push(data) {
        const newNode = new Node(data);
        if (this.tail != null) {
            newNode.next = this.tail;
            this.tail = newNode;
        } else {
            this.tail = newNode;
        }
    }

    pop() {
        const nodeToRemove = this.tail;
        if (this.tail != null) {
            this.tail = nodeToRemove.next;
            return nodeToRemove;
        }
    }

    peek() {
        return this.tail;
    }
}

class Node {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
}
