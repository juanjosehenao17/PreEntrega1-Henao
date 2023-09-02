
import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import NavBar1 from './Components/NavBar1';

function App() {
  return (
    <div className="App">
      <NavBar1/>
      <ItemListContainer greeting= "Productos en Stock"/>
      
    </div>
  );
}

export default App;
