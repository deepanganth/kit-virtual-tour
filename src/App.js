import Home from './Home'
import CenterBlock from './components/CenterBlock';
import WestBlock from './components/WestBlock';
import EastBlock from './components/EastBlock';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <Routes>
      <Route exact path='kit' element={<Home/>}/>
      <Route path='center' element={<CenterBlock/>}/>
      <Route path='west' element={<WestBlock/>}/>
      <Route path='east' element={<EastBlock/>}/>
      <Route path='nav' element={<Navbar/>}/>
    </Routes>
  );
}

export default App;
