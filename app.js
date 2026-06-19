
// function checkSorted(numbers) {
//     let result = true

//     for (let i = 0; i < numbers.length; i++) {
//         if(numbers[i] < numbers[i + 1]) {
//             result = false
//         }
//     }

//     console.log(result)
// }


// checkSorted([2, 4, 6,7,9,11])
// checkSorted([4, 3, 5, 7, 8, 9])
// checkSorted([1, 2, 3, 4, 6, 5, 7])
// checkSorted([7, 6, 5, 4, 3, 2, 1])

// let voters = []

// for (let i = 0; i <= 1000000;i++) {
//     voters.push(i)
// }

// console.log(voters)
// voters.push(6)

// checkSorted(voters)
// function twoSum(numbers, n, n1) {
//     let res = []

//     for(let i = 0; i < numbers.length; i++) {
//         if (numbers[i] + numbers[i + 1] == n) {
//             // res.push(i),
//             // res.push(i + 1)
        
//             console.log(i, i + 1)      
//         }
//         continue
        

//         if (numbers[i] + numbers[i + 1] == n1) {
//             // res.push(i),
//             // res.push(i + 1)
//             console.log(i, i + 1)
//             // break
//         }
//     }

//     // console.log(res)
// }



// twoSum([0, 2, 8, 3, 5, 3, 9, 10], 8, 12)


// function exist(arrayNum, n){
//     let res = -1
//     for(i = 0; i < arrayNum.length; i++){
//         if(arrayNum[i] === n){
//             res = i
//         }
//     }

//     console.log(res)

// }

// exist([2, 4, 6, 7, 1, 8], 4)
let n = 5;
console.log(n, n++, n)
let num = 5
console.log(n, ++n, n)