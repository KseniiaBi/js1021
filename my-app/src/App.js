import logo from './logo.svg';
import './App.css';

// router
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">SuperAPP</div>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
        <nav>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home text='SuperApp Homepage' />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>

      <footer> &copy; JS 10.2021 </footer>
    </div>
  );
}

function Home(props){
  return(
    <h1>Welcome to {props.text} </h1>
  );
}

function Contact(props){
  return(
    <h1>Some longread about us  </h1>
  );
}
function Cart(props){
  return(
    <h1>Cart </h1>

  );
}

export default App;
