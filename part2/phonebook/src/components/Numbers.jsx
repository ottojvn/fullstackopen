import { Person } from './Person';

export const Numbers = ({ persons, filterName, onDelete }) => (
    <>
        <h2>Numbers</h2>
        {persons.filter((person) => person.name.toLowerCase().includes(filterName.toLowerCase()))
            .map((person) => <Person key={person.id} id={person.id} name={person.name} number={person.number} onDelete={onDelete} />)}
    </>
);
