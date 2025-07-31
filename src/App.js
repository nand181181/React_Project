//import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './Create';
import Update from './Update';

function App() {
  return (
    <div className="container">
    
    <h1 className='text-success text-center'>Crud App with JSON server</h1>
    <hr/>
 
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='Create' element={<Create/>}></Route>
  <Route path='edit/:id' element={<Update/>}></Route>
 </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
