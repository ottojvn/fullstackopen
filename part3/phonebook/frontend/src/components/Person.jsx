export const Person = ({ id, name, number, onDelete }) => (
    <>
        <p>{name} {number} <button onClick={(e) => onDelete(e, id, name)} >Delete</button></p>
    </>
);
