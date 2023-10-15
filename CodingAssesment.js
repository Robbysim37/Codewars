function getSequenceSum(i, j, k) {
    const ij = j - i - 1
    const kj = j - k - 1
    
    
    let itoj = 0
    for(let iteration = 0; iteration < ij; iteration++){
        itoj += iteration + 1
    }
    
    let ktoj = 0
    for(let iteration = 0; iteration < kj; iteration ++){
        ktoj += iteration + 1
    }
    
    ktoj += kj * k
    itoj += ij * i
    
    const result = i + itoj + j + ktoj + k
    return result
}







function numPlayers(k, scores) {
    // Write your code here
    scores = scores.sort((a,b) => {
        return b - a
    })
    
    scores = scores.filter(currS => {
        if(currS === 0){
            return false
        }
        return true
    })
    
    let currRank = 0
    const placement = scores.map((currS,i) => {
        if(currS === scores[i - 1]){
        }else{
            currRank = i + 1
        }
        return currRank
    })
    
    let result = 0
    for(let i = 0; i < placement.length; i++){
        if(placement[i] <= k){
            result++
        }
    }
    return result
}