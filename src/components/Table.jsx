import { useEffect, useState } from 'react'
import '../styles/table.scss'

const Table = () => {
  const [ employees, setEmployees ] = useState([]); 

  useEffect (() => {
    fetch("https://raw.githubusercontent.com/eliasinacio/test-front/master/server/server.json")
      .then(response => response.json())
      .then(data => setEmployees(data.employess))
  }, [])

  function crateTableRow (person, key) {
    let admisDate = person.admission_date;
    admisDate = admisDate.slice(0,10).split("-");
    admisDate = `${admisDate[2]}/${admisDate[1]}/${admisDate[0]}`
  
    let phone = person.phone;
    phone = `(${phone.substr(0,2)}) ${phone.substr(2,2)} ${phone.substr(4,5)}-${phone.substr(9,4)}`
  
    return (
      <tr key={key}>
        <td><img src={person.image} alt={person.name}/></td>
        <td>{person.name}</td>
        <td>{person.job}</td>
        <td>{admisDate}</td>
        <td>{phone}</td>
      </tr>
    )
  }

  return (
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
        {employees.map((element, key) => crateTableRow(element, key))}
      </tbody>
      <tbody></tbody>
    </table>

  )
}

export default Table;