const boggleBoard = [
    ["t","e","b","m"],
    ["i","g","h","a"],
    ["p","e","t","m"],
    ["h","d","b","l"]
]

const boggleSolver = (boggleBoard) => {
    const newBoard = boggleBoard.map((row,i) => {
        return row.map((cell,j) => {
            return {
                cellValue:cell,
                isUnused:true,
                x:j,
                y:i
            }
        })
    })
    
}

boggleSolver(boggleBoard)