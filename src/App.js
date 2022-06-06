import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemCount from './components/ItemCount/ItemCount.jsx';

function App() {
  
  const OnAdd = (quantity) => {
    console.log(quantity)
  }
  
  return <>
    <Navbar />
    <ItemListContainer greeting={'Pronto estará disponible nuestro catálogo'} />
    <ItemCount initial={0} max={10} OnAdd={OnAdd}/>
  </>

}

export default App;