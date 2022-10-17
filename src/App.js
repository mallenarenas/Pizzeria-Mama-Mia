import { Routes, Route, BrowserRouter } from "react-router-dom"
import { PizzasContextProvider } from "./context/PizzasContext";
import Navbar from "./layauts/Navbar";
import Home from "./views/Home"
import DetailsPizza from "./views/DetailsPizza"
import Checkout from "./views/Checkout"

import 'bootstrap/dist/css/bootstrap.min.css';import NotFound from "./views/NotFound"

function App() {
  
  return (
    <div className="App">
     <PizzasContextProvider>
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home />}/>
        <Route path="/pizza/:id" element={<DetailsPizza />}/>
        <Route path="/carrito" element={<Checkout />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      </BrowserRouter>
      </PizzasContextProvider>
    </div>
  );
}

export default App;
