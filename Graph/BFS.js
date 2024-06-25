/**
 * Here the Breadth-First Search(BFS) Algorithm in Graph
 * So there we have a function 
 * 
 */

import graph from '../Graph/graph.js' // importing here a graph ajacencylist type

/**
 * console.log(graph)  // output: {
                                '1': [ 3 ],
                                '2': [ 4, 5, 6 ],
                                '3': [ 1, 4 ],
                                '4': [ 3, 5, 2 ],
                                '5': [ 4, 2, 6 ],
                                '6': [ 5, 2 ]
                                }
 */

let ans = [];
// debugger

function bfs(graph, src){
    let visisted = new Set();
    let queue = [src];

    visisted.add(src);

    while(queue.length > 0){
        let temp = queue.shift();
        ans.push(temp);

        for(let curr of graph[temp]){
            if(!visisted.has(curr)){
                visisted.add(curr);
                queue.push(curr);
            }
        }
    }
}
bfs(graph, 1);
console.log(ans)