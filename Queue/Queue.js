/**
 * This is queue data structure
 * the queue is work on FIFO principle
 * which means first in first out (fifo)
 * for this we are making a class with name Queue
 * and in this class we have some important method which is neccesery for a Queue
 * dsa like enQueue() -> it'll insert a value into the queue),deQueue() -> it'll 
 * remove the quantity from queue and there have a size() it gives the size of the queue..
 */



class Queue {
    constructor(){
        this.data = [];
        this.size = 0;
    }

    enQueue(val){
        this.data.push(val);
        this.size++;
    }

    deQueue(){
        this.size--;
        return this.data.shift();
    }

    getQueue(){
        return this.data;
    }

    size(){
        return this.size;
    }
}

// testing the queue via some value...

let q1 = new Queue();
q1.enQueue(4);
q1.enQueue(43);
q1.deQueue();
q1.enQueue(9);
q1.enQueue(23);
q1.enQueue(43);
q1.enQueue(23);
let k = q1.getQueue();
console.log(k)