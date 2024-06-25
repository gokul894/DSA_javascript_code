import { treeRoot } from "../index.js";
/**
 * @param {*} root 
 * @return
 * 
 *     Tree is like...

                        27
                       /   \
                     13     92
                    /  \    / \
                   10  24  38  120

 */
let c = 0;

function findLeaf(root){
    if(!root){
        return;
    }
    if(!root.left && !root.right){
        c++;
    }

    findLeaf(root.left);
    findLeaf(root.right);

    return c;
}

let result = findLeaf(treeRoot);
console.log(result);