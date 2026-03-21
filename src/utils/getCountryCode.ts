// src/utils/getCountryCode.ts
export async function getCountryCodeByCountryName(countryName: string) {
  if (!countryName.trim()) return null;

  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${encodeURIComponent(
        countryName
      )}?fields=name,cca2`
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0) {
      return null;
    }

    return {
      name: data[0].name?.common || countryName,
      code: data[0].cca2 || null,
    };
  } catch (error) {
    console.error("Erro ao buscar país:", error);
    return null;
  }
}