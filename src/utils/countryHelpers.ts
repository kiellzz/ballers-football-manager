type CountryApiItem = {
  cca2?: string;
  name?: {
    common?: string;
    official?: string;
  };
  translations?: {
    por?: {
      common?: string;
      official?: string;
    };
  };
};

export function normalizeText(text: string) {
  return text
    .trim()
    .toLowerCase()
    .replace(/ø/g, "o")
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export const countryAliases: Record<string, string> = {
  brasil: "Brasil",
  brazil: "Brasil",
  franca: "França",
  france: "França",
  alemanha: "Alemanha",
  germany: "Alemanha",
  espanha: "Espanha",
  spain: "Espanha",
  italia: "Itália",
  italy: "Itália",
  portugal: "Portugal",
  argentina: "Argentina",
  holanda: "Holanda",
  netherlands: "Holanda",
  inglaterra: "Reino Unido",
  england: "Reino Unido",
  escocia: "Reino Unido",
  scotland: "Reino Unido",
  "pais de gales": "Reino Unido",
  gales: "Reino Unido",
  wales: "Reino Unido",
  "irlanda do norte": "Reino Unido",
  "northern ireland": "Reino Unido",
  "reino unido": "Reino Unido",
  "united kingdom": "Reino Unido",
  uk: "Reino Unido",
  "gra bretanha": "Reino Unido",
  "great britain": "Reino Unido",
  eua: "Estados Unidos",
  usa: "Estados Unidos",
  "estados unidos": "Estados Unidos",
  "united states": "Estados Unidos",
  "coreia do sul": "Coreia do Sul",
  "south korea": "Coreia do Sul",
  "coreia do norte": "Coreia do Norte",
  "north korea": "Coreia do Norte",
  china: "China",
  taiwan: "Taiwan",
};

export function getCountryDisplayName(
  country: CountryApiItem,
  fallback: string
) {
  return (
    country.translations?.por?.common ||
    country.translations?.por?.official ||
    country.name?.common ||
    fallback
  );
}

export function getCountryNames(country: CountryApiItem) {
  return [
    country.name?.common,
    country.name?.official,
    country.translations?.por?.common,
    country.translations?.por?.official,
  ]
    .filter(Boolean)
    .map((name) => normalizeText(name as string));
}

export function findBestCountryMatch(
  data: CountryApiItem[],
  userInput: string
) {
  const normalizedInput = normalizeText(userInput);
  const aliasResolved = countryAliases[normalizedInput] || userInput;
  const normalizedAlias = normalizeText(aliasResolved);

  const exactMatch = data.find((country) => {
    const names = getCountryNames(country);
    return names.includes(normalizedInput) || names.includes(normalizedAlias);
  });

  if (exactMatch) return exactMatch;

  const startsWithMatch = data.find((country) => {
    const names = getCountryNames(country);
    return names.some(
      (name) =>
        name.startsWith(normalizedInput) || name.startsWith(normalizedAlias)
    );
  });

  if (startsWithMatch) return startsWithMatch;

  const partialMatch = data.find((country) => {
    const names = getCountryNames(country);
    return names.some(
      (name) =>
        name.includes(normalizedInput) ||
        name.includes(normalizedAlias) ||
        normalizedInput.includes(name) ||
        normalizedAlias.includes(name)
    );
  });

  return partialMatch || data[0];
}

export async function fetchCountryData(query: string) {
  const endpoints = [
    `https://restcountries.com/v3.1/translation/${encodeURIComponent(
      query
    )}?fields=name,cca2,translations`,
    `https://restcountries.com/v3.1/name/${encodeURIComponent(
      query
    )}?fields=name,cca2,translations`,
  ];

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint);

      if (!response.ok) continue;

      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        return data as CountryApiItem[];
      }
    } catch {
      continue;
    }
  }

  return null;
}

export type { CountryApiItem };