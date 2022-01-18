import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import './styles.css'
import RoutesComponent from './routes/RoutesComponent';

function App() {
  return (
    <div className="App">
      <RoutesComponent/>
    </div>
  );
}

export default App;
