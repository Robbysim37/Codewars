

function pickPeaks(arr){
    const peaksObj = {
        pos:[],
        peaks:[],
    }
    let potentialPeak = null

    for(i = 1; i < arr.length - 1; i++){
        if(arr[i-1] < arr[i] && arr[i+1] < arr[i]){
            peaksObj.pos.push(i)
            peaksObj.peaks.push(arr[i])
        }
        if(arr[i] < arr[i + 1] && potentialPeak){
            potentialPeak = null
        }
        if(arr[i] > arr[i + 1] && potentialPeak){
            peaksObj.pos.push(potentialPeak)
            peaksObj.peaks.push(arr[potentialPeak])
            potentialPeak = null
        }
        if(arr[i] === arr[i + 1] && arr[i - 1] < arr[i]){
            potentialPeak = i
        }
    }

   return peaksObj
}

console.log(pickPeaks([1,3,1,4,7,8,8,7]))