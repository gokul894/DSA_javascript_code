class Heap {
    constructor(){
        this.data = [];
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    append(val){
        this.data.push(val);
        this.size++;
    }

    remove(){
        this.size--;
        return this.data.pop();
    }

    size(){
        return this.size;
    }
}