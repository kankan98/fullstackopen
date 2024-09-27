import Part from "../Part";

const Content = (props) => {
  return (
    <div>
      {props.parts.map((item) => {
        return (
          <Part
            key={item.id}
            part={item.name}
            exercises={item.exercises}
          ></Part>
        );
      })}
    </div>
  );
};

export default Content;
