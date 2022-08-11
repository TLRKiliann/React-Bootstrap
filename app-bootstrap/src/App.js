import React, { useState } from 'react';
import FirstComponent from './Components/FirstComponent';
import ThirdComponent from './Components/ThirdComponent';
import FourthComponent from './Components/FourthComponent';
import { Button } from 'react-bootstrap';
import './App.css';


const App = () => {

  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (name) {
      setNames([...names, { id: new Date().getTime(), name: name, isDone: false }]);
      setName('');
    }
  };

  return (
    <div className="App">
      <h1>React - Bootstrap</h1>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      <Button onClick={handleAdd}>Button Bootstrap</Button>
      <FirstComponent names={names} setNames={setNames} />
      <ThirdComponent />
      <FourthComponent />
    </div>
  );
}

export default App;
