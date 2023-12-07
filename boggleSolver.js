const boggleBoard = [
    ["t","e","b","m"],
    ["i","g","h","a"],
    ["p","e","t","m"],
    ["h","d","b","l"]
]

const boggleSolver = (boggleBoard) => {

    let rowLength = 0
    const boggleBoardArr = []

    const checkTop = (index) => {
        const newIndex = index - rowLength
        return newIndex >= 0 ? newIndex : null
    }
    
    const checkBottom = (index) => {
        const newIndex = index + rowLength
        return newIndex ? newIndex : null
    }

    boggleBoard.map(currRow => {
        rowLength++
        currRow.map(currCell => {
            boggleBoardArr.push(currCell)
        })
    })
    console.log(checkTop(4,rowLength))
}

boggleSolver(boggleBoard)