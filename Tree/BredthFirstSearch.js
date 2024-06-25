import {treeRoot} from "../index.js"

// console.log(treeRoot);

/**
 * there have bredthFirstSearch algorithm which is also knows as levelOrderTraversal
 *   class Node{
        constructor(val = null){
            this.val = val;
            this.left = null;
            this.right = null;
        }
    }

    Tree is like...

                        27
                       /   \
                     13     92
                    /  \    / \
                   10  24  38  120


 */
// debugger

// *********** FIRST METHOR ************

// function levelOrderTraversal(root){
//     let myQueue = [];
//     myQueue.push(root);
    
//     while(myQueue.length !== 0){
//         let temp = myQueue.shift();
//         console.log(temp.val);
//         if(temp.left){
//             myQueue.push(temp.left);
//         }
//         if(temp.right){
//             myQueue.push(temp.right);
//         }
//     }
// }

// ************** SECOND METHOD ( recommended )***********

function levelOrderTraversal(root){
    if(!root) return [];
    let ans = [];
    let q = [root];

    while(q.length > 0){
        let s = q.length;
        let level = [];
        for(let i = 0; i< s; i++){
            let temp = q.shift();
            level.push(temp.val);

            if(temp.left) q.push(temp.left);
            if(temp.right) q.push(temp.right);
        }
        ans.push(level);
    }
    return ans;
}

let result = levelOrderTraversal(treeRoot);

console.log(result);