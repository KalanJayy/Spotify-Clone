import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@asgardeo/react'
import './App.css'
import SideBar from './components/sidebar';
import Home from './pages/Home';

function App() {
  return (
    <header>
      <SignedIn>
        <div className='h-screen flex'>
          <SideBar/>
          <main className='flex-1 bg-neutral-900 text-white p-6'>
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
