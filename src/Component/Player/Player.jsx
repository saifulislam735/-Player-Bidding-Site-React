// import React from "react";
import './Player.css'
const Player = (props) => {
    const { name, fifa_rating, assist, picture, market_price, goal } = props.player;
    const addPlayerToCart = props.addPlayerToCart;
    return (
        <div className="player">
            <img className="playerImage" src={picture} alt="" />
            <div className='playerInfo'>
                <div>
                    <h4>Name:{name}</h4>
                    <p>Ratings:{fifa_rating}</p>
                    <p>Goal:{goal}</p>
                    <p>Asist:{assist}</p>
                    <p>market value:{market_price}M</p>
                </div>
                <button onClick={() => { addPlayerToCart(props.player) }} className='addToTeamBtn'>Add to Team</button>
            </div>
        </div>
    );
};

export default Player;  