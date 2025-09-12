import { playlists } from "../data/mock";

export default function Home () {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {playlists.map(p => (
                <div key={p.id} className="bg-neutral-800 p-4 rounded hover:bg-neutral-700 transition">
                    <img src={p.cover} alt={p.title} className="w-full rounded mb-2" />
                    <h3 className="text-white font-semibold">{p.title}</h3>
                </div>
            ))}
        </div>
    );
}