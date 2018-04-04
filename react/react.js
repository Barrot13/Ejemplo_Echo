console.log('App.js Is Running');

//JSX JavaScript XML

/*Ejemplo 1
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);*/


/*Ejemplo Reloj 1
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
*/



/*Ejemplo reloj 2
function Reloj(datos) {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {datos.hora}.</h2>
    </div>
  );
  return element;
}

function tick(){
  const reloj = <Reloj hora={new Date().toLocaleTimeString()}/>;
  ReactDOM.render(reloj, document.getElementById('root'));
}

setInterval(tick, 1000);
*/
