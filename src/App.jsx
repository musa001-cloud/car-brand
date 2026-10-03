
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Shop from './Components/Brands/shop'
import Home from "./Components/Home/Home";
import Bugatti from "./Components/Brands/Bugatti";
import Ferrari from "./Components/Brands/Ferrari";
import Lamborghini from "./Components/Brands/Lamborghini";
import Mercedes from "./Components/Brands/Mercedes";
import Models from "./Components/Home/Models";
import Performance from "./Components/Home/Performance";
import Heritage from "./Components/Home/Heritage";
import Experience from "./Components/Home/Experience";
import Contact from "./Components/Home/Contact";
function App() {
  return (
    <Routes>

      {/* HOME */}
        <Route path="shop" element={<Shop />} />
        <Route path="models" element={<Models />} />
        <Route path="performance" element={<Performance />} />
        <Route path="heritage" element={<Heritage />} />
        <Route path="experience" element={<Experience />} />
        <Route path="contact" element={<Contact />} />
        
      <Route path="/" element={<Home />}>
        <Route index element={<Mercedes />} />
        <Route path="mercedes" element={<Mercedes />} />
        <Route path="ferrari" element={<Ferrari />} />
        <Route path="lamborghini" element={<Lamborghini />} />
        <Route path="bugatti" element={<Bugatti />} />
      </Route>

      {/* /home */}
      <Route path="/home" element={<Home />}>
        <Route index element={<Mercedes />} />

        <Route path="mercedes" element={<Mercedes />} />
        <Route path="ferrari" element={<Ferrari />} />
        <Route path="lamborghini" element={<Lamborghini />} />
        <Route path="bugatti" element={<Bugatti />} />
      </Route>

    </Routes>
  );
}

export default App;

