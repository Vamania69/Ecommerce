import "./App.css";
import Index from "./pages/home";

//import "../src/components/Registration.css";
import { Registration } from "../src/components/Registration";

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
      <Index />
      <Registration />
    </div>
  );
}

export default App;
