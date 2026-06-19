Here’s a question that mixes functions + nested control flow:

### Problem: Shopping Cart Discount Calculator

Write a function calculateTotal(cart, memberStatus) that calculates the final price after applying discounts and fees.

Input:
- cart: array of objects like [{name: "Shirt", price: 5000, qty: 2}, {name: "Shoes", price: 12000, qty: 1}]
- memberStatus: "regular", "silver", or "gold"

Rules:

1. Subtotal: Sum up price * qty for all items
2. Discounts - apply only the highest one that qualifies:

   - If subtotal ≥ 50000 AND memberStatus is "gold": 20% off
   - If subtotal ≥ 30000 AND memberStatus is "silver" or "gold": 15% off  
   - If subtotal ≥ 20000: 10% off
   - Else: 0% off
3. Shipping fee:

   - Free if subtotal after discount ≥ 25000
   - ₦1500 otherwise
4. Tax: Add 7.5% VAT on the amount after discount, before shipping

Return: A rounded integer of the final total

Examples:
const cart1 = [{price: 10000, qty: 3}, {price: 5000, qty: 2}]
calculateTotal(cart1, "gold") 
// Subtotal 40000, 15% off = 34000, VAT 2550 = 36550, shipping free = 36550

const cart2 = [{price: 8000, qty: 1}]
calculateTotal(cart2, "regular")
// Subtotal 8000, no discount, VAT 600 = 8600, shipping 1500 = 10100
Hint: 
1. Use a for...of loop to get subtotal
2. Use if/else if chain for discounts - order matters
3. Break it into steps: subtotal → discount → tax → shipping