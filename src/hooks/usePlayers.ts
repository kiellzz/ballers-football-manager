import { useEffect, useState } from "react";
import { players as initialPlayers } from "../data/PlayersData";
import type { Player } from "../types/PlayersType";

const PLAYERS_VERSION = "v4";

export function usePlayers() {
  const [players, setPlayers] = useState<Player[]>(() => {
    const savedPlayers = localStorage.getItem("players");
    const savedVersion = localStorage.getItem("players_version");

    if (savedPlayers && savedVersion === PLAYERS_VERSION) {
      return JSON.parse(savedPlayers);
    }

    localStorage.setItem("players_version", PLAYERS_VERSION);
    return initialPlayers;
  });

  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  function addPlayer(player: Player) {
    setPlayers((prev) => [player, ...prev]);
  }

  function deletePlayer(id: string) {
    setPlayers((prev) => prev.filter((player) => player.id !== id));
  }

  function updatePlayer(updatedPlayer: Player) {
    setPlayers((prev) =>
      prev.map((player) =>
        player.id === updatedPlayer.id ? updatedPlayer : player
      )
    );
  }

  return {
    players,
    addPlayer,
    deletePlayer,
    updatePlayer,
  };
}