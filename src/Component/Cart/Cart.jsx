import { useState } from 'react';
import CartPlayerList from '../CartPlayerList/CartPlayerList';
import './Cart.css'

const Cart = (props) => {
    //total price showing
    const selectedPlayer = props.selectedPlayer;
    let totalPrice = 0;
    for (const player of selectedPlayer) {
        totalPrice = totalPrice + player.market_price;
    }

    //Button cliked cofimation
    const [text, setText] = useState("Deal Done?");
    const handleClick = () => {
        setText("Done");
    };

    const deletePlayer = props.deletePlayer;

    // console.log(selectedPlayer)
    return (
        <div className="cart">
            <h3 className='CartHead'>Make You Team</h3>
            <div>
                <p style={{ fontWeight: 500 }}>Player list</p>
            </div>
            <div className='addPlayerToCart'>
                {
                    selectedPlayer.map(p => <CartPlayerList p={p} key={p.id} deletePlayer={deletePlayer}></CartPlayerList>)
                }
            </div>
            <div className='cartCalculation'>
                <p style={{ fontWeight: 500 }}>Total price: {totalPrice}M</p>
            </div>
            <button onClick={handleClick} className='cartDoneBtn'>{text}</button>
        </div>
    );
};

export default Cart;