function twoSum(arrayNum, n){
    let ind = []
    let occurences = 0


    for(let i = 0; i < arrayNum.length; i++){
        if(arrayNum[i] + arrayNum[i + 1] === n){
            occurences += 1  
            if(ind.length === 2){
                continue
            }
            ind.push(i)
            ind.push(i + 1)
            
        }
        
    }
    if (occurences > 1){
        ind.push(true)
    } else {
        ind.push(false)
    }
    console.log(ind)
    console.log(occurences)
}

twoSum([10, 2, 9, 3, 9, 10, 1, 6, 11, 1, 13, 12, 0, 9, 3], 12)