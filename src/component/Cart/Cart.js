import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    console.log(cart);

 let total = 0;
 let quantity = 0;
 let shipping = 0;

for(const products of cart){
    quantity = quantity+products.quantity;
   total = total+products.price;
   shipping = shipping+products.shipping;
 
}
let taxCalculate = (total * 0.1).toFixed(2);
let GrandTotal = total+shipping+parseFloat(taxCalculate);
    return (
        <div>
            <p>quantity: {cart.length}</p>
            <h5>Total Price: ${total}</h5>
            <p>shipping Cost ${shipping}</p>
            <p>Vat : ${taxCalculate}</p>
            <h5>Grand Total: ${(GrandTotal).toFixed(2)}</h5>
        </div>
    );
};

export default Cart;