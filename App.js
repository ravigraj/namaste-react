import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element and JSX don't need to create with Capital letter.
// React Element
const heading = <h1>Namaste React with react Element</h1>;

//Using JSX;
const jsxHead = <h1>Hello, Namaste React!</h1>;
/************************** */

// Any Normal Function can be used as Functional Component (but name should start with capital letter);
const FunctionComp = function () {
  return <h1>Namaste React with Normal Function </h1>;
};

//Arrow Functions with return
const ArrowFunction = () => {
  return <h1>Namaste React with Return </h1>;
};

//Arrow Functions with return
const ArrowFunctionWithNoReturn = () => (
  <h1 className="heading">Namaste React with No Return </h1>
);

const NestedFunction = () => {
  return (
    <div className="heading">
      {heading}
      {jsxHead}
      {`can't do this jsxHead()`}
      <ArrowFunction />
      {'RAVI GOVINDRAJ'}
      {ArrowFunction()}
      <ArrowFunctionWithNoReturn />
      <ArrowFunction></ArrowFunction>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<NestedFunction />);
