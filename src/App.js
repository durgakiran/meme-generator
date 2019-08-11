import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import MemeGenerator from './components/memgenerator/memegenerator';

function App() {
  return (
    <div className="App">
      <Header />
      <MemeGenerator />
    </div>
  );
}

export default App;
