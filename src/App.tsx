import { Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Home } from './pages/Home'
import { CaseStudy } from './pages/CaseStudy'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyecto/:slug" element={<CaseStudy />} />
      </Routes>
    </>
  )
}

export default App
