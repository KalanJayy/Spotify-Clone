export default function SideBar () {
    return (
        <aside className="bg-black text-white p-6 w-60">
            <h1 className="text-xl font-bold mb-6">My Spotify</h1>
            <nav className="space-y-3">
                <div>Home</div>
                <div>Search</div>
                <div>Library</div>
            </nav>
        </aside>
    );
}