import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";
import './Players.css'
const Players = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    return (
        <div className="cartNPlayer">
            <div className="displayPlayer">
                {
                    players.map(p => <Player key={p.key} player={p}></Player>)
                }
            </div>
            <div className="cart">
                <p>Cart</p>
            </div>
        </div>
    );
};

export default Players;