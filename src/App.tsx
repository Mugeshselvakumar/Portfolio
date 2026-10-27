import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { ProjectPage } from './pages/ProjectPage'
import { ScrollToAnchor } from './components/ScrollToAnchor'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollToAnchor />
      <main className="flex-1" id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
