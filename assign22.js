let stuDb = [];

function addStudent(name, gender, regNo, level, feesAmount){
    let student = {
        name : name,
        gender : gender,
        regNo : regNo,
        level : level,
        feesAmount : feesAmount,
        paidFees : false,
        isGraduate : false,
        isSuspended : false,
        isExpelled : false
    }

    if(student.feesAmount >= 45000){
        student.paidFees = true
    }

    stuDb.push(student)
}
addStudent('joe', 'm', '5005UA', 100, 45000)
addStudent('joy', 'f', '3005UA', 100, 45000)
addStudent('john', 'f', '6005UA', 200, 5000)
addStudent('faith', 'f', '4005UA', 300, 4000)
addStudent('philip', 'm', '7005UA', 400, 4000)
// console.log(stuDb)

// remove a student
// function removeStudent(studentID){
//    for(let i = 0; i < stuDb.length; i++){
//     if(stuDb[i].regNo === studentID){
//         delete stuDb[i]
//     }
//    }

// }
// removeStudent('5005UA')
// console.log(stuDb)

// check if fees is paid
function feesPaid (studentID){
    for(let i = 0; i < stuDb.length; i++){
        let student = stuDb[i]
        if(student.regNo === studentID){
            if(student.paidFees){
                console.log(`The student ${student.name} has paid his/her fees`)
            }else{
                console.log(`The student ${student.name} is yet to pay his/her fees`)  
            }
        }
    }
}
// feesPaid('6005UA')

// suspend a student 
function suspendStudent(studentID){
    for(i = 0; i < stuDb.length; i++){
        let student = stuDb[i]
        if(student.regNo === studentID){
            student.isSuspended = true
            console.log(`The student ${student.name} is now suspended`)
        }
    }
}
// suspendStudent('6005UA')

// expel a student 
function suspendStudent(studentID){
    for(i = 0; i < stuDb.length; i++){
        let student = stuDb[i]
        if(student.regNo === studentID){
            student.isSuspended = true
            console.log(`The student ${student.name} is now suspended`)
        }
    }
}
// suspendStudent('6005UA')


// Graduate student

function graduateStudent(studentID){
    for(let i = 0; i < stuDb.length; i++){
        let student = stuDb[i]
        if(student.regNo === studentID){
            if(student.level === 400){
                student.level += 100
                console.log(`The student ${student.name} with Reg No ${student.regNo} has been graduated successfully`)
            }else {
                console.log(`The student ${student.name} is not eligible to graduate`)
            }

        } 
            
        }
    }

graduateStudent('7005UA')
// console.log(stuDb)






















// let arr1 =[20, 21, 23, 25, 26, 28, 31, 33];

// for(let i = 0; i < arr1.length - 1; i++ ){
//     if(arr1[i] + 1 !== arr1[i + 1]){
//         console.log(arr1[i] + 1)
//     }
// }

// let word = 'elephantkeal'
// let vowel = 'aeiou'
// let vowelNum = 0;
// for(let i = 0; i < word.length; i++){
//     for(let j = 0; j < vowel.length; j++){
//         if(word[i] === vowel[j]){
//             vowelNum += 1
//             console.log(word[i])
//         }
//     }

// }
// console.log(vowelNum)

// let arr1 = [2, 3, 4, 5, 9]
// let arr2 = [2, 4, 4, 5]
// let arr1Sum = 0
// let arr2Sum = 0

// for(let i = 0; i < arr1.length; i++){
//     arr1Sum += arr1[i]
// }
// console.log(arr1Sum)

// for(let j = 0; j < arr2.length; j++){
//     arr2Sum += arr2[j]
// }
// console.log(arr2Sum)

// if(arr1Sum > arr2Sum){
//     console.log(arr1)
// }else{
//     console.log(arr2)
// }

