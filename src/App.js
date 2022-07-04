import './App.css';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartPage from './components/Cart';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
     <Header />
     <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='/cart' element={<CartPage />}/>
     </Routes>
     </div>
    </BrowserRouter>

  );
}

export default App;
