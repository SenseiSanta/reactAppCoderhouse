import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Cart from './components/Cart/Cart';
import BgImage from './components/BgImage/BgImage';

function App() {
  const greeting = 'Bienvenidos a Musical House'
  return (<>
  <BrowserRouter>
      <Navbar />
      <BgImage />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={greeting} />} />
        <Route path='/home' element={<ItemListContainer greeting={greeting} />} />
        <Route path='/index' element={<ItemListContainer greeting={greeting} />} />
        <Route path='/product/:id' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/category/:id' element={<ItemListContainer greeting={greeting} />} />
        <Route path='*' element={<h1> PAGE NOT FOUND </h1>} />
      </Routes>
  </BrowserRouter>
  </>
)}

export default App;