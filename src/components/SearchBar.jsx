import { useState } from 'react';
import '../styles/search.scss'

const SearchBar = () => {
  const [ input, setInput ] = useState('')

  function changeInput (event) {
    event.preventDefault();
    setInput(event.target.value);

    if (event.target.value === '') {
      for (let i=0; i<9; i++) {
        const tableRow = document.querySelector('tbody').childNodes[i];
        tableRow.style.display = ''
        console.log(tableRow);
      }
    }
  }

  function search () {
    const tableBody = document.querySelector('tbody');

    for (let i=0; i<9; i++) {
      const tableRow = tableBody.childNodes[i];

      const tableRowText = tableRow.textContent.toLowerCase();

      if (tableRowText.search(input.toLowerCase()) === -1) {
        tableRow.style.display = 'none'
      }
    }
  }

  return (
    <label className="search-bar">
      <input 
        type="text" 
        placeholder="Pesquisar" 
        value={input}
        onChange={() => changeInput(event)}/>
      <button onClick={search}>
        <img src="https://img.icons8.com/material-outlined/28/999999/search--v1.png" alt="search icon, click to search"/>
      </button>
    </label>
  )
}

export default SearchBar;