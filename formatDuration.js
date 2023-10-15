function formatDuration (incomingSeconds) {

    if(incomingSeconds == 0){
        return "now"
    }

    const seconds = incomingSeconds % 60
    let minutes = Math.floor(incomingSeconds / 60)
    let hours = Math.floor(minutes / 60)
        minutes = minutes - hours * 60
    let days = Math.floor(hours / 24) 
        hours = hours - days * 24
    const years =  Math.floor(days / 365)
        days = days - years * 365

    let stringArr = []

    years > 0 ? stringArr.push(`${years} year${years > 1 ? "s" : ""}`) : null
    days > 0 ? stringArr.push(`${days} day${days > 1 ? "s" : ""}`) : null
    hours > 0 ? stringArr.push(`${hours} hour${hours > 1 ? "s" : ""}`) : null
    minutes > 0 ? stringArr.push(`${minutes} minute${minutes > 1 ? "s" : ""}`) : null
    seconds > 0 ? stringArr.push(`${seconds} second${seconds > 1 ? "s" : ""}`) : null

    if(stringArr.length > 1){
        const lastTwo = stringArr.slice(-2)
        const endingstring = lastTwo[0] +" and "+lastTwo[1]
        stringArr.pop()
        stringArr.pop()
        stringArr.push(endingstring)
    }

    return stringArr.join(", ")
  }

  console.log(formatDuration(0))