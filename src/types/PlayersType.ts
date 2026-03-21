export type Position =
  | "Goleiro"
  | "Lateral Esquerdo"
  | "Lateral Direito"
  | "Zagueiro"
  | "Volante"
  | "Meio-campo"
  | "Ponta Esquerda"
  | "Centroavante"
  | "Ponta Direita";

export type Player = {
  id: string;
  nome: string;
  idade: number;
  posicao: Position;
  overall: number;
  nacionalidade: string;
  countryCode: string; // BR, AR, PT, FR...
  imagem?: string;
  isCustom?: boolean;
};