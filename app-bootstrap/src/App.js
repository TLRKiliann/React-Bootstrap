import React, { useState } from 'react';
import FirstComponent from './Components/FirstComponent';
import { Button } from 'react-bootstrap';
import './App.css';


const App = () => {

  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (name) {
      setNames([...names, {id: Date.now, name: name, isDone: false}])
      setName('')
    }
  };

  return (
    <div className="App">
      <h1>React - Bootstrap</h1>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      <input type='checkbox' />
      <Button onClick={handleAdd}>Button Bootstrap</Button>
      <FirstComponent />
    </div>
  );
}

export default App;
