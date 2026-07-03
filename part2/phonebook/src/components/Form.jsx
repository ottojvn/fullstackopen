export const Form = ({ name, number, onNameChange, onNumberChange, onSubmit }) => (
  <form>
    <div>
      name: <input value={name} onChange={onNameChange} />
      number: <input value={number} onChange={onNumberChange} />
    </div>
    <div>
      <button type="submit" onClick={onSubmit}>add</button>
    </div>
  </form>
);
