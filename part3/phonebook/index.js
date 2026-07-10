import express from 'express'

const app = express()
app.use(express.json())

const entries = [
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

const general_info = `<p>Phonebook has info for ${entries.length} people</p>\r\n<p>${new Date()}</p>`

app.get('/api/persons', (_request, response) => {
    response.json(entries)
})

app.get('/info', (_request, response) => {
    response.send(general_info)
})

app.get('/api/persons/:id', (request, response) => {
    const person = response.json(entries.filter(entry => entry.id === request.params.id)).at(0)

    if (!person) {
        request.statusMessage = 'Person ID not found'
        return request.status(204).end()
    }

    response.json(person)

})

app.listen(3000)
