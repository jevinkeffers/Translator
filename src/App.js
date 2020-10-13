import React from 'react';
import './App.css';
import Translator from "./components/translator"

function App() {
  return (
    <div className="App">
      <Translator initialText="salutations" />
    </div>
  );
}

export default App;
