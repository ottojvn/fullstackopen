export const Filter = ({ value, onChange }) => {
  return <div>
    <label htmlFor='filterInput'>Filter: </label>
    <input id='filterInput' value={value} onChange={onChange} />
  </div>
};
