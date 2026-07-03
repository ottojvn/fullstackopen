import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 0 }
  ])
  const [newName, setNewName] = useState('')

  const handleAdd = (e) => {
    e.preventDefault();
    setPersons(persons.concat({ name: newName, id: persons.length + 1 }))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          <button type="submit" onClick={handleAdd}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(({ name, id }) => <p key={id}>{name}</p>)}
    </div>
  )
}

export default App
