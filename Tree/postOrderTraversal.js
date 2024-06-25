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
        /** 
 * 
 *     Tree is like...

                        27
                       /   \
                     13     92
                    /  \    / \
                   10  24  38  120

 */


function postOrderTraversal(root){
    let result = [];

    function travel(root){
        if(root !== null){
            travel(root.left);
            travel(root.right);
            result.push(root.val)
        }
    }
    travel(root);

    return result;
}

let ans = postOrderTraversal(treeRoot);
console.log(ans);