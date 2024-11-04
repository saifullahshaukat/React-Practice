import Nav from './components/Nav.js';
import TextForm from './components/TextForm.js';

function App() {
  return (
    <div className="app">
      <Nav 
      title="Textutils"
      about="About"
      />
      <div className='container my-3'>
      <TextForm heading="Enter The Text To Analyze Data"/>
      </div>
    </div>
  );
}

export default App;
