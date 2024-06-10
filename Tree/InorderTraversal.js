import { treeRoot } from "../index.js"

// console.log(treeRoot);

// class Node{
//     constructor(val = null){
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// debugger

function inOrderTraversal(root){
    let result = [];

    function travel(root){
        if(root !== null){
            travel(root.left);
            result.push(root.val)
            travel(root.right);
        }
    }
    travel(root);

    return result;
}

let ans = inOrderTraversal(treeRoot);
console.log(ans);