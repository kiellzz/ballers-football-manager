export function getPlayerImage(nome: string) {
  const formatted = nome
    .toLowerCase()
    .replace(/ø/g, "o")
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") 
    .replace(/[^a-z0-9]/g, "");

  return `/players/${formatted}.webp`;
}