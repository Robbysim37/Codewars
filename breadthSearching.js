
node1 = {value:1,left:null,right:null}
node3 = {value:3,left:null,right:null}
node4 = {value:4,left:null,right:null}
node5 = {value:5,left:null,right:null}
node8 = {value:8,left:node1,right:node3}
node9 = {value:9,left:node4,right:node5}
node2 = {value:2,left:node8,right:node9}



function treeByLevels (rootNode) {
    if(rootNode === null){
        return []
    }

    const queue = [rootNode]
    const order = []

    while(queue.length > 0){

        const pointer = queue[0]
        order.push(pointer.value)

        if(pointer.left){
            queue.push(pointer.left)
        }
        if(pointer.right){
            queue.push(pointer.right)
        }

        queue.shift()
    }

    return order
}

console.log(treeByLevels(node2))