import { useEffect, useState } from 'react';
import '../styles/search.scss'

const SearchBar = () => {
  const [ input, setInput ] = useState('')

  function search (event) {
    event.preventDefault();
    setInput(event.target.value);

    const tableBody = document.querySelector('tbody');

    for (let i=0; i<9; i++) {
      const tableRow = tableBody.childNodes[i];

      // retira acentos e deixa tudo minúsculo.
      let tableRowText = tableRow.textContent.toLowerCase();
      tableRowText = tableRowText.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

      const inputText = event.target.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      
      try {
        if (tableRowText.search(inputText.toLowerCase()) === -1) {
          tableRow.style.display = 'none'
        } else {
          tableRow.style.display = ''
        }
      } catch (error) {
        console.log(new Error("Erro ao buscar dado."))
      }
    }
  }

  return (
    <label className="search-bar">
      <input 
        type="text" 
        placeholder="Pesquisar" 
        value={input}
        onChange={() => search(event)}/>

      <img src="https://img.icons8.com/material-outlined/28/999999/search--v1.png" alt="search icon, click to search"/>
    </label>
  )
}

export default SearchBar;