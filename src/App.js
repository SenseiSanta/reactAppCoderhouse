import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

function App() {
  
  return <>
    <Navbar />
    <ItemListContainer greeting={'Bienvenidos a Musical House'} />
  </>

}

export default App;