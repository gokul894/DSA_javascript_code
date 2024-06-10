import { treeRoot } from "../index.js"

/**
 * @param {*} root 
 * @returns {Array}
 * 
 * class Node{
        constructor(val = null){
            this.val = val;
            this.left = null;
            this.right = null;
        }
    }
 */


function preOrderTraversal(root){
    let result = [];

    function travel(root){
        if(root !== null){
            result.push(root.val);
            travel(root.left);
            travel(root.right);
        }
    }
    travel(root);

    return result;
}

let ans = preOrderTraversal(treeRoot);
console.log(ans);