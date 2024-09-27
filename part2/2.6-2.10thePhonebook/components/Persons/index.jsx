const Persons = ({ persons }) => {
  return persons.map((item) => (
    <h4 key={item.name}>
      {item.name} {item.number}
    </h4>
  ));
};

export default Persons;
