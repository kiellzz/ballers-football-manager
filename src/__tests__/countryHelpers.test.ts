import { describe, it, expect } from "vitest";
import {
  normalizeText,
  countryAliases,
  getCountryNames,
  findBestCountryMatch,
} from "../utils/countryHelpers";
import type { CountryApiItem } from "../utils/countryHelpers";

describe("normalizeText", () => {
  it("deve remover acentos", () => {
    expect(normalizeText("São Paulo")).toBe("sao paulo");
  });

  it("deve converter para minúsculas", () => {
    expect(normalizeText("BRASIL")).toBe("brasil");
  });

  it("deve remover espaços extras nas bordas", () => {
    expect(normalizeText("  França  ")).toBe("franca");
  });

  it("deve converter ø para o", () => {
    expect(normalizeText("Søren")).toBe("soren");
  });

  it("deve converter ß para ss", () => {
    expect(normalizeText("Straße")).toBe("strasse");
  });
});

describe("countryAliases", () => {
  it("deve resolver brasil para Brasil", () => {
    expect(countryAliases["brasil"]).toBe("Brasil");
  });

  it("deve resolver england para Reino Unido", () => {
    expect(countryAliases["england"]).toBe("Reino Unido");
  });

  it("deve resolver usa para Estados Unidos", () => {
    expect(countryAliases["usa"]).toBe("Estados Unidos");
  });

  it("deve resolver germany para Alemanha", () => {
    expect(countryAliases["germany"]).toBe("Alemanha");
  });
});

describe("getCountryNames", () => {
  it("deve retornar todos os nomes disponíveis normalizados", () => {
    const country: CountryApiItem = {
      name: { common: "Brazil", official: "Federative Republic of Brazil" },
      translations: { por: { common: "Brasil", official: "República Federativa do Brasil" } },
    };

    const names = getCountryNames(country);
    expect(names).toContain("brazil");
    expect(names).toContain("federative republic of brazil");
    expect(names).toContain("brasil");
    expect(names).toContain("republica federativa do brasil");
  });

  it("deve ignorar campos undefined", () => {
    const country: CountryApiItem = {
      name: { common: "Brazil" },
    };

    const names = getCountryNames(country);
    expect(names).toEqual(["brazil"]);
  });
});

describe("findBestCountryMatch", () => {
  const mockData: CountryApiItem[] = [
    {
      cca2: "BR",
      name: { common: "Brazil" },
      translations: { por: { common: "Brasil" } },
    },
    {
      cca2: "FR",
      name: { common: "France" },
      translations: { por: { common: "França" } },
    },
    {
      cca2: "DE",
      name: { common: "Germany" },
      translations: { por: { common: "Alemanha" } },
    },
  ];

  it("deve encontrar por nome exato em português", () => {
    const result = findBestCountryMatch(mockData, "Brasil");
    expect(result?.cca2).toBe("BR");
  });

  it("deve encontrar por nome exato em inglês", () => {
    const result = findBestCountryMatch(mockData, "France");
    expect(result?.cca2).toBe("FR");
  });

  it("deve resolver via alias (germany → Alemanha)", () => {
    const result = findBestCountryMatch(mockData, "germany");
    expect(result?.cca2).toBe("DE");
  });

  it("deve encontrar por match parcial", () => {
    const result = findBestCountryMatch(mockData, "Bras");
    expect(result?.cca2).toBe("BR");
  });

  it("deve ser case-insensitive", () => {
    const result = findBestCountryMatch(mockData, "FRANCE");
    expect(result?.cca2).toBe("FR");
  });
});