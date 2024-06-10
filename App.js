import React from "react";
import ReactDOM from "react-dom";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello world by React!"
// );

const Title = () => {
  return <h1>Kj's Component</h1>;
};

const Heading = ({ children }) => {
  return (
    <div id="container">
      <Title />

      <h1 className="heading">React Functional Component</h1>
      {children}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Heading>
    <Title />
  </Heading>
);
