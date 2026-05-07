function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <section className="search-section">
      <input
        type="text"
        placeholder="Search Projects"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </section>
  );
}

export default SearchBar;