import { getPlayerImage } from "../utils/getPlayerImage";
import { playHover, playSound } from "../utils/sound";
import type { Player } from "../types/PlayersType";

type PlayerCardProps = {
  player: Player;
  onEdit: (player: Player) => void;
  onDelete: (id: string, nome: string) => void;
  hoverSound: string;
  confirmSound: string;
};

export default function PlayerCard({
  player,
  onEdit,
  onDelete,
  hoverSound,
  confirmSound,
}: PlayerCardProps) {
  const defaultImage = `${import.meta.env.BASE_URL}players/default.webp`;
  const playerImage = player.imagem || getPlayerImage(player.nome);

  return (
    <div className="player-card" onMouseEnter={() => playHover(hoverSound)}>
      <div
        className={`overall-badge ${
          player.overall >= 90
            ? "elite"
            : player.overall >= 85
            ? "great"
            : "good"
        }`}
      >
        {player.overall}
      </div>

      <div className="player-image-wrapper">
        <img
          src={playerImage}
          alt={player.nome}
          className="player-img"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = defaultImage;
          }}
        />
      </div>

      <div className="player-flag-row">
        <img
          src={`https://flagcdn.com/24x18/${player.countryCode.toLowerCase()}.png`}
          alt={player.nacionalidade}
          className="flag"
        />
        <span>{player.nacionalidade}</span>
      </div>

      <h3 className="player-name">{player.nome}</h3>
      <p className="player-position">{player.posicao}</p>

      <div className="player-info">
        <span>Idade: {player.idade}</span>
      </div>

      <div className="player-card-actions">
        <button
          type="button"
          className="edit-player-btn"
          onMouseEnter={() => playHover(hoverSound)}
          onClick={() => {
            playSound(confirmSound, 0.25);
            onEdit(player);
          }}
        >
          Editar
        </button>

        <button
          type="button"
          className="delete-player-btn"
          onMouseEnter={() => playHover(hoverSound)}
          onClick={() => {
            playSound(confirmSound, 0.35);
            onDelete(player.id, player.nome);
          }}
        >
          Excluir jogador
        </button>
      </div>
    </div>
  );
}