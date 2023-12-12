const boggleBoard = [
    ["t","e","b","m"],
    ["i","g","h","a"],
    ["p","e","t","m"],
    ["h","d","b","l"]
]

const boggleSolver = (boggleBoard,word) => {

    
    const rowLength = boggleBoard[0].length
    const columnLength = boggleBoard.length
    const boggleBoardArr = []
    const letters = word.split("")

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
        return index % rowLength !== 0 ? newIndex : null
    }

    const checkRight = (index) => {
        const newIndex = index + 1
        return index % rowLength !== rowLength - 1  ? newIndex : null
    }

    const checkTopLeft = (index) => {
        const leftIndex = checkLeft(index)
        return leftIndex ? checkTop(leftIndex) : null
    }

    const checkTopRight = (index) => {
        const rightIndex = checkRight(index)
        return rightIndex ? checkTop(rightIndex) : null
    }

    const checkBottomLeft = (index) => {
        const leftIndex = checkLeft(index)
        return leftIndex ? checkBottom(leftIndex) : null
    }

    const checkBottomRight = (index) => {
        const rightIndex = checkRight(index)
        return rightIndex ? checkBottom(rightIndex) : null
    }

    boggleBoard.map(currRow => {
        currRow.map(currCell => {
            boggleBoardArr.push({
                value:currCell,
                checked:false
            })
        })
    })

    letters.forEach(currLetter => {
        boggleBoardArr.forEach((currCell,index) => {

        })
    })
}

boggleSolver(boggleBoard,"t")