'use strict';

console.log('App.js Is Running');

//JSX JavaScript XML

var template = React.createElement(
  'h1',
  null,
  'Ejemplo Echo'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
