// find duplicates

const duplicates = (arr) => {
    let maxCount = 0;
    let maxItem = [];

    for(let i = 0; i < arr.length; i++){
        let count = 0;
        for(let j = 0; j < arr.length; j++){
            if(arr[i] === arr[j]){
                count++
            }
        }
        if(count > maxCount){
            maxCount = count;
            maxItem = [arr[i]]
        }else if(maxCount === count){
            let exist = false;
            for(let k = 0; k < maxItem.length; k++){
                if(maxItem[k] === arr[i]){
                    exist = true
                }
            }
            if(!exist){
                maxItem.push(arr[i])
            }
        }
    }
    return maxItem
}
// console.log(duplicates([4, 4, 3, 4, 'for', 3, 'for', 'for', 'for', 4]))
let isPalindrome = function(x) {
    let reversed = String(x).split('').reverse().join;
    return x === reversed
    
};
// console.log(isPalindrome(233))
let pali = (x) => {
    let word = String(x)
    let rev = ''
    for(let i = word.length-1; i >= 0; i--){
        rev += word[i]
    }
    if(word === rev){
        return true
    }else{
        return false
    }
}
console.log(pali(-121))