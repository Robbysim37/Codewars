function solution(number){
  if(number < 0){
    return 0
  }
  const nums = []
  for(i=0;i<number;i++){
    if(i % 3 === 0 || i % 5 === 0){
        nums.push(i)
    }
  }
  return nums.reduce((accu,curr) => {
    return accu + curr
  })
}