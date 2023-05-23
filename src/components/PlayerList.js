import React from "react"; //optional
import matchData from "../data/matchData";
import playerData from "../data/playerData";
import { preparePlayerData, addWinsToPlayers } from "../helpers/playerHelpers";
import Player from "./Player";

function PlayerList(props) {
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
  const onePlayer = parsedPlayerData[0];

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player
        gamerTag={onePlayer.gamerTag}
        firstName={onePlayer.firstName}
        lastName={onePlayer.lastName}
        wins={onePlayer.wins}
      />
    </section>
  );
}

export default PlayerList;
