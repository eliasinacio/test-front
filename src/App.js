import Table from './components/Table'
import SearchBar from './components/SearchBar'

import './styles/App.scss'

function App() {
  return (
    <div className="App">
      <header>
        <h2>
          <span>Be</span>mobile
        </h2>
      </header>

      <main>
        <div className="employess">
          
          <div className="search-area">
            <h1>Funcionários</h1>
            <SearchBar />
          </div>

          <Table />
        </div>
      </main>
    </div>
  );
}

export default App;
