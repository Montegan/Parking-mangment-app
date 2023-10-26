import './App.css';
import Homepage from './Components/Homepage';
import Parkingmain from './Components/Parkingmain';
import { Routes ,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route index path='/' element={ <Homepage/>}/>
      <Route path='/parkingPage' element={<Parkingmain/>}/>
    </Routes>

    </div>
  );
}

export default App;
