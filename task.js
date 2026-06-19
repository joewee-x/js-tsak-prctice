function findMissingNumber(numbers){
   let index = numbers.length - 1

    for( let i = 0; i <= index; i++ ){

        let res = numbers[i+1] - numbers[i]

        if (res !== 1) {
            if(res !== NaN)
                console.log(true)            
        }

        console.log(numbers[i])

    }

}



findMissingNumber([1, 2, 3, 4, 5,7])