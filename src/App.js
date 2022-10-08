// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
// import Button from './components/button';
// import Navbar from './components/navbar';
import Index from './pages/index';
function App() {
  console.log('working')
  return (
    <div className="App">
      <Navbar/>
      <Index/>
    </div>
  );
}

export default App;
