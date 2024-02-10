import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Education from './Components/Education/Education'
import Skills from './Components/Skills/Skill'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Dark from './Components/Darkmode/Dark'

function App() {
  return (
    <>
    <Dark/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
