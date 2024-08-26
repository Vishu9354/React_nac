import Navbar from './component/navbar.js'
import './App.css';
import Home from './component/home/home'
import About from './component/About/about.js'
import Activites from './component/Activites/Activites.js';
import Gallery from './component/Gallery/page.js'
import Trek from './component/Trek/treaks.js'
import Contact from './component/contact/page.js'
import Main from './component/Team/main.js'
import Footer from './component/Foot/footer.js'
import Nathatop from './component/Trek/Nathatop.jsx'
import Kheermalap from './component/Trek/Kheermalap.jsx'
import Kedarnath from './component/Trek/kedarnath.jsx'
import Devipage from './component/Trek/devipage.jsx'
import Bir from './component/Trek/bir.jsx'
import Triund from './component/Trek/triund.jsx'
import Team_2022 from './component/Team/Team22_main.jsx'
import Team_2024 from './component/Team/Team24_main.jsx'

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
      <Route path="Trek/Nathatop" element={<Nathatop/>}/>
      <Route path="Trek/Kheermalap" element={<Kheermalap/>}/>
      <Route path="Trek/Devipage" element={<Devipage/>}/>
      <Route path="Trek/Bir" element={<Bir/>}/>
      <Route path="Trek/Kedarnath" element={<Kedarnath/>}/>
      <Route path="Trek/Triund" element={<Triund/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Team_2024" element={<Team_2024/>}/>
      <Route path="/Main" element={<Main/>}/>
      <Route path="/Team_2022" element={<Team_2022/>}/>
      
    </Routes>
    <Footer/>

    </>
  );
}

export default App;
