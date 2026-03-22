type PlayersFiltersProps = {
  searchTerm: string;
  filterPosition: string;
  filterCountry: string;
  filterAge: string;
  filterOverall: string;
  sortAge: string;
  uniqueCountries: string[];
  onSearchTermChange: (value: string) => void;
  onFilterPositionChange: (value: string) => void;
  onFilterCountryChange: (value: string) => void;
  onFilterAgeChange: (value: string) => void;
  onFilterOverallChange: (value: string) => void;
  onSortAgeChange: (value: string) => void;
  onClearFilters: () => void;
};

export default function PlayersFilters({
  searchTerm,
  filterPosition,
  filterCountry,
  filterAge,
  filterOverall,
  sortAge,
  uniqueCountries,
  onSearchTermChange,
  onFilterPositionChange,
  onFilterCountryChange,
  onFilterAgeChange,
  onFilterOverallChange,
  onSortAgeChange,
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
        <option value="">Posição</option>
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
        <option value="">Nacionalidade</option>
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
        <option value="">Idade</option>
        <option value="16-20">16 a 20</option>
        <option value="21-25">21 a 25</option>
        <option value="26-30">26 a 30</option>
        <option value="31-35">31 a 35</option>
        <option value="36+">36+</option>
      </select>

      <select
        value={filterOverall}
        onChange={(e) => {
          onFilterOverallChange(e.target.value);
          onSortAgeChange("");
        }}
        className="filter-select"
      >
        <option value="">Padrão</option>
        <option value="desc">Maior overall → menor</option>
        <option value="asc">Menor overall → maior</option>
      </select>

      <select
        value={sortAge}
        onChange={(e) => {
          onSortAgeChange(e.target.value);
          onFilterOverallChange("");
        }}
        className="filter-select"
      >
        <option value="">Filtrar idade</option>
        <option value="desc">Mais velho → mais novo</option>
        <option value="asc">Mais novo → mais velho</option>
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