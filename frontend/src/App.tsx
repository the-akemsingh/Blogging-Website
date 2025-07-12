import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Publish } from './pages/Publish'
import { Blogs } from './pages/Blogs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import Navbar from './components/Navbar'



function App() {
  return (
    <div className='bg-[#D1C1AF]'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navbar /><Home /></>} />
          <Route path="/signup" element={<><Navbar /><Signup /></>} />
          <Route path="/signin" element={<><Navbar /><Signin /></>} />
          <Route path="/blogs" element={<><Navbar /><Blogs /></>} />
          <Route path="/blog/:id" element={<><Navbar /><Blog /></>} />
          <Route path="/publish" element={<><Navbar /><Publish /></>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

