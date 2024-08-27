"use strict";
function identity(value) {
    return value;
}
const num = identity(42);
const str = identity("hello");
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        return this.items.shift();
    }
}
const queueObj = new Queue();
queueObj.enqueue(1);
queueObj.enqueue(2);
