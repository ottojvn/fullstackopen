import express from 'express'

const app = express()
app.use(express.json())

let entries = [
    {
        "id": "1",
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": "2",
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": "3",
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": "4",
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

const genId = () => {
    return Math.round(7000000000000 * Math.random())
}

const general_info = `<p>Phonebook has info for ${entries.length} people</p>\r\n<p>${new Date()}</p>`

app.get('/api/persons', (_request, response) => {
    response.json(entries)
})

app.get('/info', (_request, response) => {
    response.send(general_info)
})

app.get('/api/persons/:id', (request, response) => {
    const person = entries.filter(entry => entry.id === request.params.id).at(0)

    if (!person) {
        response.statusMessage = 'Person ID not found'
        response.status(204)
        return response.json(person)
    }

    return response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
    entries = entries.filter(entry => entry.id !== request.params.id)

    response.status(200).end()
})

app.post('/api/persons', (request, response) => {
    const { name, number } = request.body.name
    if (!name || !name.trim()) {
        return response.status(422).json({ error: "name is required" })
    }

    if (!number || !number.trim()) {
        return response.status(422).json({ error: "number is required" })
    }

    if (entries.some(entry => entry.name === name)) {
        return response.status(409).json({ error: "name must be unique" })
    }

    const person = { id: genId(), name: request.body.name, number: request.body.number }
    entries = entries.concat(person)
    response.status(201).send(person)
})

app.listen(3000)
