import React from 'react';
import './App.css';
import Agenda from './componentes/Agenda';

function App() {
  return (
    <div className="App">
      <h1> AGENDA </h1>
      <p>Novo Contato</p>

      <div className="dados">
        <Agenda item1="Nome" item2="Telefone" item3="Operadora"></Agenda>

      </div>
    </div>

  );
}

export default App;
