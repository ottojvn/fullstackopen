import { useState } from 'react'

const Numbers = ({ persons }) => (
  <>
    <h2>Numbers</h2>
    {persons.map((person) => <Person key={person.id} name={person.name} phone={person.phone} />)}
  </>
)

const Person = ({ name, phone }) => (
  <>
    <p>{name} {phone}</p>
  </>
)

const App = () => {
  const [persons, setPersons] = useState([
    { id: 0, name: 'Arto Hellas', phone: '040-1234567' },
    { id: 1, name: 'Ada Lovelave', phone: '39-44-5323523' }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const handleAdd = (e) => {
    e.preventDefault();
    if (persons.some(user => user.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
      setNewName('')
    } else if (newName === '') {
      alert('Person needs a name')
    } else if (newPhone === '') {
      alert('Person needs a phone number')
    } else {
      setPersons(persons.concat({ id: persons.length + 1, name: newName, phone: newPhone }))
      setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
          phone: <input value={newPhone} onChange={(e) => setNewPhone(e.target.value)} />
        </div>
        <div>
          <button type="submit" onClick={handleAdd}>add</button>
        </div>
      </form>
      <Numbers persons={persons} />
    </div>
  )
}

export default App
