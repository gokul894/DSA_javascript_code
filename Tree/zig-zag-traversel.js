
import { treeRoot } from "../index.js";
// console.log(treeRoot)

function zigZagTraversel(root){
    if(!root) return [];
    let ans= [];
    let q= [root];
    let ltr = true;

    while(q.length > 0){
        let s = q.length;
        let level = [];

        for(let i = 0; i< s; i++){
            let temp = q.shift();
            let idx = ltr ? i : (s-1-i);
            level[idx] = temp.val;

            if(temp.left) q.push(temp.left);
            if(temp.right) q.push(temp.right);

        }
        ltr = !ltr;
        ans.push(level);
    }
    
    return ans;

}

let resut = zigZagTraversel(treeRoot);

console.log(resut)