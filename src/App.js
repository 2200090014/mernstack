
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Hotel from "./components/Hotel";
import SignIn from "./components/SignIn";
import ForgetPass from "./ForgetPass";
import Payment from "./components/Payment";
import Food from "./components/Fruits";
import Rooms from "./components/Rooms";
import Seafood from "./components/seafood";
import CartApp from "./components/CartApp";
import {Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import Contact from "./Contact";


function App() {
  return (
    <div className="App">
     
        { /*<Navbar />*/ }
        
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/ForgetPass" element={<ForgetPass />} />
        
          <Route path="/Login" element={<Login />} />
          <Route path="/Hotel" element={<Hotel />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Fruits" element={<Food />} />
          <Route path="/vegitables" element={<Rooms />} />
          <Route path="/SeaFood" element={<Seafood />} />
          <Route path="/CartApp" element={<CartApp />} />
          
        </Routes>

        <Contact/>

    </div>
  );
}

export default App;
