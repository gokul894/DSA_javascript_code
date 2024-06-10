/*
  In this code we are empliment two classes
  there have second class which is emportant here
  in second class we are making usefull methods like:
  isEmpty(), insertStart(), insertEnd(), insertAfter(), delet(),
  printNode() and at the last we are initializing the object with name Obj1 via this
  invoke(call) to some method..
  
 */


class Node{
    constructor(val = null){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class Dll {
    constructor(){
        this.head = null;
    }

    isEmpty(){
        return this.head === null;
    }

    insertStart(val){
        let newNode = new Node(val);
        // let temp = this.head;
        if (!this.isEmpty()){
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }else{
            this.head = newNode;
        }
    }

    insertEnd(val){
        let newNode = new Node(val);
        if(!this.isEmpty()){
            let temp = this.head;
            while(temp.next){
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.prev = temp;
            temp = temp.next;
        }else{
            this.head = newNode;
        }
    }

    insertAfter(val, data){
        let temp = this.head;
        while(temp.val !== val){
            temp = temp.next;
        }
        let newNode = new Node(data);
        // let tNode = temp.next;
        newNode.prev = temp;
        newNode.next = temp.next;
        if(temp.next){
            temp.next.prev = newNode;
        }
        temp.next = newNode;
    }

    delet(val){
        let temp = this.head;
        
        if(!temp.next){
            if(temp.val === val){
                temp = null;
            }
        }else{
            while(temp.val !== val){
                temp = temp.next;
            }
            temp.prev.next = temp.next;
            if(temp.next){
                temp.next.prev = temp.prev;
            }
        }
    }

    printNode(){
        console.log('printing in forword order')
        let temp;
        while(this.head){
            console.log(this.head.val)
            temp = this.head;
            this.head = this.head.next;
        }

        // for fun you can try it to verify that this is a Dll
        console.log('<----------------------->')

        console.log('printing in backword order')
        while(temp){
            console.log(temp.val)
            temp = temp.prev;
        }
    }
}

let Obj1 = new Dll();
Obj1.insertEnd(34);
Obj1.insertEnd(9);
Obj1.insertStart(3);
Obj1.insertEnd(29); 
// Obj1.delet(3);
Obj1.insertEnd(34);
Obj1.insertStart(76);
Obj1.insertEnd(91);
Obj1.delet(3);
Obj1.insertAfter(29, 58);
Obj1.printNode();