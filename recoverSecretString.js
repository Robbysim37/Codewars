const substrings = [
    ['t','u','p'],
    ['w','h','i'],
    ['t','s','u'],
    ['a','t','s'],
    ['h','a','p'],
    ['t','i','s'],
    ['w','h','s']
]


const recoverString = (triplets) => {
    let row1 = triplets.map(currEl => {
        return currEl[0]
    })
    let row2 = triplets.map(currEl => {
        return currEl[1]
    })
    let row3 = triplets.map(currEl => {
        return currEl[2]
    })

    let i = 0
    const result = []
    while(!row1.every(curr => curr === 0)){
        if(!row2.includes(row1[i]) && !row3.includes(row1[i])){
            const letter = row1[i]
            result.push(letter)
            row1 = row1.map((currletter,currIndex) => {
                if(currletter === letter){
                    return row2[currIndex]
                }else{
                    return currletter
                }
            })
            row2 = row2.map((currletter,currIndex) => {
                if(currletter === row1[currIndex]){
                    return row3[currIndex]
                }else{
                    return currletter
                }
            })
            row3 = row3.map((currletter,currIndex) => {
                if(currletter === row2[currIndex]){
                    return 0
                }else{
                    return currletter
                }
            })
            i = 0
        }else{
            i++
        }
    }
    return result.join("")
}

console.log(recoverString(substrings))