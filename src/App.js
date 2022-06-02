import './App.css';
import Navbar from './components/Navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

function App() {
  return <>
    <Navbar />
    <ItemListContainer greeting={'Pronto estará disponible nuestro catálogo'} />
  </>

}

export default App;