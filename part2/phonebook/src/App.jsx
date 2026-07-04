import axios from 'axios'

import { useState, useEffect } from 'react'
import { Numbers } from './components/Numbers'
import { Filter } from './components/Filter'
import { Form } from './components/Form'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data))
  }, [])

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
      <Filter
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)} />
      <Form
        name={newName}
        number={newNumber}
        onNameChange={e => setNewName(e.target.value)}
        onNumberChange={(e => setNewNumber(e.target.value))}
        onSubmit={handleSubmit} />
      <Numbers
        persons={persons}
        filterName={filterName} />
    </div>
  )
}

export default App
