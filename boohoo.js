function boohoo(data){
    if(data === true || data === false){
        console.log(true)
    }else {
        console.log(false)
    }
}

// boohoo('true') 
function canVote(age){
    if(age > 18){
        console.log('Yes')
    }else {
        console.log('No')
    }
}
// canVote(14)

function gradeCalculate(score){
    if(score >= 90 && score <=100){
        return 'A'
    }else if (score >= 80 && score <=89 ){
        return 'B'
    }else if (score >= 70 && score <=79 ){
        return 'C'
    }else if (score >= 60 && score <=69 ){
        return 'D'
    }else if (score >= 0 && score <=59 ){
        return 'F'
    }else{
        return 'Invalid Score'
    }
}
let grade = gradeCalculate(80)
// console.log(grade)

function getPriceTicket(age){
    if(age < 0){
        return 'Invalid Age'
    }
    if(age <= 5){
        return 'Free ticket'
    }else if (age <= 17){
        return 'Ticket Price N500'
    }else if (age<= 59){
        return 'Ticket Price N1500'
    }else{
        return 'Ticket Price N800'
    }
}
// console.log(getPriceTicket(3))

function validPin(pin){

    for(let i = 0; i<= pin.length; i++){
        if(pin.length === 4){
            if(pin[i] < 0 || pin[i]>9){
                return false
            }else{
                return true
            }
        }
            
    }
}

console.log(validPin('1e23'))


function triangle(a, b, c){
    if(a + b > c || a + c > b || c + b > a){
        if(a + b > c){
            return 'Equilateral triangle'
        }
    }else {
        return 'Invalid triangle'
    }
}
// console.log(triangle(0, 0, 1))