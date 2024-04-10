import { Node } from './Node.js';

export class Queue {
    constructor() {
        this.top = null;
        this.bottom = null;
    }

    enqueue(value) {
        let newNode = new Node(value);
        if(this.isEmpty()){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            this.bottom.next = newNode;
            newNode.prev = this.bottom;
            this.bottom = newNode;
        }
    }

    dequeue() {
        if (this.isEmpty()) {
        return null;
        }
        let value = this.top.value;
        this.top = this.top.next;
        return value;
    }

    peek() {
        if (this.isEmpty()) {
        return null;
        }
        let value = this.top.value;
        return value;
    }

    isEmpty() {
        return this.top === null;
    }

}