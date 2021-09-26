import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Scientist.css';
const Scientist = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const rightArrow = <FontAwesomeIcon icon={faArrowRight}/>
    const {img,name,department,invented,salary,birthPlace} = props.scientist;
    return (
        <div className="details">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Birth Place: {birthPlace}</p>
            <p>Invented: {invented}</p>
            <p>Department: {department}</p>
            <p>Price: ${salary}</p>
        <button onClick={()=>props.handleAddToCart( props.scientist)} className="cart-btn" >{rightArrow}  {element} Add to cart</button>
       
        </div>
    );
};

export default Scientist;