import Navbar from './component/navbar.js'
import './App.css';
import Home from './component/home/home'
import About from './component/About/about.js'
import Activites from './component/Activites/Activites.js';
import Gallery from './component/Gallery/page.js'
import Trek from './component/Trek/treaks.js'
import Main from './component/Team/main.js'
import {Route,Routes} from "react-router-dom"
function App() {

  return (
    <>
    <Navbar/>
   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Activites" element={<Activites/>}/>
      <Route path="/Gallery" element={<Gallery/>}/>
      <Route path="/Trek" element={<Trek/>}/>
      <Route path="/Main" element={<Main/>}/>

    </Routes>
   

    </>
  );
}

export default App;
