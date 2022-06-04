import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemCount from './components/ItemCount/ItemCount.jsx';

function App() {
  return <>
    <Navbar />
    <ItemListContainer greeting={'Pronto estará disponible nuestro catálogo'} />
    <ItemCount inicial={0} maximo={10}/>
  </>

}

export default App;