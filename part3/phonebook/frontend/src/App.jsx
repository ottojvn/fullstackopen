import { useState, useEffect } from 'react'
import personsService from './services/persons'
import { Filter } from './components/Filter'
import { Form } from './components/Form'
import { Notification } from './components/Notification'
import { Numbers } from './components/Numbers'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [notificationIsError, setNotificationIsError] = useState(false)

  const setNotification = (message, isError, timeout) => {
    setNotificationMessage(message)
    setNotificationIsError(isError)
    setTimeout(() => {
      setNotificationMessage(null)
    }, timeout)
  }

  useEffect(() => {
    personsService
      .getAll()
      .then(persons => setPersons(persons))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName === '') {
      alert('Person needs a name')
    } else if (newNumber === '') {
      alert('Person needs a number')
    } else if (persons.some(user => user.name === newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the older number with a new one?`)) {
        setNotification(`${newName} updated`, false, 5000)
        personsService
          .update(persons.find(person => person.name === newName).id, { name: newName, number: newNumber })
          .then((updatedPerson) => {
            setPersons(persons.map(person => person.id === updatedPerson.id ? updatedPerson : person))
          })
          .catch((_) => {
            setNotification(`${newName} is already deleted from the server`, true, 5000)
            personsService
              .getAll()
              .then(persons => setPersons(persons))
          })
      }
      setNewName('')
      setNewNumber('')
    } else if (persons.some(user => user.number === newNumber)) {
      alert(`Number ${newNumber} is already added to the phonebook`)
      setNewNumber('')
    } else {
      setNotification(`Added ${newName}`, false, 5000)
      personsService
        .create({ name: newName, number: newNumber })
        .then(newPerson => {
          setPersons(persons.concat(newPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const handleDelete = (e, id, name) => {
    e.preventDefault()
    if (window.confirm(`Delete ${name} ? `)) {
      personsService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)} />
      <Notification message={notificationMessage} isError={notificationIsError} />
      <Form
        name={newName}
        number={newNumber}
        onNameChange={e => setNewName(e.target.value)}
        onNumberChange={(e => setNewNumber(e.target.value))}
        onSubmit={handleSubmit} />
      <Numbers
        persons={persons}
        filterName={filterName}
        onDelete={handleDelete} />
    </div>
  )
}

export default App
