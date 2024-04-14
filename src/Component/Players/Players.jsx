import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";
import './Players.css'
import Cart from "../Cart/Cart";
const Players = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    const [selectedPlayer, setSelectedPlayer] = useState([]);
    const addPlayerToCart = (player) => {
        //find the wheather the new selected player is exist in state or not
        let value = selectedPlayer.find(p => p.id == player.id)
        //setting only new player only if new player selected
        if (!value) {
            let newPlayerList = [...selectedPlayer, player]
            setSelectedPlayer(newPlayerList)
        }
        else {
            //alert for already existed player in team
            const message = player.name + "is already in team";
            alert(message)
        }
    }
    return (
        <div className="cartNPlayer">
            <div className="displayPlayer">
                {
                    players.map(p => <Player key={p.key} player={p} addPlayerToCart={addPlayerToCart}></Player>)
                }
            </div>
            <div className="">
                <Cart selectedPlayer={selectedPlayer} ></Cart>
            </div>
        </div>
    );
};

export default Players;