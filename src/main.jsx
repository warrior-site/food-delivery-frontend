import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BottomNav from './components/BottomNav.jsx'
import {BrowserRouter} from 'react-router-dom'
import SideNav from './components/SideNav.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
      <div className="app-main h-screen flex flex-col">
        {/* Main content fills available space */}
        <div className="content-wrap flex flex-1 overflow-auto bg-amber-300">
          <div className='side-nav'>
            <SideNav/>
          </div>

          <div className='main-content w-full h-full '>
            <App />
          </div>
        </div>

        {/* Bottom navigation fixed at bottom */}
        <div className="bottom-nav-mobile h-16 ">
          <BottomNav />
        </div>
      </div>
    </BrowserRouter>

  </StrictMode>
)
