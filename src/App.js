import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotFound from './pages/NotFound';
import ContactUs from './pages/Contact';
import History from './pages/History'
import JoinUs from './pages/JoinUs'
import Cart from './pages/Cart';

function App() {

  return (
    
    <BrowserRouter>
      <div className='content'>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/contactanos" element={<ContactUs />} />
          <Route path="/historia" element={<History />} />
          <Route path="/unete" element={<JoinUs />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
