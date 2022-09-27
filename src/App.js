import logo from './logo.svg';
import './App.css';
import Task2 from './components/Task2';
import ApiTable, { Apitabledata } from './components/Apitabledata';
import Mounting from './lifecycleMethods/Mounted';
import State from './components/State';

function App() {
  return (
    <div className="App">
      {/* <Task2/> */}
      {/* <Apitabledata/> */}
      {/* <Mounting/> */}
      <State/>
          </div>
  )
}

export default App;
