import logo from './logo.svg';
import './App.css';
import Search from './Search';  
import Pokemon from './pages/Pokemon';
import { Routes,Route } from 'react-router-dom';
import Detail from './pages/Detail';
import Error from './pages/Error'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path='/' element={<Pokemon/>}></Route>
      <Route path='/detail/:id' element={<Detail/>}></Route>
      <Route path='*' element={<Error/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
