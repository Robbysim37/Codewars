const minimumValue = (incomingArr) => {
    let lowestSum = 0
    incomingArr.reduce((accu,curr) => {
        if(accu+curr < lowestSum){
            lowestSum = accu + curr
        }
       return accu + curr
    },0)
    return Math.abs(lowestSum) + 1
}

console.log(minimumValue([-4,3,2,1]))