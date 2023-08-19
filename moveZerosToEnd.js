const moveZeros = (arr) => {
    let zerosToPush = 0
    const resultArr = arr.filter(curr => {
        if(curr !== 0){
            return true
        }else{
            zerosToPush++
            return false
        }
    })

    for(i=0; i < zerosToPush; i++){
        resultArr.push(0)
    }
    
    return resultArr
  }

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))