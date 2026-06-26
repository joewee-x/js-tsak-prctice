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
// console.log(pali(-121))

let strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
    
};
// console.log(strStr("sadbutsad", "sad"))

let mergeTwoLists = function(list1, list2) {
    // let newList = [];
    // let join = list1.splice(0, 0, list2)
    // return newList.push(join)
    let arr1 = list1
    let arr2 = arr1.push(list2)
    let newArr = arr1.flat().sort((a, b) => a - b)
    return newArr
};

// console.log(mergeTwoLists([], [0]))
// function mergeSorted(arr1, arr2){
//     let arr1 = arr1.splice(arr1.length, 0, ...arr2);
//         return arr1 = arr2.sort((a, b) => a -b)
// }

// console.log(mergeSorted([1, 2, 3], [1, 3, 4, 5]))



function sortedlist(list1, list2){
   let newArr = list1.splice(list1.length, list1.length, list2)
    return list1.flat().sort((a, b) => a - b)
}

// console.log(sortedlist([1, 2, 4],[1, 3, 4, 5]))
const givenArray = [477, 8914, 40461, 599148];
const newArray = givenArray.map((n, ind, arr) => ({n , ind, arr}));
// console.log(newArray); 
// console.log(givenArray)
const usCities = [
  { name: 'New York', population: 8175133 },
  { name: 'Los Angeles', population: 3792621 },
  { name: 'Chicago', population: 2695598 },
  { name: 'Houston', population: 2099451 },
  { name: 'Philadelphia', population: 1526006 }
];   
// const newCity = usCities.filter(({population}) => population >= 2000000)
let interest = usCities.filter(user => ({...user, population : user.population >= 2000000}));

// console.log(interest)
let removeElement = function(nums, val) {
    let newArr = [];
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] !== val){
            newArr.push(nums[i])

        }
    }
    return newArr
    
};
console.log(removeElement([0,1,2,2,3,0,4,2], 2))

