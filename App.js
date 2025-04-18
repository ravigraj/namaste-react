const parent = React.createElement('div', {id: 'parent'}, )


const heading = React.createElement(
  'h1',
  { id: 'heading' },
  'Hello World from React!!'
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);

console.log(root);
