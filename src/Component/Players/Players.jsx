import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";
import './Players.css'
import Cart from "../Cart/Cart";
import toast, { Toaster } from 'react-hot-toast';
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
        if (selectedPlayer.length < 11) {
            if (!value) {
                let newPlayerList = [...selectedPlayer, player]
                setSelectedPlayer(newPlayerList)
                const message = player.name + " added in the team";
                toast.success(message)
            }
            else {
                //alert for already existed player in team
                if (!value) {
                    let newPlayerList = [...selectedPlayer, player]
                    setSelectedPlayer(newPlayerList)
                }
                else {
                    //alert for already existed player in team
                    const message = player.name + " is already in team";
                    toast.error(message);
                }
            }
        }
        else {
            const message = player.name + " cannot be added" + " already 11 player selected";
            toast.error(message);
        }
    }


    const deletePlayer = (id) => {
        console.log('cliked id', id)
        const filteredPlayer = selectedPlayer.filter(pl => pl.id !== id);
        setSelectedPlayer(filteredPlayer);
    }

    return (
        <div className="cartNPlayer">
            <div className="displayPlayer">
                {
                    players.map(p => <Player key={p.key} player={p} addPlayerToCart={addPlayerToCart}></Player>)
                }
            </div>
            <div className="">
                <Cart deletePlayer={deletePlayer} selectedPlayer={selectedPlayer} ></Cart>
            </div>
            <Toaster />
        </div>
    );
};

export default Players;