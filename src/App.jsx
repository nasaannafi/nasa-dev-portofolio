
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import ProjectDetail from './page/ProjectsDetail'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects/:projectId"
          element={<ProjectDetail />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
