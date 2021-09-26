import React from 'react';
import './Cart.css';
const Cart = (props) => {
  const {cart} = props;
  const totalReducer = (previous, scientist) => previous + scientist.salary;
    const total = cart.reduce(totalReducer,0);
   
    return (
        <div>
            <h4>Order Photos:{props.cart.length}</h4>
            <h2>Total Amount: ${total}</h2>
           
         
        </div>
    );
};

export default Cart;