// import React from "react";
import './Player.css'
const Player = (props) => {
    const { name, fifa_rating, assist, picture, market_price } = props.player;
    console.log(market_price)
    return (
        <div className="player">
            <img className="playerImage" src={picture} alt="" />
            <div className='playerInfo'>
                <div>
                    <h4>Name:{name}</h4>
                    <p>Ratings:{fifa_rating}</p>
                    <p>Asist:{assist}</p>
                    <p>market value:{market_price}M</p>
                </div>
                <button className='addToTeamBtn'>Add to Team</button>
            </div>
        </div>
    );
};

export default Player;