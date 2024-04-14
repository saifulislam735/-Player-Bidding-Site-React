// import React from 'react';
import './CartPlayerList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';//faCoffee  can change

const CartPlayerList = (props) => {

    const { name, market_price } = props.p;
    const deletePlayer = props.deletePlayer;
    return (
        <div className="cartPlayerList">
            <span>{name}</span>
            <span> {market_price}M</span>
            <div onClick={() => deletePlayer(props.p.id)}>
                <FontAwesomeIcon icon={faX} />
            </div>
        </div>
    );
};

export default CartPlayerList;