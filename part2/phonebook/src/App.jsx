import { useState } from 'react'
import { Numbers } from './components/Numbers'
import { Filter } from './components/Filter'
import { Form } from './components/Form'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName === '') {
      alert('Person needs a name')
    } else if (newNumber === '') {
      alert('Person needs a number')
    } else if (persons.some(user => user.name === newName)) {
      alert(`Name ${newName} is already added to the phonebook`)
      setNewName('')
    } else if (persons.some(user => user.number === newNumber)) {
      alert(`Number ${newNumber} is already added to the phonebook`)
      setNewNumber('')
    } else {
      setPersons(persons.concat({ id: persons.length + 1, name: newName, number: newNumber }))
      setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterName} onChange={(e) => setFilterName(e.target.value)} />
      <Form name={newName} number={newNumber} onNameChange={e => setNewName(e.target.value)} onNumberChange={(e => setNewNumber(e.target.value))} onSubmit={handleSubmit} />
      <Numbers persons={persons} filterName={filterName} />
    </div>
  )
}

export default App
