import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import itemListContainer from './components/itemListContainer/itemListContainer';
function App() {
  return ( 
    <div className='app'>
    <NavBar />
    <itemListContainer />
  </div>
  );
}

export default App;
