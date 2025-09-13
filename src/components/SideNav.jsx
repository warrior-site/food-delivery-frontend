import React from "react"
import { Home, Search, User, History, Play } from "lucide-react"
import { NavLink } from "react-router-dom"

function SideNav() {
  const baseClasses = "flex flex-row items-center gap-2 p-3 rounded transition-colors w-full"
  const activeClasses = "bg-gray-400 text-black"
  const inactiveClasses = "text-white"

  return (
    // Hidden on mobile, flex column only on md and larger
    <div className="hidden md:flex flex-col items-start h-full w-[15rem] bg-gray-800 gap-3 text-sm p-4">
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

export default SideNav
