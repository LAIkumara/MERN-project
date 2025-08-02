import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homePage'
import AdminPage from './pages/adminPage'
import TestPage from './pages/testPage'

function App() {
 
  return (
  <BrowserRouter>
    <div className='h-screen w-full flex justify-center items-center'>
        <Routes path="/">
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/admin/*" element={<AdminPage/>}></Route>
          <Route path="/test" element={<TestPage/>}></Route>
        </Routes>
      </div>
  </BrowserRouter>
  )
}

export default App
