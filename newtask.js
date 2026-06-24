// function filter_list(arr){
//     let num = []
//     for(let i = 0; i <= arr.length; i++){
//         if(typeof arr[i] === 'string'){
//             num.push(arr[i])
//         }
//     }
//     return num
// }
// console.log(filter_list([2, 'dd', 'dff', 3, 4]))
function filter_list(arr){
   return arr.filter(word => typeof word === 'string')
}

// console.log(filter_list([2, 34, 'ddf']))

let person = {
    firstName: "GeeksforGeeks",
    lastName: "A Computer Science Portal for Geeks",
    rank: 43
};
let userId = "";
for (i in person) {
    userId += person[i];
    console.log(userId);
}

Symbol.iterator
