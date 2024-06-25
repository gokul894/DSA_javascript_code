
/**
 * Here we are emplimenting the graph algo structure..
 * there have tree type of Graph like
 * Directed Graph, Undirected Graph, directedAndUndrected Graph
 */


class Graph {  //i'm exporting this class couse i wanna reuse it in anothor algorithem.. 
    constructor(){
        this.data = {};
    }

    addEdge(virtex1, virtex2, directed){
        // directed:boolean means -> is this edge is directed or not

        // directed true -> 1;
        // directed false -> 0;


        if(virtex1 in this.data){
            this.data[virtex1].push(virtex2);
        }else{
            this.data[virtex1] = [virtex2];
        }

        if(directed === 0){
            if(virtex2 in this.data){
                this.data[virtex2].push(virtex1);
            }else{
                this.data[virtex2] = [virtex1];
            }
        }
        
    }

    print(){
        return this.data;
    }

    // this is for reset the graph
    reset(){
        this.data = {};
    }

}

let g1 = new Graph();
// testing with some value for undirected
// console.log("--------------------- undirected graph ------------------------------")

g1.addEdge(1,3,0)
g1.addEdge(3,4,0)
g1.addEdge(4,5,0)
g1.addEdge(4,2,0)
g1.addEdge(2,5,0)
g1.addEdge(5,6,0)
g1.addEdge(2,6,0)



export default g1.data;
// const undirectedGraph = g1.print();

// console.log(undirectedGraph);

// g1.reset();

// // testing with some value for directed
// console.log("----------------------- directed graph -------------------------------")


// g1.addEdge(1,3,1)
// g1.addEdge(1,2,1)
// g1.addEdge(3,4,1)
// g1.addEdge(5,4,1)
// g1.addEdge(2,5,1)
// g1.addEdge(2,4,1)
// const directedGraph = g1.print();
// console.log(directedGraph);
// g1.reset()

// // testing with some value for directed and not directed
// console.log("------------------- directed and undirected graph --------------------")


// g1.addEdge(1,3,1)
// g1.addEdge(1,2,0)
// g1.addEdge(3,4,1)
// g1.addEdge(5,4,0)
// g1.addEdge(2,5,1)
// g1.addEdge(2,4,0)

// const directedAndUndirectedGraph = g1.print();
// console.log(directedAndUndirectedGraph);


// console.log('-----------------')