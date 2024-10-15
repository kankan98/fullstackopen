const PersonForm = ({
  newName,
  handleChange,
  newNumber,
  handleChangeNumber,
  addPerson,
}) => {
  return (
    <form>
      <div>
        name: <input value={newName} onChange={handleChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleChangeNumber} />
      </div>
      <div>
        <button type="submit" onClick={addPerson}>
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
