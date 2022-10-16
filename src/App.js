import './App.css';
import Index from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Button from 'react-bootstrap/Button';
// import Buy from './pages/buy';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
// library.add(faCheckSquare, faCoffee)
function App() {
  return (
    <div className="App">
      <Index/>
    </div>
  );
}

export default App;
