function pathFinder(maze,pointers){
    if(typeof maze === "string"){
        const dimension = Math.sqrt(maze.length)
        maze = maze.split("")
        const mazeConversion = []
        let index = 0
        for(i = 0; i < dimension; i++){
            const row = []
            for(j = 0; j < dimension; j++){
                row.push(maze[index])
                index++
            }
            mazeConversion.push(row)
        }
        maze = mazeConversion
    }
    const target = {x:maze.length-1,y:maze[maze.length - 1].length - 1}
    const newPointers = []
    if(!pointers){      
        pointers = [{x:0,y:0}]
    }
    if(pointers.length === 0){
        return false
    }

    const checkTarget = pointers.reduce((accu,curr) => {
        if(accu === true){
            return true
        }
        if(curr.x === target.x && curr.y === target.y){
            return true
        }
        return false
    },false)

    if(checkTarget === true){
        return true
    }

    pointers.forEach(currElement => {
        maze[currElement.y][currElement.x] = "W"

        let right = maze[currElement.y][currElement.x + 1]

        let down = ""

        if(maze[currElement.y + 1]){
            down = maze[currElement.y + 1][currElement.x]
        }

        let left = maze[currElement.y][currElement.x - 1]

        let up = ""

        if(maze[currElement.y - 1]){
            up = maze[currElement.y - 1][currElement.x]
        }

        if(right === ".") {
            maze[currElement.y][currElement.x+1] = "W"
            newPointers.push({y:currElement.y,x:currElement.x+1})
        }
        if(down === "."){
            maze[currElement.y + 1][currElement.x] = "W"
            newPointers.push({y:currElement.y + 1,x:currElement.x})
        } 
        if(left === "."){
            maze[currElement.y][currElement.x-1] = "W"
            newPointers.push({y:currElement.y,x:currElement.x-1})
        } 
        if(up === "."){
            maze[currElement.y - 1][currElement.x] = "W"
            newPointers.push({y:currElement.y-1,x:currElement.x})
        } 
    });

    return pathFinder(maze,newPointers)

}

console.log(pathFinder(".....W.W."))