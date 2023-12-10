const boggleBoard = [
    ["t","e","b","m"],
    ["i","g","h","a"],
    ["p","e","t","m"],
    ["h","d","b","l"]
]

const boggleSolver = (boggleBoard) => {

    let rowLength = 0
    const columnLength = boggleBoard.length
    const boggleBoardArr = []

    const checkTop = (index) => {
        const newIndex = index - rowLength
        return newIndex >= 0 ? newIndex : null
    }
    
    const checkBottom = (index) => {
        const newIndex = index + rowLength
        return newIndex < rowLength * columnLength ? newIndex : null
    }

    const checkLeft = (index) => {
        const newIndex = index - 1
        return newIndex
    }

    const checkRight = (index) => {
        const newIndex = index + 1
        return newIndex
    }

    boggleBoard.map(currRow => {
        rowLength++
        currRow.map(currCell => {
            boggleBoardArr.push(currCell)
        })
    })
    console.log(checkBottom(11))
}

boggleSolver(boggleBoard)