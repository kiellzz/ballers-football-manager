import { describe, it, expect } from "vitest";
import { validatePlayerForm } from "../utils/playerValidation";
import type { PlayerFormData } from "../utils/playerValidation";

const baseForm: PlayerFormData = {
  nome: "Ronaldo",
  idade: "25",
  posicao: "Centroavante",
  overall: "90",
  nacionalidade: "Brasil",
  countryCode: "BR",
  imagem: "",
};

const noPlayers = [] as any[];

describe("validatePlayerForm — campos obrigatórios", () => {
  it("deve retornar erro se nome estiver vazio", () => {
    const result = validatePlayerForm({
      formData: { ...baseForm, nome: "" },
      players: noPlayers,
      editingPlayerId: null,
    });
    expect(result).toBe("Digite o nome do jogador.");
  });

  it("deve retornar erro se idade estiver vazia", () => {
    const result = validatePlayerForm({
      formData: { ...baseForm, idade: "" },
      players: noPlayers,
      editingPlayerId: null,
    });
    expect(result).toBe("Digite a idade do jogador.");
  });

  it("deve retornar erro se posição não for selecionada", () => {
    const result = validatePlayerForm({
      formData: { ...baseForm, posicao: "" },
      players: noPlayers,
      editingPlayerId: null,
    });
    expect(result).toBe("Selecione a posição do jogador.");
  });

  it("deve retornar erro se overall estiver vazio", () => {
    const result = validatePlayerForm({
      formData: { ...baseForm, overall: "" },
      players: noPlayers,
      editingPlayerId: null,
    });
    expect(result).toBe("Digite o overall do jogador.");
  });

  it("deve retornar erro se nacionalidade estiver vazia", () => {
    const result = validatePlayerForm({
      formData: { ...baseForm, nacionalidade: "" },
      players: noPlayers,
      editingPlayerId: null,
    });
    expect(result).toBe("Digite o país do jogador.");
  });

  it("deve retornar erro se countryCode estiver vazio", () => {
    const result = validatePlayerForm({
      formData: { ...baseForm, countryCode: "" },
      players: noPlayers,
      editingPlayerId: null,
    });
    expect(result).toBe("Confirme um país válido antes de salvar.");
  });
});

describe("validatePlayerForm — regras de negócio", () => {
  it("deve rejeitar idade menor que 16", () => {
    const result = validatePlayerForm({
      formData: { ...baseForm, idade: "15" },
      players: noPlayers,
      editingPlayerId: null,
    });
    expect(result).toBe("A idade deve estar entre 16 e 50 anos.");
  });

  it("deve rejeitar idade maior que 50", () => {
    const result = validatePlayerForm({
      formData: { ...baseForm, idade: "51" },
      players: noPlayers,
      editingPlayerId: null,
    });
    expect(result).toBe("A idade deve estar entre 16 e 50 anos.");
  });

  it("deve aceitar idade nos limites (16 e 50)", () => {
    expect(
      validatePlayerForm({ formData: { ...baseForm, idade: "16" }, players: noPlayers, editingPlayerId: null })
    ).toBe("");
    expect(
      validatePlayerForm({ formData: { ...baseForm, idade: "50" }, players: noPlayers, editingPlayerId: null })
    ).toBe("");
  });

  it("deve rejeitar overall menor que 0", () => {
    const result = validatePlayerForm({
      formData: { ...baseForm, overall: "-1" },
      players: noPlayers,
      editingPlayerId: null,
    });
    expect(result).toBe("O overall deve estar entre 0 e 99.");
  });

  it("deve rejeitar overall maior que 99", () => {
    const result = validatePlayerForm({
      formData: { ...baseForm, overall: "100" },
      players: noPlayers,
      editingPlayerId: null,
    });
    expect(result).toBe("O overall deve estar entre 0 e 99.");
  });

  it("deve aceitar overall nos limites (0 e 99)", () => {
    expect(
      validatePlayerForm({ formData: { ...baseForm, overall: "0" }, players: noPlayers, editingPlayerId: null })
    ).toBe("");
    expect(
      validatePlayerForm({ formData: { ...baseForm, overall: "99" }, players: noPlayers, editingPlayerId: null })
    ).toBe("");
  });
});

describe("validatePlayerForm — nome duplicado", () => {
  const existingPlayers = [
    { id: "1", nome: "Ronaldo" } as any,
  ];

  it("deve rejeitar nome duplicado", () => {
    const result = validatePlayerForm({
      formData: { ...baseForm, nome: "Ronaldo" },
      players: existingPlayers,
      editingPlayerId: null,
    });
    expect(result).toBe("Já existe um jogador com esse nome.");
  });

  it("deve aceitar nome duplicado se for o próprio jogador sendo editado", () => {
    const result = validatePlayerForm({
      formData: { ...baseForm, nome: "Ronaldo" },
      players: existingPlayers,
      editingPlayerId: "1",
    });
    expect(result).toBe("");
  });

  it("deve rejeitar nome duplicado com acentos diferentes", () => {
    const result = validatePlayerForm({
      formData: { ...baseForm, nome: "rônaldo" },
      players: existingPlayers,
      editingPlayerId: null,
    });
    expect(result).toBe("Já existe um jogador com esse nome.");
  });
});

describe("validatePlayerForm — formulário válido", () => {
  it("deve retornar string vazia quando tudo está correto", () => {
    const result = validatePlayerForm({
      formData: baseForm,
      players: noPlayers,
      editingPlayerId: null,
    });
    expect(result).toBe("");
  });
});