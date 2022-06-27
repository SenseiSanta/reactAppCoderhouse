//@ts-check
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Cart from './components/Cart/Cart';
import BgImage from './components/BgImage/BgImage';
import MyProvider from './context/CartContext';
import { initializeApp } from "firebase/app";


function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyAgxQ9u9uBOBkAtLEphHDjT0XpR8sdARAs",
    authDomain: "musicalhouse-react.firebaseapp.com",
    projectId: "musicalhouse-react",
    storageBucket: "musicalhouse-react.appspot.com",
    messagingSenderId: "897319918122",
    appId: "1:897319918122:web:0a5069499a3138be4b4153"
  };
  
  initializeApp(firebaseConfig);

  const greeting = 'Bienvenidos a Musical House'
  return (<>
  <BrowserRouter>
    <MyProvider>
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
    </MyProvider>
  </BrowserRouter>
  </>
)}

export default App;