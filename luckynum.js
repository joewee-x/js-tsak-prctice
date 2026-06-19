function printForcast(arr) {
  let day = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]} degCel in ${(day += 1)} days`);
    // return `${arr[i]} degcelcius in day ${day += 1}`
  }
}
// let forcast = printForcast([17, 21, 23]);
// console.log(forcast)
// printForcast([17, 21, 23])
// printForcast([12, 5, -5, 0, 4])

// let markWeight = 78;
// let markHeight = 1.69

// let johnHeight = 92;
// let johnWeight = 1.95;

// let markBMI = 78 / 1.69 ** 2;
// console.log(`Mark's BMI ${markBMI}`)

// let johnBMI = 92 / 1.59 ** 2;
// console.log(`john's BMI ${johnBMI}`)

// let markHigherBMI = false;
// if(markBMI > johnBMI ){
//     markHigherBMI = true;
// }
// console.log(markHigherBMI)

// function BMI(weight1, height1, weight2, height2) {
//   markTotal = weight1 / height1 ** 2;
//   johnTotal = weight2 / height2 ** 2;

//   let details = markTotal > johnTotal ? true : false;
//   console.log(details);
//   console.log(`marks BMI ${markTotal} : john's BMI ${johnTotal}`);
// }
// BMI(78, 1.69, 92, 1.95);
// BMI(95, 1.88, 85, 1.76);


function calcTotal(cart, memStatus){
    let subTotal = 0
    for(let i = 0; i < cart.length; i++){
        subTotal += cart[i].price * cart[i].qty
    }
    if(subTotal >= 50000 && memStatus === 'gold'){
        subTotal *= 0.8
    } else if(subTotal >= 30000){
        if(memStatus === 'gold' || memStatus === 'silver')
        subTotal *= 0.85
    } else if(subTotal >= 20000){
        subTotal *= 0.9
    }
    // VAT
    subTotal *= 1.075;

    // shipping fee

    if(subTotal < 25000){
        subTotal += 1500
    }
    console.log(subTotal)
}
calcTotal([{price: 10000, qty: 3}, {price: 5000, qty: 2}], 'gold')
calcTotal([{price: 8000, qty: 1}])
