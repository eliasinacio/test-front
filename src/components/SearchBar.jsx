import '../styles/search.scss'

const SearchBar = () => {
  return (
    <label className="search-bar">
      <input type="text" placeholder="Pesquisar"/>
      <button>
        <img src="https://img.icons8.com/material-outlined/28/999999/search--v1.png" alt="search icon, click to search"/>
      </button>
    </label>
  )
}

export default SearchBar;