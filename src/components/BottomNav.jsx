import React from "react"
import { Home, Search, User, History, Play } from "lucide-react"
import { NavLink } from "react-router-dom"

function BottomNav() {
  const baseClasses = "flex flex-col items-center p-2 rounded transition-colors"
  const activeClasses = "bg-gray-400 text-black"
  const inactiveClasses = "text-white"

  return (
    <div className="flex justify-around items-center h-full w-full bg-gray-800 text-sm">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
        }
      >
        <Home size={22} />
        <span>Home</span>
      </NavLink>

      <NavLink
        to="/search"
        className={({ isActive }) =>
          `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
        }
      >
        <Search size={22} />
        <span>Search</span>
      </NavLink>


      <NavLink
        to="/food-reel"
        className={({ isActive }) =>
          `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
        }
      >
        <Play size={22} />
        <span>Play</span>
      </NavLink>


      <NavLink
        to="/history"
        className={({ isActive }) =>
          `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
        }
      >
        <History size={22} />
        <span>History</span>
      </NavLink>



      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
        }
      >
        <User size={22} />
        <span>Profile</span>
      </NavLink>
    </div>
  )
}

export default BottomNav
