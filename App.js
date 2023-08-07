import React from "react";
import ReactDOM from "react-dom/client";

// this is React component without return
const Title = () => (
  <div id="heading" className="head">
    Namaste React using Functional Component Syntax
  </div>
);

// this is React Element => HTML Element (JS Object)
const title = (
  <div id="heading" className="head">
    Namaste React using normal JSX Syntax
  </div>
);

// Invalid React Element
// const title = () => (
//     <div id="heading" className="head">
//       Namaste React using normal JSX Syntax
//     </div>
//   );

// we cam also use normal Function as React Component
const Title1 = function () {
  return (
    <div id="heading" className="head">
      Namaste React using normal function keyword Functional Component Syntax
    </div>
  );
};

// React Functional Component

const HeadingComponentOne = () => (
  <div id="container" className="header-component">
    {title}
    {Title1()}
    <Title1 />
    <Title></Title>
    <h1 id="heading-component" className="header-component">
      Namaste React Heading Functional Component
    </h1>
  </div>
);

// Valid Functional Components
// const FunctionComponent = () => <h1>Namaste Arrow function without return</h1>;
// const FunctionComponent = () => (
//     <h1>Namaste Arrow function without return</h1>;
//     )

// Can be written like this also in React
// const HeadingComponent = () => {
//   return (
//     <h1 id="heading-component" className="header-component">
//       Namaste React Functional Component
//     </h1>
//   );
// };

// const validComponents = () =>(
//     <div id="container">
//         <h1 className="heading-component">Heading Component</h1>
//     </div>
// )

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

root.render(<HeadingComponentOne />);
