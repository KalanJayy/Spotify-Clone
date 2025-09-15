import { Home, Library, Search, User } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function SideBar() {
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Search, label: "Search", path: "/search" },
    { icon: Library, label: "Library", path: "/library" },
    { icon: User, label: "Profile", path: "/profile" },
  ]

  return (
    <aside className="h-screen w-64 bg-black text-gray-200 flex flex-col">
      {/* Logo / Title */}
      <div className="h-16 flex items-center px-6 text-xl font-bold border-b border-neutral-800 text-green-500">
        My Spotify
      </div>

      {/* Nav Links */}
      <nav className="flex-1 flex flex-col px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                isActive
                  ? "bg-neutral-800 text-white"
                  : "text-gray-400 hover:bg-neutral-800 hover:text-white"
              }`
            }
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
