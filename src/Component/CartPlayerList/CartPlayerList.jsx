// import React from 'react';
import './CartPlayerList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';//faCoffee  can change

const CartPlayerList = (props) => {
    const { name, market_price } = props.p;
    return (
        <div className="cartPlayerList">
            <span>{name}</span>
            <span> {market_price}M</span>
            <FontAwesomeIcon icon={faX} />
        </div>
    );
};

export default CartPlayerList;