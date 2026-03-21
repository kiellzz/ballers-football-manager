import type { Player, Position } from "../types/PlayersType";
import { normalizeText } from "./countryHelpers";

export type PlayerFormData = {
  nome: string;
  idade: string;
  posicao: Position | "";
  overall: string;
  nacionalidade: string;
  countryCode: string;
  imagem: string;
};

type ValidatePlayerFormParams = {
  formData: PlayerFormData;
  players: Player[];
  editingPlayerId: string | null;
};

export function validatePlayerForm({
  formData,
  players,
  editingPlayerId,
}: ValidatePlayerFormParams) {
  const idade = Number(formData.idade);
  const overall = Number(formData.overall);
  const normalizedNewName = normalizeText(formData.nome);

  if (!formData.nome.trim()) {
    return "Digite o nome do jogador.";
  }

  const playerExists = players.some((player) => {
    if (editingPlayerId && player.id === editingPlayerId) return false;
    return normalizeText(player.nome) === normalizedNewName;
  });

  if (playerExists) {
    return "Já existe um jogador com esse nome.";
  }

  if (!formData.idade) {
    return "Digite a idade do jogador.";
  }

  if (idade < 16 || idade > 50) {
    return "A idade deve estar entre 16 e 50 anos.";
  }

  if (!formData.posicao) {
    return "Selecione a posição do jogador.";
  }

  if (!formData.overall) {
    return "Digite o overall do jogador.";
  }

  if (overall < 0 || overall > 99) {
    return "O overall deve estar entre 0 e 99.";
  }

  if (!formData.nacionalidade.trim()) {
    return "Digite o país do jogador.";
  }

  if (!formData.countryCode) {
    return "Confirme um país válido antes de salvar.";
  }

  return "";
}