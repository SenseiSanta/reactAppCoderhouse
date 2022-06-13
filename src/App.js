import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';

function App() {
  const itemExample = {
    id: 1,
    name: 'Guitarra Electrica Yamaha',
    description: 'Guitarra de 6 cuerdas para diestros, modelo Yamaha, color negro y bordo',
    price: 300,
    pictureURL: 'https://http2.mlstatic.com/D_NQ_NP_736346-MLA44916270140_022021-O.webp'}
  return (<>
  <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a Musical House'} />} />
        <Route path='/product/:id' element={<ItemDetailContainer item={itemExample} />} />
      </Routes>
  </BrowserRouter>
  </>
)}

export default App;