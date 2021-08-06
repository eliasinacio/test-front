import './table.scss'

export default function Table() {
  return (
    <div className="table-container">
      <div className="search-area">
        <h2>Funcionários</h2>
        <label>
          <input type="text" />
          <input type="button" value="a" />
        </label>
      </div>

      <table>
        <thead>
          <tr>
            <th>FOTO</th>
            <th>NOME</th>
            <th>CARGO</th>
            <th>DATA DE ADMISSÃO</th>
            <th>TELEFONE</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>db</td>
            <td>Rodrigo Mota</td>
            <td>Front-End</td>
            <td>23/01/2025</td>
            <td>+55 (55) 95555-5555</td>
          </tr>

          <tr>
            <td>db</td>
            <td>Rodrigo Mota</td>
            <td>Front-End</td>
            <td>23/01/2025</td>
            <td>+55 (55) 95555-5555</td>
          </tr>
        </tbody>
        <tbody></tbody>
      </table>
    </div>
  )
}