import logo from './logo.svg';
import './App.css';
import Registeration from './user/Registeration';

function App() {
  return (
    <div className="App">
      <div className="logoDiv">
        <img src={logo} className="App-logo" alt="Logo"/>
      </div>
      <Registeration/>
    </div>
  );
}

export default App;
