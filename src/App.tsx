import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import FormRoot from './components/FormRoot'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<FormRoot />} />
    </Routes>
  )
}

export default App
