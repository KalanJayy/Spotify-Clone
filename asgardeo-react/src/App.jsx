import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@asgardeo/react'
import './App.css'
import SideBar from './components/sidebar';
import Home from './pages/Home';

function App() {
  return (
    <header>
      <SignedIn>
        <div className=''>
          <SideBar/>
          <main className=''>
            <Home/>
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
