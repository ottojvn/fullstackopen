const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Content = ({ modules }) => {
  return (
    <div>
      <Part module={modules[0]} />
      <Part module={modules[1]} />
      <Part module={modules[2]} />
    </div>
  );
};

const Part = ({ module }) => {
  return (
    <p>
      {module.name} {module.exercises}
    </p>
  );
};
const Total = ({ modules }) => {
  const sum = modules.reduce((sum, module) => sum + module.exercises, 0);
  return <p>Number of exercises {sum}</p>;
};
const App = () => {
  const course = { name: "Half Stack application development" };
  const modules = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content modules={modules} />
      <Total modules={modules} />
    </div>
  );
};

export default App;
