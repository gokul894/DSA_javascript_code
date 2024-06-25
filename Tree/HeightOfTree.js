import { treeRoot } from "../index.js";
// console.log(treeRoot)

/**
 * 
 * @param {*} root 
 * @returns 
 * 
 *     Tree is like...

                        27
                       /   \
                     13     92
                    /  \    / \
                   10  24  38  120

 */

function Height(root){
    if(!root){
        return 0;
    }

    let leftHeight = Height(root.left);
    let rightHeight = Height(root.right);

    return leftHeight > rightHeight ? leftHeight + 1: rightHeight + 1;
}

let result = Height(treeRoot);

console.log(result)