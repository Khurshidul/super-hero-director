import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Cart from '../Cart/Cart';
import Scientist from '../Scientist/Scientist';
import './Allscientist.css';
const Allscientist = () => {
    const [cart, setCart] = useState([]);
    const [allScientist, setAllScientist] = useState([]);
    useEffect(() => {
        fetch('./scientist.json')
            .then(res => res.json())
            .then(data => setAllScientist(data))
    }, []);
const handleAddToCart = scientist =>{
    const newCart = [...cart,scientist];
    setCart(newCart);

}
    return (
        <div className="all-scientist-container">
            <h1>Super human in the world...</h1>
            <h1>Select to Hire.!!!</h1>
            <div className="scientist-container">
                {
                    allScientist.map(scientist => <Scientist
                        key={scientist.name}
                        scientist={scientist}
                        handleAddToCart = {handleAddToCart}
                    ></Scientist>)
                }
            </div>

            <div className="cart-container">
                <h2>Cart's Detail</h2>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Allscientist;