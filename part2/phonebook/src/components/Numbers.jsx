import { Person } from './Person';

export const Numbers = ({ persons, filterName }) => (
  <>
    <h2>Numbers</h2>
    {persons.filter((person) => person.name.toLowerCase().includes(filterName.toLowerCase()))
      .map((person) => <Person key={person.id} name={person.name} number={person.number} />)}
  </>
);
