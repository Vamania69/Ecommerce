import "./App.css";
import Index from "./pages/home";
// import { Registration } from "../src/components/Registration";
import Login from "../src/components/loginpage";
import Footer from "../src/components/Footer";
function App() {
  return (
    <div className="App">
      <Index />
      {/* <Registration /> */}
      <Login />
      <Footer />
    </div>
  );
}

export default App;
