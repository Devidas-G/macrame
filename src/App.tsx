import { Routes, Route } from 'react-router-dom'
import "./core/styles/theme.css"
import "./core/styles/styles.css"
import NotFound from "./pages/notFound/NotFound"
import Home from './pages/home/Home'
import About from './pages/about/about'
import Projects from './pages/projects/projects'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
