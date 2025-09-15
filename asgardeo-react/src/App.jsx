import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@asgardeo/react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SideBar from './components/sidebar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Library from './pages/Library';
import Search from './pages/Search';

function App() {
  return (
    <header>
      <SignedIn>
        <div className='h-screen flex'>
          <SideBar/>
          <main className='flex-1 bg-neutral-900 text-white p-6'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/search' element={<Search/>}/>
              <Route path='/library' element={<Library/>}/>
              <Route path='/profile' element={<Profile/>}/>
            </Routes>
          </main>
        </div>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </header>
  )
}

export default App
