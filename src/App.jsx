import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


import './App.css'

const App = () => {
  
  return (
    <>
     <Navbar/> 
     <Home/>
     <Skills/>
     <Projects/>
     <Footer/> 
    </>
  )
}

export default App
