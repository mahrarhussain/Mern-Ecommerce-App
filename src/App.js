import {BrowserRouter , Routes, Route, Link} from "react-router-dom"
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";


function App() {
  return (
    <BrowserRouter>
    
    
    <div >
      <header>
        <Link to="/"> Amazona </Link>
      </header>

     <main>
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="product/:slug" element={<ProductScreen/>} />
      </Routes>
     </main>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
