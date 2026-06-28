const products = [
  { name: "Phone", price: 500, inStock: true },
  { name: "Laptop", price: 1200, inStock: false },
  { name: "Mouse", price: 50, inStock: true },
  { name: "Keyboard", price: 100, inStock: true }
];

const filteredProducts = products.filter(({inStock}) => inStock)
const bonus = products.map(({price}) => price * 0.8)
// console.log(bonus)
// console.log(filteredProducts)



const words = [
  "apple",
  "banana",
  "kiwi",
  "grape",
  "orange"
];
const wordsFilter = words.filter(word => word.length > 5)
// console.log(wordsFilter)

const poultry = {
  chickens : 300,
  eggs : 1000,
  location : 'Jos'
}

// const {chickens} = poultry;
function chick({eggs}){
  return `The poultry has ${eggs} eggs`

}
// console.log(chick(poultry))

const prods = [
  { name: "Laptop", price: 500000, qty: 3 },
  { name: "Phone", price: 250000, qty: 5 },
  { name: "Tablet", price: 180000, qty: 4 }
];

const totValueEach = prods.map((prod) => {
  return {...prod, totalValue : prod.price * prod.qty}
})
console.log(totValueEach)