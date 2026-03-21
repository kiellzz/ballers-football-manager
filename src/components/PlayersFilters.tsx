type PlayersFiltersProps = {
  searchTerm: string;
  filterPosition: string;
  filterCountry: string;
  filterAge: string;
  uniqueCountries: string[];
  onSearchTermChange: (value: string) => void;
  onFilterPositionChange: (value: string) => void;
  onFilterCountryChange: (value: string) => void;
  onFilterAgeChange: (value: string) => void;
  onClearFilters: () => void;
};

export default function PlayersFilters({
  searchTerm,
  filterPosition,
  filterCountry,
  filterAge,
  uniqueCountries,
  onSearchTermChange,
  onFilterPositionChange,
  onFilterCountryChange,
  onFilterAgeChange,
  onClearFilters,
}: PlayersFiltersProps) {
  return (
    <div className="players-filters">
      <input
        type="text"
        placeholder="Buscar por nome..."
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
        className="filter-input"
      />

      <select
        value={filterPosition}
        onChange={(e) => onFilterPositionChange(e.target.value)}
        className="filter-select"
      >
        <option value="">Todas as posições</option>
        <option value="Goleiro">Goleiro</option>
        <option value="Lateral Esquerdo">Lateral Esquerdo</option>
        <option value="Lateral Direito">Lateral Direito</option>
        <option value="Zagueiro">Zagueiro</option>
        <option value="Volante">Volante</option>
        <option value="Meio-campo">Meio-campo</option>
        <option value="Ponta Esquerda">Ponta Esquerda</option>
        <option value="Centroavante">Centroavante</option>
        <option value="Ponta Direita">Ponta Direita</option>
      </select>

      <select
        value={filterCountry}
        onChange={(e) => onFilterCountryChange(e.target.value)}
        className="filter-select"
      >
        <option value="">Todas as nacionalidades</option>
        {uniqueCountries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      <select
        value={filterAge}
        onChange={(e) => onFilterAgeChange(e.target.value)}
        className="filter-select"
      >
        <option value="">Todas as idades</option>
        <option value="16-20">16 a 20</option>
        <option value="21-25">21 a 25</option>
        <option value="26-30">26 a 30</option>
        <option value="31-35">31 a 35</option>
        <option value="36+">36+</option>
      </select>

      <button
        type="button"
        className="clear-filters-btn"
        onClick={onClearFilters}
      >
        Limpar filtros
      </button>
    </div>
  );
}