// accepts two arrays
function arrSum(arr1, arr2){
    let arr1Sum = 0
    let arr2Sum = 0

    for(let i = 0; i < arr1.length; i++){
        arr1Sum += arr1[i]
    }

    for(let j = 0; j < arr2.length; j++){
        arr2Sum += arr2[j]
    }

    if(arr1Sum > arr2Sum){
        console.log(arr1)
    }else {
        console.log(arr2)
    }

    console.log(`arrr 1 sum : ${arr1Sum}, arr 2 sum : ${arr2Sum}`)
}
// arrSum([2, 3, 34, 30], [45, 30, 2, 2])

// 3

function missingNum(arr){
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] + 1 !== arr[i + 1]){
            console.log(arr[i] + 1)
        }
    }
}
missingNum([1, 3, 5, 7])



// 4
function vowelCount(word){
    word = word.toLowerCase()
    let vowel = 'aeiou'
    let countVowel = 0
    for(let i = 0; i < word.length; i++){
        for(let j = 0; j < vowel.length; j++){
            if(word[i] === vowel[j]){
                countVowel++

            }
        }
    }
    console.log(countVowel)

}

// vowelCount('Elephant') 






