import CartPlayerList from '../CartPlayerList/CartPlayerList';
import './Cart.css'
const Cart = (props) => {
    const selectedPlayer = props.selectedPlayer;
    for (const player of selectedPlayer) {
        console.log(player);
    }
    // console.log(selectedPlayer)
    return (
        <div className="cart">
            <h3 className='CartHead'>Make You Team</h3>
            <div>
                <p>Player list</p>
            </div>
            <div className='addPlayerToCart'>
                {
                    selectedPlayer.map(p => <CartPlayerList p={p} key={p.id}></CartPlayerList>)
                }
            </div>
        </div>
    );
};

export default Cart;