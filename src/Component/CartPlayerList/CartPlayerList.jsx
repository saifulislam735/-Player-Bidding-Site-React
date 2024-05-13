// import React from 'react';
import './CartPlayerList.css'
import { XMarkIcon } from '@heroicons/react/24/solid'

const CartPlayerList = (props) => {

    const { name, market_price } = props.p;
    const deletePlayer = props.deletePlayer;
    return (
        <div className="cartPlayerList">
            <span>{name}</span>
            <span> {market_price}M</span>
            <div style={{width:"25px",display:'flex',justifyItems:'center'}} onClick={() => deletePlayer(props.p.id)}>
                <XMarkIcon className="size-2 text-blue-500" />
            </div>
        </div>
    );
};

export default CartPlayerList;