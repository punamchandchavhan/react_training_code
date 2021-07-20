import React, {useState} from 'react';
import './App.css';
import InputText from './components/InputText';
import Button from './components/Button';
import Text from './components/Text'

function App() {
  const [value, setValue] = useState("")
  const [message, setMessage] = useState("")

  const handleChange = value => {
    setValue(value)
  }

  const handleClick = () => {
    if(value === "") {
      alert("Empty ")
    }
    setMessage(value)
  }
  
  return (
    <div className="App">
      <InputText placeholder="Enter Input text" value={value} handleChange={handleChange}/>

      <Button label="Submit and Display" handleClick={handleClick}/>

      <Text />
      {message}
      
    </div>
  );
}

export default App;
