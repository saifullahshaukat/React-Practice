import Nav from './components/Nav.js';
import TextForm from './components/TextForm.js';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {

  if (mode === 'light') {
    setMode('dark')
    document.body.style.backgroundColor = '#43484c'
  }
  else {
    setMode('light')
    document.body.style.backgroundColor = 'white'
  }

}
  return (
    <div className="app">
      <Nav 
      mode={mode}
      title="Textutils"
      about="About"
      toggleMode={toggleMode}
      />
      <div mode={mode}>
      <TextForm heading="Enter Text To Analyze Data"/>
      </div>
    </div>
  );
}

export default App;
