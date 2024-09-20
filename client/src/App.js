import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop';
// import './App.css';

function App() {
  return (

    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
      <Route path='/login' element={<Login />}></Route>

        </Routes></BrowserRouter>
    </>


  );
}

export default App;
