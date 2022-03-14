import React from 'react'
import Navbar from "./components/Navbar";
import { Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Home from './pages';
import About from './pages/about';
import Menu from './pages/menu';
import Contact from './pages/contact';
import Dropdown from './components/Dropdown';


function App() {

  const [sidebarIsOpen, setSidebarIsOpen] = React.useState(false)

  function toggleSidebar(){
    setSidebarIsOpen(!sidebarIsOpen);
  }

  React.useEffect(() => {
    function hideMenu(){
      if(window.innerWidth > 768 && sidebarIsOpen){
        setSidebarIsOpen(false);
        console.log("I resized")
      }
    }

    window.addEventListener("resize", hideMenu)

    return ()=> {
      window.removeEventListener("resize", hideMenu)
    }

  })

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Dropdown isOpen={sidebarIsOpen} toggleSidebar={toggleSidebar} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
         
        </Routes>
      <Footer />
    </>
  );
}

export default App;
