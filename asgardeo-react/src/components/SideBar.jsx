import { Home, Library, Search, User } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function SideBar () {

    const navItems = [
        { icon: Home, label: "Home", path: "/"},
        { icon: Search, label: "Search", path: "/search"},
        { icon: Library, label: "Library", path: "/library"},
        { icon: User, label: "User", path: "/profile"}
    ]

    return (
        <aside className="bg-black text-white p-6 w-60">
            <div>
                <h1 className="text-xl font-bold mb-6">My Spotify</h1>
            </div>
            <nav>
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                    >
                        <item.icon size={20}/>
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}