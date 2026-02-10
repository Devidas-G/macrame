import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/about'
import NotFound from "./pages/notFound/NotFound"
import "./core/styles/theme.css"
import "./core/styles/styles.css"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
