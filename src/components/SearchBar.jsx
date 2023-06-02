function Searchbar({ query, setQuery }) {
  console.log(query);

  return (
    <div>
      <div>
        <input
          type="search"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
      </div>
    </div>
  );
}

export default Searchbar;
