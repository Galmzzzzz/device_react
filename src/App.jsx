import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main/main';
import Cart from './components/Cart/cart';
import Order from './components/Chechout/order';
function App() {
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/order" element={<Order/>} />
      </Routes>
    </Router>
  );
}

export default App;
