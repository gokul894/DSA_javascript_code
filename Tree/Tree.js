
/**
 * standerd way to empliment the binary tree..
 */


class Node{
    constructor(val = null){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    constructor(){
        this.root = null;
    }

    insert(data){
        let newNode = new Node(data);
        if(this.root === null){
            this.root = newNode;
        }else{
            this.insertItem(this.root, newNode);
        }
    }

    insertItem(node, newNode){
        if(node.val > newNode.val){
            if(node.left){
                this.insertItem(node.left, newNode);
            }else{
                node.left = newNode;
            }
        }else{
            if(node.right){
                this.insertItem(node.right, newNode);
            }else{
                node.right = newNode;
            }
        }
    }

    printVal(){
        let temp = this.root;
        function print(temp){
            if(temp){
                console.log(temp.val);
                print(temp.left);
                print(temp.right);
            }
        }
        print(temp);
    }

    giveRoot(){
        return this.root;
    }

}

// testing the tree algorithem with some value

let t1 = new Tree();

t1.insert(27);
t1.insert(13);
t1.insert(92);
t1.insert(24);
t1.insert(38);
t1.insert(120);
t1.insert(10);

// t1.printVal(); ---> it's give 27, 92, 38, 28, 13, 24, 10

export default t1.giveRoot();